import { Fragment } from "react";
import construction from "../assets/construction.png"

export default function ServiceSection(){
    return(
        <Fragment>
            <div className="bg-[url('./assets/background-effects/bg-effect-service.png')] bg-no-repeat bg-cover w-full my-20">
            <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8">
                 {/* text  */}
                <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-3 justify-center">
                        <hr className="border-[1px] border-[#F68A0A] w-12"/>
                        <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">OUR SERVICES</h2>
                        <hr className="border-[1px] border-[#F68A0A] w-12"/>
                    </div>

                    <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
                        The
                        Best Service For You</h3>


                    <div className="flex justify-end">
                        <button
                            className="uppercase text-sm font-[archivo] font-[600] text-[#0E121D] hover:bg-[#F68A0A] px-3 py-2 hover:text-white transform transition-all duration-300 flex items-center gap-2 border-[1px] hover:border-transparent border-[#4D5765]">
                            VIEW ALL
                            <i className="fa-solid fa-arrow-right text-sm"></i>
                        </button>
                    </div>

                </div>

                 {/* start card  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-3 md:mt-4 ">
                     {/* card 01  */}
                    <div className="bg-white p-6 space-y-3 md:space-y-4 xl:space-y-6">
                        <div className="flex items-center justify-between">
                             {/* icon  */}
                            <img className="w-12 h-12" src={construction} alt="" />
                            <span className="text-[20px] text-[#4D5765] font-[titillium] font-[600]">01</span>
                        </div>

                        <div>
                            <hr className="border-[1px] border-[#E4E4E4]"/>
                        </div>

                        {/* text  */}
                        <h2 className="font-[titillium] font-[600] text-[20px] lg:text-[24px] text-[#0E121D]">Building
                            Construction</h2>
                        <p className="font-[archivo] text-base text-[#4D5765]"> We offer comprehensive construction
                            solutions, ensuring quality, efficiency, and adherence to deadlines</p>
                         {/* read more button */}
                        <button
                            className="uppercase text-sm font-[archivo] font-[600] text-[#0E121D] hover:text-[#F68A0A] transform transition-all duration-200 flex items-center gap-2">
                            READ MORE
                            <i className="fa-solid fa-arrow-right text-sm"></i>
                        </button>

                    </div>
                     {/* end card 01  */}
                     {/* card 02  */}
                    <div className="bg-white p-6 space-y-3 md:space-y-4 xl:space-y-6">
                        <div className="flex items-center justify-between">
                             {/* icon  */}
                            <img className="w-12 h-12" src={construction} alt="" />
                            <span className="text-[20px] text-[#4D5765] font-[titillium] font-[600]">01</span>
                        </div>

                        <div>
                            <hr className="border-[1px] border-[#E4E4E4]"/>
                        </div>

                        {/* text  */}
                        <h2 className="font-[titillium] font-[600] text-[20px] lg:text-[24px] text-[#0E121D]">Building
                            Construction</h2>
                        <p className="font-[archivo] text-base text-[#4D5765]"> We offer comprehensive construction
                            solutions, ensuring quality, efficiency, and adherence to deadlines</p>
                         {/* read more button */}
                        <button
                            className="uppercase text-sm font-[archivo] font-[600] text-[#0E121D] hover:text-[#F68A0A] transform transition-all duration-200 flex items-center gap-2">
                            READ MORE
                            <i className="fa-solid fa-arrow-right text-sm"></i>
                        </button>

                    </div>
                     {/* end card 02  */}
                     {/* card 03  */}
                    <div className="bg-white p-6 space-y-3 md:space-y-4 xl:space-y-6">
                        <div className="flex items-center justify-between">
                             {/* icon  */}
                            <img className="w-12 h-12" src={construction} alt="" />
                            <span className="text-[20px] text-[#4D5765] font-[titillium] font-[600]">01</span>
                        </div>

                        <div>
                            <hr className="border-[1px] border-[#E4E4E4]"/>
                        </div>

                        {/* text  */}
                        <h2 className="font-[titillium] font-[600] text-[20px] lg:text-[24px] text-[#0E121D]">Building
                            Construction</h2>
                        <p className="font-[archivo] text-base text-[#4D5765]"> We offer comprehensive construction
                            solutions, ensuring quality, efficiency, and adherence to deadlines</p>
                         {/* read more button */}
                        <button
                            className="uppercase text-sm font-[archivo] font-[600] text-[#0E121D] hover:text-[#F68A0A] transform transition-all duration-200 flex items-center gap-2">
                            READ MORE
                            <i className="fa-solid fa-arrow-right text-sm"></i>
                        </button>

                    </div>
                     {/* end card 03  */}

                </div>
                 {/* end card  */}


            </div>

        </div>
        </Fragment>
    )
}