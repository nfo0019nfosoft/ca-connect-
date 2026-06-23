import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminBlogs.css";

function AdminBlogs() {

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    coverImage: "",
    author: "",
    authorImage: "",
    authorDesignation: "",
    publishDate: "",
    readTime: "",
    tags: "",
    shortDescription: "",
    content: "",
  });

  useEffect(() => {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {

      navigate("/admin");

    }

  }, [navigate]);

  useEffect(() => {

    fetchBlogs();

  }, []);

  const fetchBlogs = async () => {

    try {

      const res = await axios.get(
        "https://ca-backend-d9tc.onrender.com/api/blogs"
      );

      setBlogs(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editId) {

        await axios.put(
          `https://ca-backend-d9tc.onrender.com/api/blogs/${editId}`,
          {
            ...formData,
            tags: formData.tags
              .split(",")
              .map((tag) => tag.trim()),
          }
        );

        alert("Blog Updated Successfully");

        setEditId(null);

      } else {

        await axios.post(
          "https://ca-backend-d9tc.onrender.com/api/blogs",
          {
            ...formData,
            tags: formData.tags
              .split(",")
              .map((tag) => tag.trim()),
          }
        );

        alert("Blog Added Successfully");

      }

      setFormData({
        title: "",
        slug: "",
        category: "",
        coverImage: "",
        author: "",
        authorImage: "",
        authorDesignation: "",
        publishDate: "",
        readTime: "",
        tags: "",
        shortDescription: "",
        content: "",
      });

      fetchBlogs();

    } catch (err) {

      console.log(err);

      alert("Failed");

    }

  };

  const handleEdit = (blog) => {

    setEditId(blog._id);

    setFormData({
      title: blog.title,
      slug: blog.slug,
      category: blog.category,
      coverImage: blog.coverImage,
      author: blog.author,
      authorImage: blog.authorImage,
      authorDesignation: blog.authorDesignation,
      publishDate: blog.publishDate,
      readTime: blog.readTime,
      tags: blog.tags.join(", "),
      shortDescription: blog.shortDescription,
      content: blog.content,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this blog?")) return;

    try {

      await axios.delete(
        `https://ca-backend-d9tc.onrender.com/api/blogs/${id}`
      );

      alert("Blog Deleted Successfully");

      fetchBlogs();

    } catch (err) {

      console.log(err);

      alert("Delete Failed");

    }

  };
  return (

    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-blogs-page">

        <h2>Add Blog</h2>

        <form
          className="admin-blog-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="slug"
            placeholder="Slug"
            value={formData.slug}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />

          <input
            type="text"
            name="coverImage"
            placeholder="Cover Image URL"
            value={formData.coverImage}
            onChange={handleChange}
          />

          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
          />

          <input
            type="text"
            name="authorImage"
            placeholder="Author Image URL"
            value={formData.authorImage}
            onChange={handleChange}
          />

          <input
            type="text"
            name="authorDesignation"
            placeholder="Author Designation"
            value={formData.authorDesignation}
            onChange={handleChange}
          />

          <input
            type="text"
            name="publishDate"
            placeholder="Publish Date (20 May 2025)"
            value={formData.publishDate}
            onChange={handleChange}
          />

          <input
            type="text"
            name="readTime"
            placeholder="Read Time (5 min read)"
            value={formData.readTime}
            onChange={handleChange}
          />

          <input
            type="text"
            name="tags"
            placeholder="GST, Taxation, Business"
            value={formData.tags}
            onChange={handleChange}
          />

          <textarea
            name="shortDescription"
            placeholder="Short Description"
            value={formData.shortDescription}
            onChange={handleChange}
          />

          <textarea
            name="content"
            placeholder="Blog Content"
            value={formData.content}
            onChange={handleChange}
          />

           <button type="submit">
          {editId ? "Update Blog" : "Save Blog"}
        </button>
        
        </form>
        <div className="manage-blogs">

          <h2>Manage Blogs</h2>

          {blogs.map((blog) => (

            <div className="blog-card" key={blog._id}>

              <img src={blog.coverImage} alt="" />

              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p>{blog.category}</p>
              </div>

              <div className="blog-actions">

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(blog)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>
      </div>

    </div>







  );

}

export default AdminBlogs;