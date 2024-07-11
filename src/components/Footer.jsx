import { Fragment } from "react";
import logo from "../assets/logo/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaEnvelope, FaFacebook, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Fragment>
      <footer className="bg-[#0E121D] w-full">
        <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 ">
          <div className="flex flex-col lg:flex-row  justify-between gap-10 lg:items-center">
            {/* text,quote button  */}
            <div className="flex-1 space-y-3 md:space-y-4">
              <h2 className="text-[36px] lg:text-[48px] text-white font-[titillium] font-[700]">
                Ready to Build a Better Future?
              </h2>

              <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                accumsan iaculis eleifend. Suspendisse placerat tempor turpis.
              </p>

              <div>
                <button className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 text-white text-sm font-[archivo] font-[500] px-7 py-4">
                  GET A QUOTE
                </button>
              </div>
            </div>

            {/* subscribe  */}
            <div className=" flex-1 space-y-3 md:space-y-4">
              <h3 className="text-lg font-[archivo] text-white">
                Stay Informed, Subscribe Today!
              </h3>

              <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                Subscribe to receive inspiration, ideas, and news in your inbox.
              </p>

              <div className="flex  ring-2 ring-[#F68A0A] ring-offset-2">
                <input
                  className="py-3 w-full outline-none px-2"
                  type="text"
                  placeholder="Enter Your E-mail"
                />
                <button className="bg-[#F68A0A] hover:bg-[#ee8404] uppercase transform transition-all duration-300 text-white text-sm font-[archivo] font-[500] px-7 py-4">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* hr line  */}
          <div className="my-6">
            <hr className="border-[1px] border-[#E4E4E4]" />
          </div>

          <div>
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="flex-1">
                {/* logo and extra links */}
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  {/* logo  */}
                  <div className="flex-1 ">
                    <div className="space-y-3 md:space-y-4">
                      <img
                        className="w-60 lg:w-full h-32 object-contain"
                        src={logo}
                        loading="lazy"
                        alt=""
                      />
                      <p className="text-base font-[archivo] text-[#7d8794] font-normal ">
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet.{" "}
                      </p>
                    </div>
                  </div>

                  {/* extra links  */}
                  <div className="flex-1 ">
                    <div>
                      <h2 className="text-lg font-[archivo] text-white">
                        Extra Links
                      </h2>

                      <ul className="space-y-2 mt-3">
                        <li className="text-base font-[archivo] text-[#7d8794] font-normal ">
                          <Link
                            className="hover:text-[#F68A0A] transition-all duration-300"
                            to="/"
                          >
                            Home
                          </Link>
                        </li>

                        <li className="text-base font-[archivo] text-[#7d8794] font-normal hover:text-[#F68A0A] transition-all duration-300">
                          <Link
                            className="hover:text-[#F68A0A] transition-all duration-300"
                            to="/aboutUs"
                          >
                            About Us
                          </Link>
                        </li>

                        <li className="text-base font-[archivo] text-[#7d8794] font-normal hover:text-[#F68A0A] transition-all duration-300">
                          <Link
                            className="hover:text-[#F68A0A] transition-all duration-300"
                            to="/service"
                          >
                            Service
                          </Link>
                        </li>

                        <li className="text-base font-[archivo] text-[#7d8794] font-normal hover:text-[#F68A0A] transition-all duration-300">
                          <Link
                            className="hover:text-[#F68A0A] transition-all duration-300"
                            to="/blog"
                          >
                            Blog
                          </Link>
                        </li>

                        <li className="text-base font-[archivo] text-[#7d8794] font-normal hover:text-[#F68A0A] transition-all duration-300">
                          <Link
                            className="hover:text-[#F68A0A] transition-all duration-300"
                            to="/contactUs"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* service and address  */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  {/* service */}
                  <div className="flex-1 ">
                    <div>
                      <h2 className="text-lg font-[archivo] text-white">
                        Service
                      </h2>

                      <ul className="space-y-2 mt-3">
                        <li className="text-base font-[archivo] text-[#7d8794] font-normal  ">
                          <a
                            className="hover:text-[#F68A0A] transition-all duration-300 flex items-center gap-2"
                            href="#"
                          >
                            <IoIosArrowForward className=" text-[#F68A0A]" />
                            Building Construction
                          </a>
                        </li>

                        <li className="text-base font-[archivo] text-[#7d8794] font-normal hover:text-[#F68A0A] transition-all duration-300">
                          <a
                            className="hover:text-[#F68A0A] transition-all duration-300 flex items-center gap-2"
                            href="#"
                          >
                            <IoIosArrowForward className=" text-[#F68A0A]" />
                            Material Supply
                          </a>
                        </li>

                        <li className="text-base font-[archivo] text-[#7d8794] font-normal hover:text-[#F68A0A] transition-all duration-300">
                          <a
                            className="hover:text-[#F68A0A] transition-all duration-300 flex items-center gap-2"
                            href="#"
                          >
                            <IoIosArrowForward className=" text-[#F68A0A]" />
                            Architecture Design
                          </a>
                        </li>

                        <li className="text-base font-[archivo] text-[#7d8794] font-normal hover:text-[#F68A0A] transition-all duration-300">
                          <a
                            className="hover:text-[#F68A0A] transition-all duration-300 flex items-center gap-2"
                            href="#"
                          >
                            <IoIosArrowForward className=" text-[#F68A0A]" />
                            House Renovation
                          </a>
                        </li>

                        <li className="text-base font-[archivo] text-[#7d8794] font-normal hover:text-[#F68A0A] transition-all duration-300">
                          <a
                            className="hover:text-[#F68A0A] transition-all duration-300 flex items-center gap-2"
                            href="#"
                          >
                            <IoIosArrowForward className=" text-[#F68A0A]" />
                            General Contracting
                          </a>
                        </li>

                        <li className="text-base font-[archivo] text-[#7d8794] font-normal hover:text-[#F68A0A] transition-all duration-300">
                          <a
                            className="hover:text-[#F68A0A] transition-all duration-300 flex items-center gap-2"
                            href="#"
                          >
                            <IoIosArrowForward className=" text-[#F68A0A]" />
                            Interior Designing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* address  */}
                  <div className="flex-1 ">
                    <h2 className="text-lg font-[archivo] text-white">
                      Address
                    </h2>

                    <div className="space-y-2 mt-3">
                      {/* location  */}
                      <div className="flex gap-2 items-center">
                        <FaLocationDot className=" text-[#F68A0A] text-2xl" />
                        <p className="text-base font-[600] font-[archivo] text-white">
                          138 MacArthur Ave, United States
                        </p>
                      </div>

                      {/* phone  */}
                      <div className="flex gap-2 items-center">
                        <FaPhoneAlt className="text-[#F68A0A] text-2xl" />
                        <p className="text-base font-[600] font-[archivo] text-white">
                          +1 201-380-2737
                        </p>
                      </div>

                      {/* gmail  */}
                      <div className="flex gap-2 items-center">
                        <FaEnvelope className=" text-[#F68A0A] text-2xl" />
                        <p className="text-base font-[600] font-[archivo] text-white">
                          help24/7info@kotar.com
                        </p>
                      </div>

                      {/* time  */}
                      <div className="flex gap-2 items-center">
                        <FaClock className="text-[#F68A0A] text-2xl" />
                        <p className="text-base font-[600] font-[archivo] text-white">
                          Sun - Thu : 09:00 am - :06 pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* hr line  */}
          <div className="my-6">
            <hr className="border-[1px] border-[#E4E4E4]" />
          </div>

          {/* developer name and copyright  */}
          <div className="flex flex-col md:flex-row gap-3 justify-between">
            {/* developer  */}
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-sm font-[archivo] text-white">
                  Developed By Moshfiqur Rahman
                </h2>
                <a
                  className="text-white"
                  href="https://github.com/Emam-Bokhari"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  className="text-[#0866FF]"
                  href="https://www.facebook.com/emambokhari99"
                >
                    <FaFacebook className="text-xl" />
                </a>
              </div>
            </div>

            {/* copyright  */}
            <div>
              <p className="text-sm font-[archivo] text-[#F68A0A]">
                &copy; GoldenPeachLtd. All Right Reserved 2024
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
