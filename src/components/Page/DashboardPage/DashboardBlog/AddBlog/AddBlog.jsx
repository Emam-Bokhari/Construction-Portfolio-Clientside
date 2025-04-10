import { Fragment, useState } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const navigate = useNavigate();
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
    
    try {
      axios.post("/api/v1/create-blog", formData);
      // clear form data
      setFormData({
        imageUrl: "",
        title: "",
        category: "",
        description: "",
        paraOne: "",
        paraTwo: "",
        author: "",
        publishedDate: "",
      });

      setTimeout(()=>{
        navigate("/golden@peach@dashboard/manageBlog");
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
            Add Blog
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

                  <option value="Architectural Design">
                  Architectural Design
                  </option>

                  <option value="Road Construction">Road Construction</option>
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
                  Add Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
