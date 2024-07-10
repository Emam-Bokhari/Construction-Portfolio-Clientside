import { Fragment, useState } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    iconUrl: "",
    imageUrl: "",
    serviceNo: "",
    serviceName: "",
    serviceDescription: "",
    serviceBenefits: "",
    serviceBenefitsDescription: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
    try {
      const response=await axios.post("http://localhost:3000/api/v1/create-service",formData)
      console.log(response.data);
      setFormData({
        iconUrl: "",
        imageUrl: "",
        serviceNo: "",
        serviceName: "",
        serviceDescription: "",
        serviceBenefits: "",
        serviceBenefitsDescription: "",
      });
      navigate("/dashboard/manageService");
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl  mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Add Service
          </h3>

          <div className="bg-white rounded-xl p-4 ">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* service icon url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="iconUrl"
                >
                  Service Icon Url
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.serviceIconUrl}
                  onChange={handleInputChange}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-1 outline-orange-400 my-2"
                  type="text"
                  name="iconUrl"
                  placeholder="Enter Service Icon Url"
                />
              </div>
              {/* service image url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="imageUrl"
                >
                  Service Image Url
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.serviceImageUrl}
                  onChange={handleInputChange}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4  my-2 outline-1 outline-orange-400"
                  type="text"
                  name="imageUrl"
                  placeholder="Enter Service Image Url"
                />
              </div>
              {/* service no  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="serviceNo"
                >
                  Service Number
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.serviceNo}
                  onChange={handleInputChange}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4  my-2 outline-1 outline-orange-400"
                  type="text"
                  name="serviceNo"
                  placeholder="Enter Service Number"
                />
              </div>

              {/* service name  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceName"
                >
                  Service Name
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.serviceName}
                  onChange={handleInputChange}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4  my-2 outline-1 outline-orange-400"
                  type="text"
                  name="serviceName"
                  placeholder="Enter Service Name"
                />
                <span className="text-sm text-[#95A3B9] block">
                  Do not exceed 20 characters when entering the service name.
                </span>
              </div>

              {/* service description  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceDescription"
                >
                  Service Description
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <textarea
                  value={formData.serviceDescription}
                  onChange={handleInputChange}
                  className="border-[1px] border-[#E4E4E4] w-full h-[220px] rounded-lg p-4   resize-none my-2 outline-1 outline-orange-400"
                  name="serviceDescription"
                  placeholder="Enter Service Description"
                ></textarea>
              </div>

              {/* service benefits  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="serviceBenefits"
                >
                  Service Benefits
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.serviceBenefits}
                  onChange={handleInputChange}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4  my-2 outline-1 outline-orange-400"
                  type="text"
                  name="serviceBenefits"
                  placeholder="Enter Benefits"
                />
              </div>

              {/* service benefits description  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceBenefitsDescription"
                >
                  Service Benefits Description
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <textarea
                  value={formData.serviceBenefitsDescription}
                  onChange={handleInputChange}
                  className="border-[1px] border-[#E4E4E4] w-full h-[220px] rounded-lg p-4   resize-none my-2 outline-1 outline-orange-400"
                  name="serviceBenefitsDescription"
                  placeholder="Enter Service Benefits Description"
                ></textarea>
              </div>

              {/* add button  */}
              <div>
                <button
                  type="submit"
                  className="border-2 border-[#2275FC] rounded-xl w-[230px] py-4 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200"
                >
                  <FaPlus className="inline mr-1" />
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
