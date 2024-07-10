import axios from "axios";
import { useEffect, useState } from "react";

const useProject = () => {
  const [projects, setProjects] = useState([]);
  const [projectLoading, setProjectLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjectData = async () => {
    try {
      setProjectLoading(true);
      const response = await axios.get(`/api/v1/show-all-projects`);
      if (!response.data) {
        const errorMessage = `Fetching project data is failed!`;
        throw new Error(errorMessage);
      }

      setProjects(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setProjectLoading(false);
    }
  };
  useEffect(() => {
    setProjectLoading(true);
    fetchProjectData();
  }, []);
  return {
    projects,
    projectLoading,
    error,
  };
};
export default useProject;
