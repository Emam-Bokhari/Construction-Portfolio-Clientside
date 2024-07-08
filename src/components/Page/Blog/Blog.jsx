import { Fragment } from "react";
import CommonPageBanner from "../../CommonPageBanner";
import LeftSide from "./LeftSide";
import { FaArrowRight } from "react-icons/fa";
import useBlog from "../../../hooks/useBlog";
import { Link } from "react-router-dom";
import BlogCardSkeleton from "../../skeleton/BlogCardSkeleton";

export default function Blog() {
  // fetch data
  const { blogs, blogLoading } = useBlog();

  return (
    <Fragment>
      <CommonPageBanner heading="Blog" title="Home | Blog" />
      {/*start blog */}
      <div className=" bg-white my-20">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8  ">
          <div className="flex flex-col-reverse lg:flex-row  gap-10  ">
            {/* Start left side */}
            <LeftSide />
            {/* Ends left side  */}

            {/* Start right side  */}
            <div className="  w-full lg:w-3/5 xl:w-2/3">
              {blogLoading ? (
                <div className="space-y-3 md:space-y-4">
                  <BlogCardSkeleton />
                  <BlogCardSkeleton />
                  <BlogCardSkeleton />
                  <BlogCardSkeleton />
                  <BlogCardSkeleton />
                  <BlogCardSkeleton />
                  <BlogCardSkeleton />
                </div>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  {blogs?.map((blog, _id) => (
                    <div key={_id} className="flex flex-col xl:flex-row gap-5 p-2">
                      {/* image  */}
                      <div className="  flex-1">
                        <img
                          className="w-full h-[300px] md:h-[400px] xl:h-[300px]   object-cover rounded-md"
                          src={blog?.imageUrl}
                          loading="lazy"
                          alt=""
                        />
                      </div>

                      {/* text  */}
                      <div className="  flex-1 space-y-3 md:space-y-4">
                        <h2 className="px-3 py-2 bg-[#F68A0A] inline text-sm font-[500] font-[archivo] rounded-sm text-white">
                          {blog?.category}
                        </h2>

                        <h3 className="font-[titillium] text-[#0E121D]  text-[24px] font-[600]">
                          {blog?.title.length > 10
                            ? `${blog?.title.substring(0, 35)}...`
                            : blog?.title}
                        </h3>

                        <div className="flex items-center gap-2">
                          <i className="fa-solid fa-calendar text-[#F68A0A] text-xl"></i>
                          <p className="font-[archivo] text-base text-[#4D5765]">
                            {blog?.publishedDate}
                          </p>
                        </div>

                        <p className="text-base font-[archivo] text-[#4D5765]">
                          {blog?.description.length > 10
                            ? `${blog.description.substring(0, 150)}...`
                            : blog.description}
                        </p>

                        <Link
                          to={`/blogDetails/${blog?._id}`}
                          className="uppercase text-sm font-[archivo] border-[1px] border-[#E4E4E4] px-3 py-2 rounded-md font-[600] text-[#0E121D] hover:bg-[#F68A0A] hover:text-white transform transition-all duration-200 flex items-center w-[140px] gap-2"
                        >
                          READ MORE
                          <FaArrowRight className="text-sm" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Ends right side  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
