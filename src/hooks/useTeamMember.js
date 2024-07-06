import { useEffect, useState } from "react";

const useTeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamMemberLoading, setTeamMemberLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeamMembersData = async () => {
    try {
      setTeamMemberLoading(true);
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
