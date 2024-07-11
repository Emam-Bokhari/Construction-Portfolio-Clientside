import { Fragment, useEffect, useState } from "react";
import WrapStyle from "../../../../../Dashboard/WrapStyle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa";

export default function UpdateProject() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [projects, setProjects] = useState({});

  const [formData, setFormData] = useState({
    imageUrl: "",
  });

  //   fetch team members data
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(
          // projectId
          `/api/v1/show-specefic-project/${projectId}`
        );
        if (!response.data) {
          const errorMessage = `Fetching project data is failed!`;
          throw new Error(errorMessage);
        }
        setProjects(response.data);
        setFormData({
          ...response.data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjectData();
  }, [projectId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   update
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.imageUrl) {
      toast.error("Please fill image url feild!");
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
        `/api/v1/update-project/${projectId}`,
        formData
      );
      if (response.data.modifiedCount > 0) {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Updated!",
            text: "Your project picture has been updated.",
            icon: "success",
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          });
        }
      }

      navigate("/dashboard/manageProject");

      console.log("Project updated successfully:", response.data);
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
            Update Project
          </h3>

          <div className="bg-white rounded-xl p-4 ">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* project image url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="imageUrl"
                >
                  Project Image Url
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  defaultValue={projects.imageUrl}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="imageUrl"
                  placeholder="Enter Project Image Url"
                />
              </div>

              {/* add button  */}
              <div>
                <button className="border-2 border-[#2275FC] rounded-xl w-[230px] py-4 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
                  <FaPlus className="inline mr-1" />
                  Update Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
