import { useEffect, useState } from "react";
import axios from "axios";

const useService = () => {
  const [services, setServices] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchServiceData = async () => {
    try {
      setServiceLoading(true);
      const response = await axios.get(`/api/v1/all-services`);

      if (!response.data) {
        throw new Error(`No data found`);
      }

      setServices(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setServiceLoading(false);
    }
  };

  useEffect(() => {
    setServiceLoading(true)
    fetchServiceData();
  }, []);

  return {
    services,
    serviceLoading,
    error
  };
};

export default useService;
