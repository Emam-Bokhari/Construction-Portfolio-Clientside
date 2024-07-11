import { Fragment, useEffect, useState } from "react";
import WrapStyle from "../../../../../Dashboard/WrapStyle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa";

export default function Update() {
  const navigate = useNavigate();
  const { teamMemberId } = useParams();
  const [teamMembers, setTeamMembers] = useState({});

  const [formData, setFormData] = useState({
    imageUrl: "",
    name: "",
    designation: "",
    facebookSocialLink: "",
    twitterSocialLink: "",
    instagramSocialLink: "",
    linkedinSocialLink: "",
  });

  //   fetch team member data
  useEffect(() => {
    const fetchTeamMemberData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/show-specefic-team-member/${teamMemberId}`
        );
        if (!response.data) {
          const errorMessage = `Fetching team member data is failed!`;
          throw new Error(errorMessage);
        }
        setTeamMembers(response.data);
        setFormData({
          ...response.data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeamMemberData();
  }, [teamMemberId]);
  console.log(teamMembers);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(name, value);
  };

  //   update
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.imageUrl) {
      toast.error("Please fill image url feild!");
      return;
    } else if (!formData.name) {
      toast.error("Please fill team member name!");
      return;
    } else if (!formData.designation) {
      toast.error("Please fill designation!");
      return;
    }

    console.log(formData);
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You can be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    });

    try {
      const response = await axios.patch(
        `/api/v1/update-team-member/${teamMemberId}`,
        formData
      );
      if (response.data.modifiedCount > 0) {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Updated!",
            text: "Team member data has been updated.",
            icon: "success",
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          });
        }
      }

      navigate("/dashboard/manageTeamMember");

      console.log("Team member updated successfully:", response.data);
      // Optionally handle success scenario (e.g., show success message)
    } catch (error) {
      console.error("Error updating service:", error);
      // Optionally handle error scenario (e.g., show error message to user)
    }
  };

  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl  mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Update Team Member
          </h3>

          <div className="bg-white rounded-xl p-4 ">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* team member image url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="imageUrl"
                >
                  Team Member Image Url
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  defaultValue={teamMembers.imageUrl}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="imageUrl"
                  placeholder="Enter Team Member Image Url"
                />
              </div>

              {/* team member name  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="name"
                >
                  Team Member Name
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.name}
                  onChange={handleInputChange}
                  defaultValue={teamMembers.name}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2 capitalize"
                  type="text"
                  name="name"
                  placeholder="Enter Team Member Name"
                />
                <span className="text-sm text-[#95A3B9] block ">
                  Do not exceed 20 characters when entering the team member
                  name.
                </span>
              </div>

              {/* team member designation  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="designation"
                >
                  Team Member Designation
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.designation}
                  onChange={handleInputChange}
                  defaultValue={teamMembers.designation}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2 capitalize"
                  type="text"
                  name="designation"
                  placeholder="Enter Team Member Designation"
                />
                <span className="text-sm text-[#95A3B9] block">
                  Do not exceed 20 characters when entering the team member
                  designation.
                </span>
              </div>

              {/* team member social links  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="teamMemberSocialLink"
                >
                  Team Member Social Link
                </label>
                <input
                  value={formData.facebookSocialLink}
                  onChange={handleInputChange}
                  defaultValue={teamMembers.facebookSocialLink}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="facebookSocialLink"
                  placeholder="Enter Facebook Profile Link"
                />
                <input
                  value={formData.twitterSocialLink}
                  onChange={handleInputChange}
                  defaultValue={teamMembers.twitterSocialLink}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="twitterSocialLink"
                  placeholder="Enter Twitter Profile Link"
                />
                <input
                  value={formData.instagramSocialLink}
                  onChange={handleInputChange}
                  defaultValue={teamMembers.instagramSocialLink}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="instagramSocialLink"
                  placeholder="Enter Instagram Profile Link"
                />
                <input
                  value={formData.linkedinSocialLink}
                  onChange={handleInputChange}
                  defaultValue={teamMembers.linkedinSocialLink}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="linkedinSocialLink"
                  placeholder="Enter Linkedin Profile Link"
                />
              </div>

              {/* add button */}
              <div>
                <button className="border-2 border-[#2275FC] rounded-xl w-[230px] py-4 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
                  <FaPlus className="inline mr-1" />
                  Update Team Member
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
