"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  CalendarDays,
  PenSquare,
  Loader2,
  Trash2,
  Edit,
  ExternalLink,
  PlusCircle,
  X,
  Save,
  Tag,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  description: string;
  content: string;
  imageId?: string;
  coverImage?: string;
  keywords?: string[];
  hashtags?: string[];
  status?: string;
  createdAt?: string;
}

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState<BlogItem | null>(null);
  const [saveLoading, setSaveLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (!res.ok) {
        throw new Error("Logout failed");
      }else {
        router.push("/admin/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      // Pass ?all=true to retrieve all database records (both published and drafts)
      const res = await fetch("/api/blogs?all=true");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch blogs");
      }

      // Handle array response or object-wrapped array response
      const blogList = Array.isArray(data) ? data : data.blogs || [];
      setBlogs(blogList);
    } catch (error: any) {
      console.error("Dashboard error:", error);
      setActionError(error.message);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Delete Blog
  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/blogs?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to delete blog");
      }

      setBlogs((prev) => prev.filter((item) => item._id !== id));
    } catch (err: any) {
      alert(err.message || "Failed to delete");
    }
  };

  // Open Edit Modal
  const handleEditClick = (blog: BlogItem) => {
    setEditingBlog({ ...blog });
  };

  // Save Edit Form
  const handleUpdateSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog) return;

    try {
      setSaveLoading(true);
      const res = await fetch("/api/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingBlog),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update blog");
      }

      // Update in local state
      setBlogs((prev) =>
        prev.map((item) => (item._id === editingBlog._id ? data : item))
      );
      setEditingBlog(null);
    } catch (err: any) {
      alert(err.message || "Failed to update blog");
    } finally {
      setSaveLoading(false);
    }
  };

  const statsCards = [
    {
      title: "Total Blogs",
      value: blogs.length,
      icon: FileText,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      border: "from-blue-500 to-cyan-500",
    },
    {
      title: "Published",
      value: blogs.filter((b) => (b.status || "published") === "published").length,
      icon: PenSquare,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      border: "from-emerald-500 to-green-500",
    },
    {
      title: "Categories",
      value: new Set(blogs.map((b) => b.category || "General")).size,
      icon: CalendarDays,
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      border: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="space-y-8 py-18 bg-white/95">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Dashboard Overview
          </h2>
          <p className="text-slate-500 mt-1 text-sm">
            Manage your blog publications, edit active posts, or create new guides.
          </p>
        </div>


        <div className="flex gap-3"> 
           <div className="items-center gap-3">
          <Link
            href="/admin/blogs/create"
            className="flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-amber-700 transition"
          >
            <PlusCircle size={17} /> Create Blog
          </Link>
        </div>
        <div className="items-center gap-1">
          <button
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-amber-700 transition active:scale-[0.98] cursor-pointer"
      >
        <LogOut size={17} /> Log Out
      </button>
        </div>
         </div>
        
      </div>

      {actionError && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-600">
          {actionError}
        </div>
      )}

      {/* Loading state */}
      {loading ? (
        <div className="bg-white rounded-2xl shadow-sm border p-12 flex items-center justify-center gap-3">
          <Loader2 className="w-5 h-5 animate-spin text-amber-600" />
          <span className="text-slate-600 font-medium text-sm">
            Loading database blogs...
          </span>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition-all overflow-hidden"
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${stat.border}`} />
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {stat.title}
                      </p>
                      <h3 className="text-3xl font-black text-slate-900 mt-1">
                        {stat.value}
                      </h3>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgColor}`}
                    >
                      <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Blogs Table */}
          <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-base">
                All Published & Draft Blogs ({blogs.length})
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase text-slate-400">
                  <tr>
                    <th className="px-6 py-3.5">Blog Details</th>
                    <th className="px-6 py-3.5">Category</th>
                    <th className="px-6 py-3.5">Status</th>
                    <th className="px-6 py-3.5">Date</th>
                    <th className="px-6 py-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {blogs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-slate-400 text-sm">
                        No blogs found in the database.
                      </td>
                    </tr>
                  ) : (
                    blogs.map((b) => (
                      <tr key={b._id} className="hover:bg-slate-50/70 transition">
                        <td className="px-6 py-4 max-w-xs">
                          <p className="font-bold text-slate-900 truncate">
                            {b.title}
                          </p>
                          <span className="text-xs font-mono text-slate-400 block truncate">
                            /{b.slug}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold px-2 py-0.5 rounded-md">
                            <Tag size={10} />
                            {b.category || "General"}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                              b.status === "draft"
                                ? "bg-slate-100 text-slate-600"
                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            {b.status || "published"}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-xs text-slate-500 whitespace-nowrap">
                          {b.createdAt
                            ? new Date(b.createdAt).toLocaleDateString("en-IN")
                            : "N/A"}
                        </td>

                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/blog/${b.slug}`}
                              target="_blank"
                              title="View live post"
                              className="p-1.5 text-slate-400 hover:text-amber-600 rounded-lg transition hover:bg-amber-50"
                            >
                              <ExternalLink size={16} />
                            </Link>
                            <button
                              onClick={() => handleEditClick(b)}
                              title="Edit post"
                              className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg transition hover:bg-blue-50"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(b._id, b.title)}
                              title="Delete post"
                              className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition hover:bg-red-50"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Inline Edit Modal */}
      {editingBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="font-bold text-lg text-slate-900">Edit Blog Post</h3>
              <button
                onClick={() => setEditingBlog(null)}
                className="text-slate-400 hover:text-slate-800"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleUpdateSave} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-800 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={editingBlog.title}
                  onChange={(e) =>
                    setEditingBlog({ ...editingBlog, title: e.target.value })
                  }
                  className="w-full text-slate-700 border border-slate-300 p-2.5 rounded-xl text-sm outline-none focus:border-amber-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-800 mb-1">
                    Slug
                  </label>
                  <input
                    type="text"
                    required
                    value={editingBlog.slug}
                    onChange={(e) =>
                      setEditingBlog({ ...editingBlog, slug: e.target.value })
                    }
                    className="w-full text-slate-700 border border-slate-300 p-2.5 rounded-xl text-sm font-mono outline-none focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-800 mb-1">
                    Status
                  </label>
                  <select
                    value={editingBlog.status || "published"}
                    onChange={(e) =>
                      setEditingBlog({ ...editingBlog, status: e.target.value })
                    }
                    className="w-full text-slate-700 border border-slate-300 p-2.5 rounded-xl text-sm outline-none focus:border-amber-600"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-800 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={editingBlog.category || ""}
                  onChange={(e) =>
                    setEditingBlog({ ...editingBlog, category: e.target.value })
                  }
                  className="w-full text-slate-700 border border-slate-300 p-2.5 rounded-xl text-sm outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-800 mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  required
                  value={editingBlog.description}
                  onChange={(e) =>
                    setEditingBlog({ ...editingBlog, description: e.target.value })
                  }
                  className="w-full text-slate-700 border border-slate-300 p-2.5 rounded-xl text-sm outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-800 mb-1">
                  HTML Content
                </label>
                <textarea
                  rows={8}
                  required
                  value={editingBlog.content}
                  onChange={(e) =>
                    setEditingBlog({ ...editingBlog, content: e.target.value })
                  }
                  className="w-full text-slate-700 border border-slate-300 p-2.5 rounded-xl text-sm font-mono outline-none focus:border-amber-600"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setEditingBlog(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saveLoading}
                  className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition disabled:opacity-50"
                >
                  <Save size={14} />
                  {saveLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}