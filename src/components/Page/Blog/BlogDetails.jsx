import { Fragment, useEffect, useState } from "react";
import LeftSide from "./LeftSide";
import CommonPageBanner from "../../CommonPageBanner";
import { FaLayerGroup, FaUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import BlogDetailsSkeleton from "../../skeleton/BlogDetailsSkeleton";

export default function BLogDetails() {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  const [blogDetailsLoading, setBlogDetailsLoading] = useState(false);

  useEffect(() => {
    const fetchBlogDetailsData = async () => {
      try {
        setBlogDetailsLoading(true);
        const response = await fetch(
          `http://localhost:3000/api/v1/blog-details/${blogId}`
        );
        if (!response.ok) {
          const errorMessage = `Fetching blog details is failed!${response.status}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        setBlogDetails(data);
      } catch (err) {
        console.log(err);
      } finally {
        setBlogDetailsLoading(false);
      }
    };
    fetchBlogDetailsData();
  }, [blogId]);

  return (
    <Fragment>
      <CommonPageBanner heading="Blog Details" tittle="Blog | Blog Details" />
      {/* start blog details */}
      <div className=" bg-white my-20">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8  ">
          <div className="flex flex-col-reverse lg:flex-row  gap-10  ">
            {/* Start left side  */}
            <LeftSide />
            {/* Ends left side  */}

            {/* Start right side  */}
            <div className="w-full lg:w-3/5 xl:w-2/3">
              {blogDetailsLoading ? (
                <BlogDetailsSkeleton />
              ) : (
                <div className="bg-[#F8F8F8] p-2">
                  {/* image  */}
                  <div>
                    <img
                      className="w-full h-[400px] object-cover rounded-t-md"
                      src={blogDetails?.imageUrl}
                      loading="lazy"
                      alt=""
                    />
                  </div>

                  <div className="px-6">
                    {/* start description  */}
                    <div className="my-10">
                      <div className="my-10 flex items-center gap-3">
                        {/* author  */}
                        <div>
                          <span className="text-[#F69247] mr-1">
                            <FaUser className="inline" />
                          </span>
                          <span className="font-[archivo] text-sm text-[#4D5765] ">
                            {blogDetails?.author}
                          </span>
                        </div>
                        {/* publish date  */}
                        <div>
                          <span className="text-[#F69247] mr-1">
                            <FaCalendarDays className="inline" />
                          </span>
                          <span className="font-[archivo] text-sm text-[#4D5765] ">
                            {blogDetails?.publishedDate}
                          </span>
                        </div>
                        {/* category  */}
                        <div>
                          <span className="text-[#F69247] mr-1">
                            <FaLayerGroup className="inline" />
                          </span>
                          <span className="font-[archivo] text-sm text-[#4D5765] ">
                            {blogDetails?.category}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-[#0E121D] font-[titillium] text-3xl font-semibold">
                        {blogDetails?.title}
                      </h2>

                      <p className="my-5 text-[#4D5765] text-base leading-7 font-[archivo] font-normal">
                        {blogDetails?.description}
                      </p>

                      <p className="my-5 text-[#4D5765] text-base leading-7 font-[archivo] font-normal">
                        {blogDetails?.paraOne}
                      </p>

                      <p className="my-5 text-[#4D5765] text-base leading-7 font-[archivo] font-normal">
                        {blogDetails?.paraTwo}
                      </p>
                    </div>
                    {/* end description  */}
                  </div>
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
