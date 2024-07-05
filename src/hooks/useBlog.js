import { useEffect, useState } from "react";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/v1/show-all-blogs`);
      if (!response.ok) {
        const errorMessage = `Fetching blog data is failed!${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchBlogData();
  }, []);
  return {
    blogs,
    loading,
    error,
  };
};
export default useBlog;
