// import { NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/mongodb";
// import Blog from "@/models/Blog";

// export const dynamic = "force-dynamic";

// // Helper to normalize tags/keywords into String[]
// function parseArrayField(val: any): string[] {
//   if (Array.isArray(val)) {
//     return val.map((item) => String(item).trim()).filter(Boolean);
//   }
//   if (typeof val === "string") {
//     return val
//       .split(",")
//       .map((item) => item.trim())
//       .filter(Boolean);
//   }
//   return [];
// }

// /* =========================================================
//    GET ALL OR PUBLISHED BLOGS
// ========================================================= */
// export async function GET(req: Request) {
//   try {
//     await connectToDatabase();
//     const { searchParams } = new URL(req.url);
//     const getAll = searchParams.get("all") === "true";

//     // If 'all=true' (Admin), fetch everything. Otherwise fetch published or legacy posts.
//     const filter = getAll
//       ? {}
//       : {
//           $or: [
//             { status: "published" },
//             { status: { $exists: false } },
//             { status: null },
//           ],
//         };

//     const blogs = await Blog.find(filter).sort({ createdAt: -1 }).lean();
//     return NextResponse.json(blogs, { status: 200 });
//   } catch (error: any) {
//     console.error("GET /api/blogs error:", error);
//     return NextResponse.json({ error: error.message || "Failed to fetch blogs" }, { status: 500 });
//   }
// }

// /* =========================================================
//    POST CREATE BLOG
// ========================================================= */
// export async function POST(req: Request) {
//   try {
//     await connectToDatabase();
//     const body = await req.json();

//     const { title, slug, description, content } = body;

//     // 1. Validate mandatory fields
//     if (!title?.trim() || !slug?.trim() || !description?.trim() || !content?.trim()) {
//       return NextResponse.json(
//         { error: "Title, slug, description, and content are required fields." },
//         { status: 400 }
//       );
//     }

//     // 2. Format slug
//     const cleanSlug = slug
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)+/g, "");

//     // 3. Duplicate check
//     const existingBlog = await Blog.findOne({ slug: cleanSlug });
//     if (existingBlog) {
//       return NextResponse.json(
//         { error: `Blog with slug "${cleanSlug}" already exists.` },
//         { status: 409 }
//       );
//     }

//     // 4. Map schema properties (Array formatting & imageId support)
//     const blogData = {
//       title: title.trim(),
//       slug: cleanSlug,
//       category: body.category?.trim() || "Taxi Service",
//       description: description.trim(),
//       content: content.trim(),
//       keywords: parseArrayField(body.keywords),
//       hashtags: parseArrayField(body.hashtags).map((tag) =>
//         tag.startsWith("#") ? tag : `#${tag}`
//       ),
//       imageId: body.imageId || body.coverImage || "",
//       coverImage: body.coverImage || body.imageId || "",
//       status: body.status || "published",
//       createdAt: new Date(),
//     };

//     const newBlog = await Blog.create(blogData);
//     return NextResponse.json(newBlog, { status: 201 });
//   } catch (error: any) {
//     console.error("POST /api/blogs error:", error);
//     return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
//   }
// }

// /* =========================================================
//    PUT UPDATE BLOG
// ========================================================= */
// export async function PUT(req: Request) {
//   try {
//     await connectToDatabase();
//     const body = await req.json();
//     const { _id, ...updateData } = body;

//     if (!_id) {
//       return NextResponse.json({ error: "Blog _id is required for updates." }, { status: 400 });
//     }

//     // Clean slug if provided
//     if (updateData.slug) {
//       updateData.slug = updateData.slug
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)+/g, "");

//       // Check if another blog has this slug
//       const conflict = await Blog.findOne({
//         slug: updateData.slug,
//         _id: { $ne: _id },
//       });
//       if (conflict) {
//         return NextResponse.json(
//           { error: `Slug "${updateData.slug}" is already taken by another post.` },
//           { status: 409 }
//         );
//       }
//     }

//     // Parse array properties if updated
//     if ("keywords" in updateData) {
//       updateData.keywords = parseArrayField(updateData.keywords);
//     }
//     if ("hashtags" in updateData) {
//       updateData.hashtags = parseArrayField(updateData.hashtags).map((tag) =>
//         tag.startsWith("#") ? tag : `#${tag}`
//       );
//     }

//     // Sync image fields
//     if (updateData.imageId && !updateData.coverImage) {
//       updateData.coverImage = updateData.imageId;
//     } else if (updateData.coverImage && !updateData.imageId) {
//       updateData.imageId = updateData.coverImage;
//     }

//     const updatedBlog = await Blog.findByIdAndUpdate(_id, updateData, { new: true });

//     if (!updatedBlog) {
//       return NextResponse.json({ error: "Blog not found." }, { status: 404 });
//     }

//     return NextResponse.json(updatedBlog, { status: 200 });
//   } catch (error: any) {
//     console.error("PUT /api/blogs error:", error);
//     return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
//   }
// }

// /* =========================================================
//    DELETE BLOG
// ========================================================= */
// export async function DELETE(req: Request) {
//   try {
//     await connectToDatabase();
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");

//     if (!id) {
//       return NextResponse.json({ error: "Missing blog ID in query parameters." }, { status: 400 });
//     }

//     const deleted = await Blog.findByIdAndDelete(id);
//     if (!deleted) {
//       return NextResponse.json({ error: "Blog not found." }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
//   } catch (error: any) {
//     console.error("DELETE /api/blogs error:", error);
//     return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const body = await req.json();

    if (!body.title || !body.slug || !body.imageId) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    const blog = await Blog.create(body);

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to create blog";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const blogs = await Blog.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to fetch blogs";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectToDatabase();

    // Extract ID from URL query string ?id=...
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing blog ID" },
        { status: 400 }
      );
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    // Delete associated GridFS image if present
    // if (blog.imageId && ObjectId.isValid(blog.imageId)) {
    //   try {
    //     const bucket = new GridFSBucket(mongoose.connection.db as any, {
    //       bucketName: "images",
    //     });
    //     await bucket.delete(new ObjectId(blog.imageId));
    //   } catch (err) {
    //     console.error("Failed to delete image from GridFS:", err);
    //   }
    // }

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error: any) {
    console.error("Delete blog error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete blog" },
      { status: 500 }
    );
  }
}