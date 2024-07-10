import { Fragment, useEffect, useState } from "react";
import {
  FaCalendar,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LatestBlogSkeleton from "../../skeleton/LatestBlogSkeleton";
import axios from "axios";

export default function LeftSide() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [latestBlogLoading, setLatestBlogLoading] = useState(false);
  useEffect(() => {
    const fetchLatestBlogsData = async () => {
      try {
        setLatestBlogLoading(true);
        const response = await axios.get(
          `/api/v1/latest-blogs`
        );
        if (!response.data) {
          const errorMessage = `Fetching latest blogs data is failed!`;
          throw new Error(errorMessage);
        }
        setLatestBlogs(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLatestBlogLoading(false);
      }
    };
    fetchLatestBlogsData();
  }, []);

  return (
    <Fragment>
      <div className="  w-full lg:w-2/5  xl:w-1/3">
        {/* start search box  */}
        <div className="bg-[#F8F8F8] p-4 rounded-md">
          <div className="flex gap-2 items-center px-2 rounded-md ring-2 ring-[#4D5765] ring-offset-2">
            <input
              className=" w-full outline-none py-3  "
              type="search"
              placeholder="Search here..."
            />
            <a href="#">
              <FaSearch className=" text-xl" />
            </a>
          </div>
        </div>
        {/* end search box  */}

        {/* start all categories  */}
        <div className="bg-[#F8F8F8] p-4 my-10 rounded-md">
          <div>
            <h2 className="font-[titillium] text-[24px] font-[600] text-[#0E121D] ">
              All Categories
            </h2>

            <div className="mt-2">
              <hr className="border-[1px] border-[#E4E4E4]" />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
            <a
              href="#"
              className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white  transition-all duration-300 shadow-sm p-4 "
            >
              Building Contracting
            </a>

            <a
              href="#"
              className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4 "
            >
              General Contracting
            </a>

            <a
              href="#"
              className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4 "
            >
              Material Supply
            </a>

            <a
              href="#"
              className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4 "
            >
              Interior Design
            </a>

            <a
              href="#"
              className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4 "
            >
              Architecture Design
            </a>

            <a
              href="#"
              className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4 "
            >
              House Renovation
            </a>
          </div>
        </div>
        {/* end all categories  */}

        {/* start subscribe  */}
        <div className="bg-[#F8F8F8] p-4 my-10 rounded-md">
          <div>
            <h2 className="font-[titillium] text-[24px] font-[600] text-[#0E121D] ">
              Subscribe & Followers
            </h2>

            <div className="mt-2">
              <hr className="border-[1px] border-[#E4E4E4]" />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
            <div className="flex gap-2">
              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <FaFacebook className="text-lg" />
                <p>Facebook</p>
              </a>

              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <FaTwitter className="text-lg" />
                <p>Twitter</p>
              </a>
            </div>

            <div className="flex gap-2">
              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <FaInstagram className="text-lg" />
                <p>Instagram</p>
              </a>

              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <FaYoutube className="text-lg" />
                <p>You Tube</p>
              </a>
            </div>

            <div className="flex gap-2">
              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <FaLinkedin className="text-lg" />
                <p>Linkedin</p>
              </a>

              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <FaPinterest className="text-lg" />
                <p>Pinterest</p>
              </a>
            </div>
          </div>
        </div>
        {/* ends subscribe  */}

        {/* start latest blog post  */}
        <div className="bg-[#F8F8F8] p-4 my-10 rounded-md">
          <div>
            <h2 className="font-[titillium] text-[24px] font-[600] text-[#0E121D] ">
              Latest Blogs
            </h2>

            <div className="mt-2">
              <hr className="border-[1px] border-[#E4E4E4]" />
            </div>
          </div>

          {/* start blog  */}
          {latestBlogLoading ? (
            <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
              <LatestBlogSkeleton />
              <LatestBlogSkeleton />
              <LatestBlogSkeleton />
            </div>
          ) : (
            <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
              {latestBlogs?.map((latestBlog) => (
                <div key={latestBlog._id}>
                  <Link
                    to={`/blogDetails/${latestBlog._id}`}
                    className="flex items-center gap-3 p-2 "
                  >
                    {/* image  */}
                    <div>
                      <img
                        className="w-[150px] h-[100px] object-cover rounded-md"
                        src={latestBlog?.imageUrl}
                        loading="lazy"
                        alt=""
                      />
                    </div>

                    {/* text  */}
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-2 ">
                        <FaCalendar className="text-base text-[#F68A0A]" />
                        <p className="font-[archivo] text-base text-[#4D5765]">
                          {latestBlog?.publishedDate}
                        </p>
                      </div>

                      <h2 className="font-[titillium] text-[20px] font-[600] text-[#0E121D] ">
                        {latestBlog?.title.length > 10
                          ? `${latestBlog?.title.substring(0, 30)}...`
                          : latestBlog?.title}
                      </h2>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* ends latest blog post  */}
      </div>
    </Fragment>
  );
}
