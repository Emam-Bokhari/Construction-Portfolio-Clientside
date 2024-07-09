import { Fragment } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";

export default function AddBlog() {
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl  mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Add Blog
          </h3>

          <div className="bg-white rounded-xl p-4 ">
            <form className="space-y-4">
              {/* blog image url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="serviceImageUrl"
                >
                  Blog Image Url{" "}
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="blogImageUrl"
                  id=""
                  placeholder="Enter Blog Image Url"
                />
              </div>

              {/* blog tittle */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceName"
                >
                  Blog Tittle
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="blogTittle"
                  id=""
                  placeholder="Enter Blog Tittle"
                />
              </div>

              {/* blog category  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="category"
                >
                  Category Name{" "}
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <select
                  className="block border-[1px] border-[#E4E4E4] rounded-lg p-4 outline-none my-2"
                  name="categoryName"
                  id=""
                >
                  <option value="none">None</option>
                  <option value="">Building Construction</option>
                  <option value="">Interior Design</option>
                  <option value="">General Construction</option>
                  <option value="">Material Supply</option>
                  <option value="">Architecture Design</option>
                  <option value="">House Revonation</option>
                </select>
              </div>

              {/* blog description  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceDescription"
                >
                  Blog Description{" "}
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <textarea
                  className="border-[1px] border-[#E4E4E4] w-full h-[220px] rounded-lg p-4  outline-none resize-none my-2"
                  name="blogDescription"
                  placeholder="Enter Blog Description"
                ></textarea>
              </div>

              {/* blog publish date  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceName"
                >
                  Blog Publish Date
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full md:w-2/4 rounded-lg p-4 outline-none my-2"
                  type="date"
                  name="blogPublishDate"
                  id=""
                />
              </div>

              {/* blog author name */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceName"
                >
                  Blog Author Name
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="blogAuthorName"
                  id=""
                  placeholder="Admin"
                />
                <span className="text-sm text-[#95A3B9] block">
                  Do not exceed 20 characters when entering the author name.
                </span>
              </div>

              {/* add button  */}
              <div>
                <button className="border-2 border-[#2275FC] rounded-xl w-[230px] py-4 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
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
