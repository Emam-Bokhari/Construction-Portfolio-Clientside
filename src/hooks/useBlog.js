import axios from "axios";
import { useEffect, useState } from "react";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogLoading, setBlogLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Effecting...");
    let ignore = false;
    const fetchBlogData = async () => {
      console.log("Fetching...");
      try {
        setBlogLoading(true);
        const response = await axios.get(`/api/v1/show-all-blogs`);
        if (!response.data) {
          const errorMessage = `Fetching blog data is failed!`;
          throw new Error(errorMessage);
        }

        if (!ignore) {
          console.log("Setting...");
          setBlogs(response.data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
        }
      } finally {
        if (!ignore) {
          setBlogLoading(false);
        }
      }
    };

    fetchBlogData();

    return () => {
      ignore = true;
    };
  }, []);
  return {
    blogs,
    blogLoading,
    error,
  };
};
export default useBlog;
