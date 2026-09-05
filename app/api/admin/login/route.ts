// app/api/admin/login/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { connectToDatabase } from "@/lib/mongodb";
import Admin from "@/models/Admin";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback_secret_key"
);

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if any admin account exists
    let admin = await Admin.findOne({ email: email.toLowerCase() });

    // Seed the first admin once if the database collection is empty
    const totalAdmins = await Admin.countDocuments();
    if (totalAdmins === 0) {
      const hashedPassword = await bcrypt.hash(password, 10);
      admin = await Admin.create({
        email: email.toLowerCase(),
        password: hashedPassword,
      });
    }

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid admin credentials" },
        { status: 401 }
      );
    }

    // Verify password against hashed DB record
    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid admin credentials" },
        { status: 401 }
      );
    }

    // Generate authenticated JWT session
    const token = await new SignJWT({ email: admin.email, role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .sign(JWT_SECRET);

    const response = NextResponse.json(
      { message: "Logged in successfully" },
      { status: 200 }
    );

    // Save session in an HTTP-only secure cookie
    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}