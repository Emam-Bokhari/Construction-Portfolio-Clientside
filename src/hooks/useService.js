import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchServiceData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/v1/all-services`);
      if (!response.ok) {
        const errorMessage = `Fetching service data failed!:${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setServices(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true)
    fetchServiceData();
  }, []);
  return{
    services,
    error,
    loading,
  }
};
export default useService;
