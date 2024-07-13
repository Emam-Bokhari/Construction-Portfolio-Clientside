import { Fragment, useEffect, useState } from "react";
import WrapStyle from "../../../../../Dashboard/WrapStyle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function UpdateBlog() {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [blogs, setBlogs] = useState({});

  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    category: "",
    description: "",
    paraOne: "",
    paraTwo: "",
    author: "",
    publishedDate: "",
  });

  //   fetch blog data
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`/api/v1/blog-details/${blogId}`);
        if (!response.data) {
          const errorMessage = `Fetching blog data is failed!`;
          throw new Error(errorMessage);
        }
        setBlogs(response.data);
        setFormData({
          ...response.data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogData();
  }, [blogId]);

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

    if (!formData.imageUrl) {
      toast.error("Please fill image url feild!");
      return;
    } else if (!formData.title) {
      toast.error("Please fill blog title!");
      return;
    } else if (!formData.category) {
      toast.error("Please fill blog category!");
      return;
    } else if (!formData.description) {
      toast.error("Please fill blog description!");
      return;
    } else if (!formData.author) {
      toast.error("Please fill author name!");
      return;
    } else if (!formData.publishedDate) {
      toast.error("Please fill published date!");
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
        `/api/v1/update-blog/${blogId}`,
        formData
      );
      if (response.data.modifiedCount > 0) {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Updated!",
            text: "Blog data has been updated.",
            icon: "success",
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          });
        }
      }

      navigate("/dashboard/manageBlog");

      console.log("Blog updated successfully:", response.data);
      // Optionally handle success scenario (e.g., show success message)
    } catch (error) {
      console.error("Error updating blog:", error);
      // Optionally handle error scenario (e.g., show error message to user)
    }
  };

  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl  mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Update Blog
          </h3>

          <div className="bg-white rounded-xl p-4 ">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* blog image url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="imageUrl"
                >
                  Blog Image Url
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  defaultValue={blogs.imageUrl}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="imageUrl"
                  placeholder="Enter Blog Image Url"
                />
              </div>

              {/* blog tittle */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="title"
                >
                  Blog Tittle
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.title}
                  onChange={handleInputChange}
                  defaultValue={blogs.title}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="title"
                  placeholder="Enter Blog Tittle"
                />
              </div>

              {/* blog category  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="category"
                >
                  Category Name
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <select
                  value={formData.category}
                  onChange={handleInputChange}
                  defaultValue={blogs.category}
                  className="block border-[1px] border-[#E4E4E4] rounded-lg p-4 outline-none my-2"
                  name="category"
                >
                  <option value="none">None</option>
                  <option value="Building Construction">
                    Building Construction
                  </option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="General Construction">
                    General Construction
                  </option>
                  <option value="Material Supply">Material Supply</option>
                  <option value="Architecture Design">
                    Architecture Design
                  </option>
                  <option value="House Revonation">House Revonation</option>
                </select>
              </div>

              {/* blog description  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="description"
                >
                  Blog Description
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <textarea
                  value={formData.description}
                  onChange={handleInputChange}
                  defaultValue={blogs.description}
                  className="border-[1px] border-[#E4E4E4] w-full h-[220px] rounded-lg p-4  outline-none resize-none my-2"
                  name="description"
                  placeholder="Enter Blog Description"
                ></textarea>
              </div>

              {/* para one  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="paraOne"
                >
                  Para One
                </label>
                <textarea
                  value={formData.paraOne}
                  onChange={handleInputChange}
                  defaultValue={blogs.paraOne}
                  className="border-[1px] border-[#E4E4E4] w-full h-[150px] rounded-lg p-4  outline-none resize-none my-2"
                  name="paraOne"
                  placeholder="Enter Blog Para One"
                ></textarea>
              </div>

              {/* para two  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="paraTwo"
                >
                  Para Two
                </label>
                <textarea
                  value={formData.paraTwo}
                  onChange={handleInputChange}
                  defaultValue={blogs.paraTwo}
                  className="border-[1px] border-[#E4E4E4] w-full h-[150px] rounded-lg p-4  outline-none resize-none my-2"
                  name="paraTwo"
                  placeholder="Enter Blog Para Two"
                ></textarea>
              </div>

              {/* blog publish date  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="publishedDate"
                >
                  Blog Publish Date
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.publishedDate}
                  onChange={handleInputChange}
                  defaultValue={blogs.publishedDate}
                  className="block border-[1px] border-[#E4E4E4] w-full md:w-2/4 rounded-lg p-4 outline-none my-2"
                  type="date"
                  name="publishedDate"
                />
              </div>

              {/* blog author name */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="author"
                >
                  Blog Author Name
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  value={formData.author}
                  onChange={handleInputChange}
                  defaultValue={blogs.author}
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="author"
                  placeholder="Admin"
                />
                <span className="text-sm text-[#95A3B9] block">
                  Do not exceed 20 characters when entering the author name.
                </span>
              </div>

              {/* add button  */}
              <div>
                <button className="border-2 border-[#2275FC] rounded-xl w-[230px] py-4 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
                  <FaPlus className="inline mr-1" />
                  Update Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
