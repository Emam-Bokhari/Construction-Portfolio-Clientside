import { Fragment } from "react";
import aboutUsImage from "../assets/aboutUs-image/aboutus-profile.jpg"

export default function AboutUsSection(){
    return(
       <Fragment>
         <div className=" bg-white my-20">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8  ">

                <div className="flex gap-0 lg:gap-10 justify-between items-start lg:items-center flex-col lg:flex-row">

                     {/* image and text */}
                    <div className="flex-1">
                        <div>
                            <img className="w-[550px] lg:w-full h-[450px] object-cover rounded-xl "
                                src={aboutUsImage} alt=""/>
                        </div>
                    </div>

                     {/* text */}
                    <div className=" flex-1">
                        <div className="space-y-3 md:space-y-4 ">
                            <div className="flex items-center gap-3 mt-10  lg:mt-0">
                                <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] ">
                                    ABOUT US COMPANY
                                </h2>
                                <hr className="border-[1px] border-[#F68A0A] w-12"/>
                            </div>

                            <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D]">
                                We Are Always Think On Your Dream
                            </h3>

                            <p className="text-base font-[archivo] font-normal text-[#4D5765]">Many modern construction
                                companies focus on sustainable building practices, incorporating eco-friendly material
                                energy-efficient systems and environmental conscious designs to reduce the environmental
                                impact of their projects.</p>

                             {/* icon 1  */}
                            <div className="flex flex-col lg:flex-row lg:items-center gap-5">

                                <div className="flex items-center gap-2 w-[250px]">
                                    <i className="fa-solid fa-circle-check text-[#F68A0A] text-2xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">We provide 24/7 service</span>
                                </div>

                                <div className="flex items-center gap-2  w-[250px]">
                                    <i className="fa-solid fa-circle-check text-[#F68A0A] text-2xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">Greate Technology</span>
                                </div>

                            </div>

                             {/* icon 2  */}
                            <div className="flex flex-col lg:flex-row lg:items-center gap-5 ">

                                <div className="flex items-center gap-2  w-[250px]">
                                    <i className="fa-solid fa-circle-check text-[#F68A0A] text-2xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">Qualified Agents</span>
                                </div>

                                <div className="flex items-center gap-2  w-[250px]">
                                    <i className="fa-solid fa-circle-check text-[#F68A0A] text-2xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">11 Years Experiance</span>
                                </div>

                            </div>

                            <div className="flex space-y-3 md:space-y-4 lg:space-y-0 lg:gap-10 flex-col lg:flex-row">
                                {/* more about us button */}
                                <div>
                                    <button
                                        className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-white uppercase">
                                        MORE ABOUT Us
                                    </button>
                                </div>

                                 {/* founder text  */}
                                <div className=" lg:border-[#C4C4C4]  lg:border-l-2 ">
                                    <div className="lg:ml-5">
                                        <p className=" text-[20px] font-[titillium] font-[600]">Emam Bokhari</p>
                                        <span className="font-[archivo] text-base  font-normal text-[#F68A0A]">Founder of
                                            Dreams
                                            Construction</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
       </Fragment>
    )
}