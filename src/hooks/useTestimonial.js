import axios from "axios";
import { useEffect, useState } from "react";

const useTestimonial = () => {
  const [testimonials, setTestimonialLoading] = useState([]);
  const [testimonialLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTestimonialData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/v1/show-all-testimonials`);
      if (!response.data) {
        const errorMessage = `Fetching testimonials data failed!$`;
        throw new Error(errorMessage);
      }
      setTestimonialLoading(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchTestimonialData();
  }, []);
  return {
    testimonials,
    testimonialLoading,
    error,
  };
};
export default useTestimonial;
