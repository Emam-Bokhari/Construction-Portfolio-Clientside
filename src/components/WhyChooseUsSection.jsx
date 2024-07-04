import { Fragment } from "react";
import whyChooseUsImage from "../assets/why-choose-us-image/why-choose-us.jpg"

export default function WhyChooseUsSection(){
    return(
        <Fragment>
             <div className="bg-white w-full my-20">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8 space-y-3 md:space-x-4">

                <div className="flex gap-0 lg:gap-10 justify-between items-start lg:items-center flex-col lg:flex-row">

                     {/* text  */}
                    <div className=" flex-1">
                        <div className="space-y-3 md:space-y-4 ">
                            <div className="flex items-center gap-3 lg:mt-0">
                                <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]  ">
                                    WHY CHOOSE US
                                </h2>
                                <hr className="border-[1px] border-[#F68A0A] w-12"/>
                            </div>

                            <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D]">
                                Precision in Construction, Strength in Execution
                            </h3>

                            {/* icon 1  */}
                            <div className="flex flex-col lg:flex-row lg:items-center gap-5">

                                <div className="flex items-center gap-2 w-[250px]">
                                    <i className="fa-solid fa-square-check text-[#F68A0A] text-2xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">Powerfull Product Strategy</span>
                                </div>

                                <div className="flex items-center gap-2  w-[250px]">
                                    <i className="fa-solid fa-square-check text-[#F68A0A] text-2xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">Quality Control System</span>
                                </div>

                            </div>

                            {/* icon 2 */}
                            <div className="flex flex-col lg:flex-row lg:items-center gap-5 ">

                                <div className="flex items-center gap-2  w-[250px]">
                                    <i className="fa-solid fa-square-check text-[#F68A0A] text-2xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">Professional Team Works</span>
                                </div>

                                <div className="flex items-center gap-2  w-[250px]">
                                    <i className="fa-solid fa-square-check text-[#F68A0A] text-2xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">Award Winning Projects</span>
                                </div>

                            </div>

                            <div>
                                <hr className="border-[1px] border-[#E4E4E4]"/>
                            </div>

                            {/* icon  */}
                            <div className="flex flex-col lg:flex-row lg:items-center gap-5 ">

                                <div className="flex flex-col gap-5  w-[250px]">
                                    <i className="fa-solid fa-trowel-bricks text-[#F68A0A] text-5xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">High Quality Materials</span>
                                </div>

                                <div className="flex flex-col gap-5  w-[250px]">
                                    <i className="fa-solid fa-headset text-[#F68A0A] text-5xl"></i>
                                    <span className="text-lg font-[600] font-[archivo]">24/7 Communications</span>
                                </div>

                            </div>

                            <div>
                                <hr className="border-[1px] border-[#E4E4E4]"/>
                            </div>

                            <div className="flex space-y-3 md:space-y-4 lg:space-y-0 lg:gap-10 flex-col lg:flex-row">
                                {/* more about us button  */}
                                <div>
                                    <button
                                        className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-white uppercase">
                                        MORE ABOUT Us
                                    </button>
                                </div>

                                 {/* founder text  */}
                                <div className=" lg:border-[#C4C4C4]  lg:border-l-2 ">
                                    <div className="lg:ml-5">
                                        <div className="flex flex-row items-center gap-3  w-[250px]">
                                            <i className="fa-solid fa-phone text-[#F68A0A] text-5xl"></i>
                                            <div>
                                                <h2 className="text-sm text-[#4D5765] font-[archivo]">Call Us Anytime</h2>
                                                <p className="text-[24px] font-[600] font-[titillium] mt-1">+880 135 773 424
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                     {/* image */}
                    <div className="flex-1 mt-10 lg:mt-0">
                        <div>
                            <img className=" w-[550px] lg:w-full h-[450px] object-cover rounded-xl "
                                src={whyChooseUsImage} alt=""/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </Fragment>
    )
}