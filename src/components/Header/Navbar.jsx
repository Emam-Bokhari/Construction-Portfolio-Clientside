import { Fragment, useState } from "react";
import Logo from "../../assets/logo/logo.png";
import { FaDownload } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
  const [showMenubar, setShowMenubar] = useState(false);
  const onToggleMenu = () => {
    setShowMenubar(!showMenubar);
  };
  return (
    <Fragment>
      <div className="bg-[#FFEBDE] w-full ">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8 flex justify-between items-center ">
          <div className="flex items-center">
            {/* Start logo */}
            <div>
              <img
                className=" w-[120px] lg:w-[208px] h-[70px] lg:h-[100px] object-contain"
                src={Logo}
                loading="lazy"
                alt="Logo"
              />
            </div>
            {/* Ends logo  */}

            {/* navlink */}
            <div
              className={`z-10  transition-all duration-700  lg:static absolute bg-white lg:bg-transparent lg:min-h-fit min-h-[50vh] left-0  lg:w-auto  w-full flex items-center px-5 ${
                showMenubar ? "top-[17%] md:top-[11%]" : "top-[-100%]"
              }`}
            >
              <ul className="flex flex-col lg:flex-row lg:items-center  gap-10">
                <li className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-[#F68A0A]" : ""
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                  <NavLink
                    to="/aboutUs"
                    className={({ isActive }) =>
                      isActive ? "text-[#F68A0A]" : ""
                    }
                  >
                    ABOUT US
                  </NavLink>
                </li>
                <li className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? "text-[#F68A0A]" : ""
                    }
                  >
                    SERVICE
                  </NavLink>
                </li>
                <li className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-[#F68A0A]" : ""
                    }
                  >
                    BLOG
                  </NavLink>
                </li>
                <li className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                  <NavLink
                    to="/contactUs"
                    className={({ isActive }) =>
                      isActive ? "text-[#F68A0A]" : ""
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Ends navlink */}
          </div>

          {/* Start get a quote button */}
          <div className="flex items-center gap-3">
              <a href="https://drive.google.com/file/d/1WC5ZS8Dtvf19fQ8Xe3AUO0GyyrnvjAnE/view?usp=sharing">
            <button className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 text-white text-sm font-[archivo] font-[500] px-3 sm:px-7 py-2 sm:py-4 flex items-center gap-1 uppercase">
                GET PROFILE
                <FaDownload className="hidden md:block" />
            </button>
              </a>
            <button
              onClick={onToggleMenu}
              className="text-3xl cursor-pointer lg:hidden"
            >
              {showMenubar ? <IoMdCloseCircleOutline /> : <IoMenuSharp />}
            </button>
          </div>
          {/* Ends get a quote button */}
        </div>
      </div>
    </Fragment>
  );
}
