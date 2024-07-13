import { Fragment, useEffect, useState } from "react";
import WrapStyle from "../../../../../Dashboard/WrapStyle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function UpdateTestimonial() {
  const navigate = useNavigate();
  const { testimonialId } = useParams();
  const [testimonials, setTestimonials] = useState({});

  const [formData, setFormData] = useState({
    imageUrl: "",
    name: "",
    review: "",
    star: "",
  });

  //   fetch service data
  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/show-specefic-testimonial/${testimonialId}`
        );
        if (!response.data) {
          const errorMessage = `Fetching team member data is failed!`;
          throw new Error(errorMessage);
        }
        setTestimonials(response.data);
        setFormData({
          ...response.data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchTestimonialData();
  }, [testimonialId]);

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
    } else if (!formData.name) {
      toast.error("Please fill name feild!");
      return;
    } else if (!formData.review) {
      toast.error("Please fill review!");
      return;
    } else if (!formData.star) {
      toast.error("Please fill star!");
      return;
    }

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
        `/api/v1/update-testimonials/${testimonialId}`,
        formData
      );
      if (response.data.modifiedCount > 0) {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Updated!",
            text: "Testimonial data has been updated.",
            icon: "success",
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          });
        }
      }

      navigate("/golden@peach@dashboard/manageTestimonial");

      console.log("Testimonial updated successfully:", response.data);
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
            Update Testimonial
          </h3>

          <div className="bg-white rounded-xl p-4 ">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* testimonial person image url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="imageUrl"
                >
                  Testimonial Person Image Url
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  defaultValue={testimonials.imageUrl}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="imageUrl"
                  placeholder="Enter Testimonial Person Image Url"
                />
              </div>

              {/* testimonial person name  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="name"
                >
                  Testimonial Person Name
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.name}
                  onChange={handleInputChange}
                  defaultValue={testimonials.name}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2 capitalize"
                  type="text"
                  name="name"
                  placeholder="Enter Testimonial Person Name"
                />
                <span className="text-sm text-[#95A3B9] block">
                  Do not exceed 20 characters when entering the person name.
                </span>
              </div>

              {/* review  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="review"
                >
                  Review
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <textarea
                  value={formData.review}
                  onChange={handleInputChange}
                  defaultValue={testimonials.review}
                  className="border-[1px] border-[#E4E4E4] w-full h-[220px] rounded-lg p-4  outline-none resize-none my-2"
                  name="review"
                  placeholder="Enter Review"
                ></textarea>
              </div>

              {/* star  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="star"
                >
                  Star
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.star}
                  onChange={handleInputChange}
                  defaultValue={testimonials.star}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="number"
                  name="star"
                  placeholder="Enter Ratings"
                />
              </div>

              {/* add button  */}
              <div>
                <button className="border-2 border-[#2275FC] rounded-xl w-[230px] py-4 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
                  <FaPlus className="inline mr-1" />
                  Update Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
