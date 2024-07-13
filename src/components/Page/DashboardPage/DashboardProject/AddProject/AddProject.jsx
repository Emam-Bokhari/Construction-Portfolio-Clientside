import { Fragment, useState } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function AddProject() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    imageUrl: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    if (!formData.imageUrl) {
      toast.error("Please fill image url feild!");
      return;
    }
    try {
      axios.post("/api/v1/create-project", formData);
      // clear form data
      setFormData({
        imageUrl: "",
      });
      setTimeout(() => {
        navigate("/golden@peach@dashboard/manageProject");
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
            Add Project
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
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
