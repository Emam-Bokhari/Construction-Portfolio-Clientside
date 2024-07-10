import axios from "axios";
import { useEffect, useState } from "react";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogLoading, setBlogLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogData = async () => {
    try {
      setBlogLoading(true);
      const response = await axios.get(`/api/v1/show-all-blogs`);
      if (!response.data) {
        const errorMessage = `Fetching blog data is failed!`;
        throw new Error(errorMessage);
      }
      
      setBlogs(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setBlogLoading(false);
    }
  };
  useEffect(() => {
    setBlogLoading(true);
    fetchBlogData();
  }, []);
  return {
    blogs,
    blogLoading,
    error,
  };
};
export default useBlog;
