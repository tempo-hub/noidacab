// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { PlusCircle, ArrowLeft, Image as ImageIcon, Tag, Hash, Key } from "lucide-react";
// import Link from "next/link";

// interface BlogFormData {
//   title: string;
//   slug: string;
//   category: string;
//   description: string;
//   keywords: string;
//   hashtags: string;
//   imageId: string;
//   content: string;
// }

// const initialFormState: BlogFormData = {
//   title: "",
//   slug: "",
//   category: "Taxi Service",
//   description: "",
//   keywords: "",
//   hashtags: "",
//   imageId: "",
//   content: "",
// };

// export default function CreateBlogPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState<BlogFormData>(initialFormState);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => {
//       const updated = { ...prev, [name]: value };
//       // Auto-generate URL slug from title
//       if (name === "title" && !prev.slug) {
//         updated.slug = value
//           .toLowerCase()
//           .replace(/[^a-z0-9]+/g, "-")
//           .replace(/(^-|-$)+/g, "");
//       }
//       return updated;
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     // Format comma-separated keywords and hashtags into arrays
//     const formattedKeywords = formData.keywords
//       .split(",")
//       .map((k) => k.trim())
//       .filter(Boolean);

//     const formattedHashtags = formData.hashtags
//       .split(",")
//       .map((h) => {
//         const tag = h.trim();
//         return tag.startsWith("#") ? tag : `#${tag}`;
//       })
//       .filter((h) => h !== "#");

//     const payload = {
//       title: formData.title,
//       slug: formData.slug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
//       category: formData.category,
//       description: formData.description,
//       keywords: formattedKeywords,
//       hashtags: formattedHashtags,
//       imageId: formData.imageId,
//       content: formData.content,
//     };

//     try {
//       const res = await fetch("/api/blogs", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Failed to create blog post");
//       }

//       router.push("/admin");
//       router.refresh();
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-100/70 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Navigation & Header */}
//         <div className="mb-6 flex items-center justify-between">
//           <Link
//             href="/admin"
//             className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-amber-600 transition"
//           >
//             <ArrowLeft size={16} /> Back to Dashboard
//           </Link>
//           <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
//             Blog Publisher
//           </span>
//         </div>

//         <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 sm:p-8 shadow-xl backdrop-blur-md">
//           <div className="mb-6">
//             <h1 className="text-2xl font-black text-slate-900">Create New Blog Post</h1>
//             <p className="mt-1 text-xs text-slate-500">
//               Fill in the post details, metadata tags, and content below.
//             </p>
//           </div>

//           {error && (
//             <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs font-semibold text-red-600">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Title & Slug */}
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   required
//                   placeholder="e.g. Varanasi Taxi Service Contact Number"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="w-full rounded-xl border border-slate-300 bg-transparent p-3 text-sm text-slate-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
//                   URL Slug
//                 </label>
//                 <input
//                   type="text"
//                   name="slug"
//                   required
//                   placeholder="e.g. varanasi-taxi-service-contact-number"
//                   value={formData.slug}
//                   onChange={handleChange}
//                   className="w-full rounded-xl border border-slate-300 bg-transparent p-3 text-sm font-mono text-slate-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
//                 />
//               </div>
//             </div>

//             {/* Category & Image ID */}
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
//                   Category
//                 </label>
//                 <div className="flex items-center rounded-xl border border-slate-300 px-3 py-2.5 focus-within:border-amber-600 focus-within:ring-1 focus-within:ring-amber-600">
//                   <Tag size={16} className="text-slate-400 mr-2" />
//                   <input
//                     type="text"
//                     name="category"
//                     required
//                     placeholder="e.g. Taxi Fare, Outstation, Airport Taxi"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className="w-full bg-transparent text-sm text-slate-900 outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
//                   Image ID / Cover URL
//                 </label>
//                 <div className="flex items-center rounded-xl border border-slate-300 px-3 py-2.5 focus-within:border-amber-600 focus-within:ring-1 focus-within:ring-amber-600">
//                   <ImageIcon size={16} className="text-slate-400 mr-2" />
//                   <input
//                     type="text"
//                     name="imageId"
//                     placeholder="Cloudinary public ID or full image URL"
//                     value={formData.imageId}
//                     onChange={handleChange}
//                     className="w-full bg-transparent text-sm text-slate-900 outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Keywords & Hashtags */}
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
//                   Keywords (comma-separated)
//                 </label>
//                 <div className="flex items-center rounded-xl border border-slate-300 px-3 py-2.5 focus-within:border-amber-600 focus-within:ring-1 focus-within:ring-amber-600">
//                   <Key size={16} className="text-slate-400 mr-2" />
//                   <input
//                     type="text"
//                     name="keywords"
//                     placeholder="noida cab, taxi booking, outstation cab"
//                     value={formData.keywords}
//                     onChange={handleChange}
//                     className="w-full bg-transparent text-sm text-slate-900 outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
//                   Hashtags (comma-separated)
//                 </label>
//                 <div className="flex items-center rounded-xl border border-slate-300 px-3 py-2.5 focus-within:border-amber-600 focus-within:ring-1 focus-within:ring-amber-600">
//                   <Hash size={16} className="text-slate-400 mr-2" />
//                   <input
//                     type="text"
//                     name="hashtags"
//                     placeholder="NoidaCab, OutstationTaxi, CabService"
//                     value={formData.hashtags}
//                     onChange={handleChange}
//                     className="w-full bg-transparent text-sm text-slate-900 outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
//                 Short Description / Excerpt
//               </label>
//               <textarea
//                 name="description"
//                 rows={2}
//                 required
//                 placeholder="Brief summary used for previews and SEO meta description..."
//                 value={formData.description}
//                 onChange={handleChange}
//                 className="w-full rounded-xl border border-slate-300 bg-transparent p-3 text-sm text-slate-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
//               />
//             </div>

//             {/* Content (HTML Supported) */}
//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
//                 Blog Content (Supports HTML, Tables, Headings)
//               </label>
//               <textarea
//                 name="content"
//                 rows={12}
//                 required
//                 placeholder="Write your article here. HTML tags (<h2>, <p>, <table>, <ul>) are supported..."
//                 value={formData.content}
//                 onChange={handleChange}
//                 className="w-full rounded-xl border border-slate-300 bg-transparent p-3 font-mono text-sm text-slate-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-amber-700 active:scale-[0.99] disabled:opacity-50"
//               >
//                 <PlusCircle size={18} />
//                 {loading ? "Publishing Blog..." : "Publish Blog Post"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

interface Blog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  keywords: string[];
  hashtags: string[];
  content: string;
  imageId?: string;
  createdAt?: string;
}

export default function AdminBlogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const editorConfig= useMemo(
    () => ({
      // readonly: false,

      height:600,
      allowResizeY: false,
      toolbarAdaptive: false,

      uploader: {
        url: `/api/upload`,
        method: "POST",

        filesVariableName: () => "image",

        isSuccess: (resp: { success: boolean }) => {
          // console.log("UPLOAD SUCCESS:", resp);
          return resp.success === true;
        },

        process: (resp: { imageId: string }) => {
          // console.log("UPLOAD RESPONSE:", resp);

          return {
            files: [`/api/image/${resp.imageId}`],
            isImages: [true],
            path: "",
            baseurl: "",
          };
        },

        error: (e: Error) => {
          console.log("UPLOAD ERROR:", e);
        },
      },
    }),
    [],
  );

  /* Slug */
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  /* Reset Form */
  const resetForm = () => {
    setTitle("");
    setSlug("");
    setCategory("");
    setDescription("");
    setKeywords("");
    setHashtags("");
    setContent("");
    setEditingId(null);
    setImage(null);
    setPreview("");
  };

  /* Handle Image */
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Only image files allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be under 2MB");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* Upload Image */
  const uploadImageToMongoDB = async () => {
    if (!image) return "";

    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Image upload failed");
    }

    return data.imageId;
  };

  /* Fetch Blogs */
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/blogs");
      const data = await res.json();

      setBlogs(data.blogs || []);
    } catch {
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* Submit */
  const handleSubmit = async () => {
    const cleanContent = content
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, "")
      .trim();

    if (
      !title.trim() ||
      !slug.trim() ||
      !category.trim() ||
      !description.trim() ||
      !keywords.trim() ||
      !hashtags.trim() ||
      !cleanContent
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setSubmitting(true);

      let imageId = "";

      /* New image selected */
      if (image) {
        imageId = await uploadImageToMongoDB();
      }

      /* Edit mode + no new image */
      if (editingId && !image) {
        const oldBlog = blogs.find((item) => item._id === editingId);
        imageId = oldBlog?.imageId || "";
      }

      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        category,
        description: description.trim(),
        content,
        imageId,

        keywords: keywords
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        hashtags: hashtags
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      let res;

      if (editingId) {
        res = await fetch(`/api/blogs/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } else {
        if (!imageId) {
          toast.error("Please upload image");
          return;
        }

        res = await fetch("/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed");
      }

      toast.success(
        editingId ? "Blog Updated Successfully" : "Blog Published Successfully",
      );

      resetForm();
      fetchBlogs();
      router.refresh();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  /* Delete */
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete this blog?");

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Blog Deleted");
      fetchBlogs();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Delete failed";
      toast.error(message);
    }
  };

  /* Edit */
  const handleEdit = (blog: Blog) => {
    setTitle(blog.title);
    setSlug(blog.slug);
    setCategory(blog.category);
    setDescription(blog.description);
    setKeywords(blog.keywords.join(", "));
    setHashtags(blog.hashtags.join(", "));
    setContent(blog.content);
    setEditingId(blog._id);
    setImage(null);

    if (blog.imageId) {
      setPreview(`/api/image/${blog.imageId}`);
    } else {
      setPreview("");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          Admin Blog Dashboard
        </h1>

        {/* Form */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-5 text-slate-800">
            {editingId ? "Edit Blog" : "Create New Blog"}
          </h2>

          <input
            type="text"
            placeholder="Blog title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setSlug(generateSlug(e.target.value));
            }}
            className="w-full p-3 border rounded-xl mb-4 text-slate-600"
          />

          <input
            type="text"
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(generateSlug(e.target.value))}
            className="w-full p-3 border rounded-xl mb-4 text-slate-600"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-xl mb-4 text-slate-600"
          >
            <option value="">Select Category</option>
            <option value="Travel Guide">Travel Guide</option>
            <option value="Taxi Fare">Taxi Fare</option>
            <option value="Tempo Traveller">Tempo Traveller</option>
            <option value="Tour Package">Tour Package</option>
            <option value="Outstation Taxi">Outstation Taxi</option>
          </select>

          <textarea
            rows={4}
            placeholder="Meta Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-xl mb-4 text-slate-600"
          />

          <input
            type="text"
            placeholder="keyword1, keyword2"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full p-3 border rounded-xl mb-4 text-slate-600"
          />

          <input
            type="text"
            placeholder="#travel, #taxi"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            className="w-full p-3 border rounded-xl mb-4 text-slate-600"
          />

          {/* Image */}
          <div className="mb-5">
            <label className="block font-semibold mb-2 text-slate-800">Blog Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full p-3 border rounded-xl text-slate-600"
            />

            {preview && (
              <div className="relative w-full h-56 mt-4 rounded-xl overflow-hidden">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Editor */}
          <div className="h-[400px] text-slate-700 mb-6 border rounded-xl overflow-auto [&_ol]:list-decimal [&_ol]:pl-8 [&_ul]:list-disc [&_ul]:pl-8 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-4
  [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mb-3
  [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-2
  [&_p]:text-base [&_p]:mb-4 [&_p]:leading-relaxed">
            <JoditEditor
             value={content}
            config={editorConfig}
        onChange={(newContent) => {
          setContent(newContent);
        }} 
          />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end">
            <button
              onClick={resetForm}
              className="px-5 py-2 border rounded-xl cursor-pointer *:bg-amber-50 text-amber-600 hover:bg-amber-100 transition"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="px-6 py-2 bg-amber-600  text-white rounded-xl cursor-pointer hover:opacity-90 transition disabled:opacity-60"
            >
              {submitting
                ? "Saving..."
                : editingId
                  ? "Update Blog"
                  : "Publish Blog"}
            </button>
          </div>
        </div>

        {/* Blog List */}
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">All Blogs</h2>

        {/* Blog Cards */}
        {loading ? (
          <p>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p>No blogs found</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-slate-50 rounded-2xl p-5 shadow"
              >
                {blog.imageId && (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={`/api/image/${blog.imageId}`}
                      alt={blog.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                )}

                <h3 className="text-lg font-bold text-slate-600">{blog.title}</h3>

                <p className="text-xs mt-1 text-slate-600">{blog.category}</p>

                <p className="text-sm mt-3 line-clamp-2 text-slate-600">{blog.description}</p>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-4 py-1 text-sm bg-amber-100 text-amber-600 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}