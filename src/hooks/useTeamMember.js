import axios from "axios";
import { useEffect, useState } from "react";

const useTeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamMemberLoading, setTeamMemberLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeamMembersData = async () => {
    try {
      setTeamMemberLoading(true);
      const response = await axios.get(`/api/v1/show-all-team-members`);
      if (!response.data) {
        const errorMessage = `Fetching team members data failed!`;
        throw new Error(errorMessage);
      }
      setTeamMembers(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setTeamMemberLoading(false);
    }
  };
  useEffect(() => {
    setTeamMemberLoading(true);
    fetchTeamMembersData();
  }, []);
  return {
    teamMembers,
    teamMemberLoading,
    error,
  };
};
export default useTeamMember;
