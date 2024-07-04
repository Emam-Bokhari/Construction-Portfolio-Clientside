import { Fragment } from "react";
import blogImage from "../assets/aboutUs-image/aboutus-profile.jpg"

export default function BlogSection(){
    return(
        <Fragment>
            <div className=" bg-white w-full my-20">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8 space-y-3 md:space-y-4">

                <div className="flex items-center gap-3 justify-center">
                    <hr className="border-[1px] border-[#F68A0A] w-12"/>
                    <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">Blog</h2>
                    <hr className="border-[1px] border-[#F68A0A] w-12"/>
                </div>

                <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
                    Our Construction Blog</h3>

                <div className="flex justify-end">
                    <button
                        className="uppercase text-sm font-[archivo] font-[600] text-[#0E121D] hover:bg-[#F68A0A] px-3 py-2 hover:text-white transform transition-all duration-300 flex items-center gap-2 border-[1px] hover:border-transparent border-[#4D5765]">
                        VIEW ALL
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                    </button>
                </div>

                 {/* blogs  */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center">

                    {/* blog 01  */}
                    <div
                        className="p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 ">
                        <a href="#">
                            <div className=" space-y-3 md:space-y-4">

                                <div className="relative ">
                                    {/* image */}
                                    <img className="rounded-lg w-full  h-[185px]"
                                        src={blogImage} alt=""/>

                                    <h2
                                        className="bg-[#F68A0A] px-2 py-1 inline absolute w-[180px] transform -translate-x-2/4 left-2/4 top-[95%]   text-white text-sm font-[archivo] font-[500] text-center">
                                        Building Construction
                                    </h2>
                                </div>

                                <p className="font-[titillium] text-[20px] font-[600]  text-[#0E121D] pt-3 text-center ">
                                    We offer comprehensive construction solutions, ensuring quality
                                </p>

                                <div className="flex gap-10 items-center justify-center">
                                    <p className="text-base font-[archivo] text-[#7d8794] font-normal">By Admin</p>
                                    <div className="flex gap-2 items-center">
                                        <i className="fa-regular fa-calendar text-[#7d8794] text-base"></i>
                                        <p className="text-base font-[archivo] text-[#7d8794] font-normal">27 May 2024</p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>
                    {/* blog 01  */}
                    <div
                        className="p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 ">
                        <a href="#">
                            <div className=" space-y-3 md:space-y-4">

                                <div className="relative ">
                                    {/* image */}
                                    <img className="rounded-lg w-full  h-[185px]"
                                        src={blogImage} alt=""/>

                                    <h2
                                        className="bg-[#F68A0A] px-2 py-1 inline absolute w-[180px] transform -translate-x-2/4 left-2/4 top-[95%]   text-white text-sm font-[archivo] font-[500] text-center">
                                        Building Construction
                                    </h2>
                                </div>

                                <p className="font-[titillium] text-[20px] font-[600]  text-[#0E121D] pt-3 text-center ">
                                    We offer comprehensive construction solutions, ensuring quality
                                </p>

                                <div className="flex gap-10 items-center justify-center">
                                    <p className="text-base font-[archivo] text-[#7d8794] font-normal">By Admin</p>
                                    <div className="flex gap-2 items-center">
                                        <i className="fa-regular fa-calendar text-[#7d8794] text-base"></i>
                                        <p className="text-base font-[archivo] text-[#7d8794] font-normal">27 May 2024</p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>
                    {/* blog 01  */}
                    <div
                        className="p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 ">
                        <a href="#">
                            <div className=" space-y-3 md:space-y-4">

                                <div className="relative ">
                                    {/* image */}
                                    <img className="rounded-lg w-full  h-[185px]"
                                        src={blogImage} alt=""/>

                                    <h2
                                        className="bg-[#F68A0A] px-2 py-1 inline absolute w-[180px] transform -translate-x-2/4 left-2/4 top-[95%]   text-white text-sm font-[archivo] font-[500] text-center">
                                        Building Construction
                                    </h2>
                                </div>

                                <p className="font-[titillium] text-[20px] font-[600]  text-[#0E121D] pt-3 text-center ">
                                    We offer comprehensive construction solutions, ensuring quality
                                </p>

                                <div className="flex gap-10 items-center justify-center">
                                    <p className="text-base font-[archivo] text-[#7d8794] font-normal">By Admin</p>
                                    <div className="flex gap-2 items-center">
                                        <i className="fa-regular fa-calendar text-[#7d8794] text-base"></i>
                                        <p className="text-base font-[archivo] text-[#7d8794] font-normal">27 May 2024</p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>
                    {/* blog 01  */}
                    <div
                        className="p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 ">
                        <a href="#">
                            <div className=" space-y-3 md:space-y-4">

                                <div className="relative ">
                                    {/* image */}
                                    <img className="rounded-lg w-full  h-[185px]"
                                        src={blogImage} alt=""/>

                                    <h2
                                        className="bg-[#F68A0A] px-2 py-1 inline absolute w-[180px] transform -translate-x-2/4 left-2/4 top-[95%]   text-white text-sm font-[archivo] font-[500] text-center">
                                        Building Construction
                                    </h2>
                                </div>

                                <p className="font-[titillium] text-[20px] font-[600]  text-[#0E121D] pt-3 text-center ">
                                    We offer comprehensive construction solutions, ensuring quality
                                </p>

                                <div className="flex gap-10 items-center justify-center">
                                    <p className="text-base font-[archivo] text-[#7d8794] font-normal">By Admin</p>
                                    <div className="flex gap-2 items-center">
                                        <i className="fa-regular fa-calendar text-[#7d8794] text-base"></i>
                                        <p className="text-base font-[archivo] text-[#7d8794] font-normal">27 May 2024</p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>

                </div>

                

            </div>
        </div>
        </Fragment>
    )
}