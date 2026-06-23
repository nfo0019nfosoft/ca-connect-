import { useEffect, useState } from "react";
import axios from "axios";

function AdminBlogDetails() {

  const [blogs, setBlogs] = useState([]);

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

  return (

    <div>

      <h1>All Blogs</h1>

      {

        blogs.map((blog) => (

          <div key={blog._id}>

            <h3>{blog.title}</h3>

          </div>

        ))

      }

    </div>

  );

}

export default AdminBlogDetails;