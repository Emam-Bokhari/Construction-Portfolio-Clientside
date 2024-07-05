import { Fragment } from "react";
import blogImage from "../../../assets/latest-projects-image/projects-img-01.jpg"

export default function LeftSide() {
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
              <i className="fa-solid fa-magnifying-glass text-xl text-white bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 rounded-md px-3 py-2"></i>
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
              className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4 "
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
                <i className="fa-brands fa-facebook-f text-lg"></i>
                <p>Facebook</p>
              </a>

              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <i className="fa-brands fa-twitter text-lg"></i>
                <p>Twitter</p>
              </a>
            </div>

            <div className="flex gap-2">
              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <i className="fa-brands fa-instagram text-lg"></i>
                <p>Instagram</p>
              </a>

              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <i className="fa-brands fa-youtube text-lg"></i>
                <p>You Tube</p>
              </a>
            </div>

            <div className="flex gap-2">
              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <i className="fa-brands fa-linkedin text-lg"></i>
                <p>Linkedin</p>
              </a>

              <a
                href="#"
                className="flex gap-2 justify-center items-center bg-white w-full text-[archivo] text-base font-[500] text-[#0E121D] rounded-md hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
              >
                <i className="fa-brands fa-pinterest text-lg"></i>
                <p>Pinterest</p>
              </a>
            </div>
          </div>
        </div>
        {/* ends subscribe  */}

        {/* start latest post  */}
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
          <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
            {/* blog 01 */}
            <div>
              <a href="#" className="flex items-center gap-3">
                {/* image  */}
                <div>
                  <img
                    className="w-[150px] h-[100px] object-cover rounded-md"
                    src={blogImage}
                    alt=""
                  />
                </div>

                {/* text  */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 ">
                    <i className="fa-solid fa-calendar text-base text-[#F68A0A]"></i>
                    <p className="font-[archivo] text-base text-[#4D5765]">
                      24 May 2024
                    </p>
                  </div>

                  <h2 className="font-[titillium] text-[20px] font-[600] text-[#0E121D] ">
                    Where Vision Meets Concrete Reality
                  </h2>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* ends latest post  */}
      </div>
    </Fragment>
  );
}
