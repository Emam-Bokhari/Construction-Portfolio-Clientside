import { Fragment, useState } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddTeamMember() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    imageUrl: "",
    name: "",
    designation: "",
    facebookSocialLink: "",
    twitterSocialLink: "",
    instagramSocialLink: "",
    linkedinSocialLink: "",
  });
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
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

    // console.log(formData);

    try {
      await axios.post("/api/v1/create-team-member", formData);

      // clear form data
      setFormData({
        imageUrl: "",
        name: "",
        designation: "",
        facebookSocialLink: "",
        twitterSocialLink: "",
        instagramSocialLink: "",
        linkedinSocialLink: "",
      });

      setTimeout(() => {
        navigate("/dashboard/manageTeamMember");
        window.location.reload();
      }, 1000);
      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl  mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Add Team Member
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
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="facebookSocialLink"
                  placeholder="Enter Facebook Profile Link"
                />
                <input
                  value={formData.twitterSocialLink}
                  onChange={handleInputChange}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="twitterSocialLink"
                  placeholder="Enter Twitter Profile Link"
                />
                <input
                  value={formData.instagramSocialLink}
                  onChange={handleInputChange}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="instagramSocialLink"
                  placeholder="Enter Instagram Profile Link"
                />
                <input
                  value={formData.linkedinSocialLink}
                  onChange={handleInputChange}
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
                  Add Team Member
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
