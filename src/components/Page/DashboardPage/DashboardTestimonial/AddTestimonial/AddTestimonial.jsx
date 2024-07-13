import { Fragment, useState } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddTestimonial() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    imageUrl: "",
    name: "",
    review: "",
    star: "",
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

    try {
      axios.post("/api/v1/create-testimonials", formData);
      // clear form data
      setFormData({
        imageUrl: "",
        name: "",
        review: "",
        star: "",
      });

     setTimeout(()=>{
      navigate("/golden@peach@dashboard/manageTestimonial");
      window.location.reload();
     },1000)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl  mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Add Testimonial
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
                  className="border-[1px] border-[#E4E4E4] w-full h-[220px] rounded-lg p-4  outline-none resize-none my-2 capitalize"
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
                  Add Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
