import { Fragment } from "react";

export default function CallForSupportSection(){
    return(
        <Fragment>
             <div className="bg-[#F8F8F8] w-full">
            <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 ">

                <div className="space-y-3 md:space-y-4">
                    {/* text  */}
                    <div className="flex items-center gap-3">
                        <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] uppercase">
                            GET SUPPORT
                        </h2>
                        <hr className="border-[1px] border-[#F68A0A] w-12"/>
                    </div>

                    <h3 className="text-[36px] lg:text-[48px] text-[#0E121D] font-[titillium] font-[700]">
                        Can’t find your desired service? Let us know 24/7 in 16513
                    </h3>

                    {/* button  */}
                    <div className="flex items-center gap-5">
                        <a href="https://wa.me/+8801886578726"
                            className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4  text-[#0E121D] uppercase flex items-center gap-3">
                            REQUEST A SERVICE
                            <i className="fa-brands fa-whatsapp text-3xl"></i>
                        </a>

                        <button
                            className="border-[1px] border-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-[#0E121D] uppercase flex items-center gap-2">
                            <i className="fa-solid fa-phone"></i>
                            16513
                        </button>
                    </div>
                </div>

            </div>
        </div>
        </Fragment>
    )
}