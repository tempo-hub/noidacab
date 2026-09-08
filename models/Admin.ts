// models/Admin.ts
import mongoose, { Schema, model, models } from "mongoose";

export interface IAdmin {
  email: string;
  password: string; // Hashed password
  createdAt?: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, 
      trim: true 
    },
    password: { 
      type: String, 
      required: true 
    },
  },
  { timestamps: true }
);

export default models.Admin || model<IAdmin>("Admin", AdminSchema);