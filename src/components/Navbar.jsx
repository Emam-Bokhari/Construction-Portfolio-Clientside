import { Fragment } from "react";
import Logo from "../assets/logo/logo.png"
import { FaDownload } from "react-icons/fa";

export default function Navbar(){
    return(
        <Fragment>
            <div className="bg-[#FFEBDE] w-full ">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8 flex justify-between items-center ">

                <div className="flex items-center">
                     {/* Start logo */}
                    <div>
                        <img className=" w-[120px] lg:w-[208px] h-[70px] lg:h-[100px] object-contain" src={Logo} alt="" />
                        {/* <img src={logo} alt="" /> */}
                    </div>
                    {/* Ends logo  */}

                     {/* navlink */}
                    <div
                        className="z-10 nav-links transition-all duration-700  lg:static absolute bg-white lg:bg-transparent lg:min-h-fit min-h-[50vh] left-0 top-[-100%] lg:w-auto  w-full flex items-center px-5">
                        <ul className="flex flex-col lg:flex-row lg:items-center  gap-10">
                            <li
                                className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                                <a href="./index.html">HOME</a>
                            </li>
                            <li
                                className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                                <a href="./about.html">ABOUT US</a>
                            </li>
                            <li
                                className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                                <a href="./service.html">SERVICE</a>
                            </li>
                            <li
                                className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                                <a href="./blog.html">BLOG</a>
                            </li>
                            <li
                                className="text-sm font-[titillium] text-[#4C4D4E] hover:text-[#F68A0A] transform transition-all duration-200 font-[600]">
                                <a href="./contactUs.html">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                     {/* Ends navlink */}
                </div>

                {/* Start get a quote button */}
                <div className="flex items-center gap-3">
                    <button
                        className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 text-white text-sm font-[archivo] font-[500] px-3 sm:px-7 py-2 sm:py-4 flex items-center gap-1">
                        GET A QUOTE
                        <i ></i>
                        <FaDownload  className="hidden md:block" />
                    </button>
                    <ion-icon onclick="onToggleMenu(this)" name="menu"
                        class="text-3xl cursor-pointer lg:hidden"></ion-icon>
                </div>
                 {/* Ends get a quote button */}
            </div>
        </div>
        </Fragment>
    )
}