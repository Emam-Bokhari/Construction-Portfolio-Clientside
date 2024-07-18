import { Fragment } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <Fragment>
      <div className="bg-[#0E121D] w-full p-3">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8  flex justify-center md:justify-between ">
          {/* Start address  */}
          <div className="hidden md:flex items-center gap-8 xl:gap-10 ">
            <div className="hidden xl:block">
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-[#F68812] text-sm" />
                <span className="text-[#908C8D]  text-sm font-[archivo] ">
                  +880 171 584 91-17
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <FaLocationDot className="text-[#F68812] text-sm" />
              <span className="text-[#908C8D] ml-1 text-sm font-[archivo]">
                Gulshan-1, Dhaka, Bangladesh
              </span>
            </div>
            <div className="flex items-center gap-1">
              <IoMdMail className="text-[#F68812] text-sm" />
              <Link
                to="mailto:goldenpeach35@gmail.com"
                className="text-[#908C8D] ml-1 text-sm font-[archivo] hover:text-[#F68812] transform transition-all duration-300"
              >
                goldenpeach35@gmail.com
              </Link>
            </div>
          </div>
          {/* Ends address  */}

          {/* Start social icon  */}
          <div className="flex items-center gap-3 xl:gap-5">
            <span className="text-sm font-[archivo] text-[#908C8D] hidden xl:block">
              Follow Us:
            </span>
            <a href="https://www.facebook.com/mdmoniruzzaman.titon.5?mibextid=ZbWKwL">
              <FaFacebook className="text-sm text-[#908C8D] hover:text-[#1877F2] transform transition-all duration-300" />
            </a>
            <a href="#">
              <FaTwitter className=" text-sm text-[#908C8D] hover:text-[#1DA1F2] transform transition-all duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="text-sm text-[#908C8D] hover:text-[#0077B5] transform transition-all duration-300" />
            </a>
            <a href="#">
              <FaInstagram className="text-sm text-[#908C8D] hover:text-[#e56969] transform transition-all duration-300" />
            </a>
            <a href="#">
              <FaYoutube className=" text-sm text-[#908C8D] hover:text-[#FF0000] transform transition-all duration-300" />
            </a>
          </div>
          {/* Ends social icon  */}
        </div>
      </div>
    </Fragment>
  );
}
