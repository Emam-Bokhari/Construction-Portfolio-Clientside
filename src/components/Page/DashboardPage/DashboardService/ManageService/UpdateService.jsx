import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function UpdateService() {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const [services, setServices] = useState({});

  const [formData, setFormData] = useState({
    iconUrl: "",
    imageUrl: "",
    serviceNo: "",
    serviceName: "",
    serviceDescription: "",
    serviceBenefits: "Service Benefits",
    serviceBenefitsDescription: "",
  });

  //   fetch service data
  useEffect(() => {
    const fetchServiceDetailsData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/service-details/${serviceId}`
        );
        if (!response.data) {
          const errorMessage = `Fetching service details is failed!`;
          throw new Error(errorMessage);
        }
        setServices(response.data);
        setFormData({
          ...response.data,
          serviceBenefits: "Service Benefits",
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchServiceDetailsData();
  }, [serviceId]);
  //   console.log(services);

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

    if (!formData.iconUrl) {
        toast.error("Please fill icon url field!");
        return;
      } else if (!formData.imageUrl) {
        toast.error("Please fill image url field!");
        return;
      } else if (!formData.serviceNo) {
        toast.error("Please fill service number!");
        return;
      } else if (!formData.serviceName) {
        toast.error("Please fill service name!");
        return;
      } else if (!formData.serviceDescription) {
        toast.error("Please fill service description!");
        return;
      } else if (!formData.serviceBenefitsDescription) {
        toast.error("Please fill service benefits description!");
        return;
      }

    console.log(formData);
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    try {
      const response = await axios.patch(
        `/api/v1/update-service/${serviceId}`,
        formData
      );
      if (response.data.modifiedCount > 0) {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your service has been deleted.",
            icon: "success",
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          });
        }
      }

      navigate("/dashboard/manageService");

      console.log("Service updated successfully:", response.data);
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
            Update Service
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
                  value={formData.iconUrl}
                  onChange={handleInputChange}
                  defaultValue={services.iconUrl}
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
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  defaultValue={services.imageUrl}
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
                  defaultValue={services.serviceNo}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4  my-2 outline-1 outline-orange-400"
                  type="number"
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
                  defaultValue={services.serviceName}
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
                  defaultValue={services.serviceDescription}
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
                  defaultValue={services.serviceBenefits}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4  my-2 outline-1 outline-orange-400"
                  type="text"
                  name="serviceBenefits"
                  placeholder="Enter Benefits"
                  disabled
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
                  defaultValue={services.serviceBenefitsDescription}
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
                  Update Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
