import { useEffect, useState } from "react";

const useTeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeamMembersData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/v1/show-all-team-members`);
      if (!response.ok) {
        const errorMessage = `Fetching team members data failed!${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setTeamMembers(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchTeamMembersData();
  }, []);
  return {
    teamMembers,
    loading,
    error,
  };
};
export default useTeamMember;
