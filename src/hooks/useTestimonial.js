import { useEffect, useState } from "react";

const useTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTestimonialData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/v1/show-all-testimonials`);
      if (!response.ok) {
        const errorMessage = `Fetching testimonials data failed!${response.status}`
        throw new Error(errorMessage)
      }
      const data=await response.json()
      setTestimonials(data)
    } catch (err) {
        setError(err)
    } finally {
        setLoading(false)
    }
  };
  useEffect(()=>{
    setLoading(true)
    fetchTestimonialData()
  },[])
  return{
    testimonials,
    loading,
    error
  }
};
export default useTestimonial;
