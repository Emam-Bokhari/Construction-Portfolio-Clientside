import { Fragment } from "react";
import testimonialImage from "../assets/testimonials-image/img-01.jpg"

export default function TestimonialSection(){
    return(
        <Fragment>
            <div className="bg-[#F8F8F8] w-full my-20">
            <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 justify-center">
                    <hr className="border-[1px] border-[#F68A0A] w-12"/>
                    <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] uppercase">TESTIMONIALS</h2>
                    <hr className="border-[1px] border-[#F68A0A] w-12"/>
                </div>

                <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
                    Real Happy Customers, Real Stories</h3>

               {/* start cards  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">

                    
                    <div className="w-full  space-y-2 p-4 bg-white shadow-sm">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img className=" w-[120px] h-[120px] object-cover rounded-full ring-2 ring-offset-2 ring-[#F68A0A]"
                                src={testimonialImage} alt=""/>
                        </div>


                         {/* text  */}
                        <h2 className="font-[titillium] text-[20px] font-[600] text-center text-[#0E121D]">
                            Md.Rafiqul Islam
                        </h2>

                        <p className="text-[#4D5765] text-base font-[500] font-[archivo]">These services involve activities
                            before the actual construction begins, including site
                            analysis, feasibility studies estimation.</p>

                    </div>
                    <div className="w-full  space-y-2 p-4 bg-white shadow-sm">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img className=" w-[120px] h-[120px] object-cover rounded-full ring-2 ring-offset-2 ring-[#F68A0A]"
                                src={testimonialImage} alt=""/>
                        </div>


                         {/* text  */}
                        <h2 className="font-[titillium] text-[20px] font-[600] text-center text-[#0E121D]">
                            Md.Rafiqul Islam
                        </h2>

                        <p className="text-[#4D5765] text-base font-[500] font-[archivo]">These services involve activities
                            before the actual construction begins, including site
                            analysis, feasibility studies estimation.</p>

                    </div>
                    <div className="w-full  space-y-2 p-4 bg-white shadow-sm">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img className=" w-[120px] h-[120px] object-cover rounded-full ring-2 ring-offset-2 ring-[#F68A0A]"
                                src={testimonialImage} alt=""/>
                        </div>


                         {/* text  */}
                        <h2 className="font-[titillium] text-[20px] font-[600] text-center text-[#0E121D]">
                            Md.Rafiqul Islam
                        </h2>

                        <p className="text-[#4D5765] text-base font-[500] font-[archivo]">These services involve activities
                            before the actual construction begins, including site
                            analysis, feasibility studies estimation.</p>

                    </div>
                    

                    

                </div>
                {/* ends cards */}

            </div>
        </div>
        </Fragment>
    )
}