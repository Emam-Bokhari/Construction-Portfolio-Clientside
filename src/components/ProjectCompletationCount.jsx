import { Fragment } from "react";

export default function ProjectCompletationCount(){
    return(
        <Fragment>
              
           

            <div
                className="max-w-[425px] sm:max-w-screen-sm md:max-w[768px] xl:max-w-[1218px]  mx-auto p-8  bg-[#F68A0A] ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div className=" text-center">
                        <p className="font-[titillium] text-[46px] lg:text-[54px] font-[700] text-white">2k+</p>
                        <span className="font-[titillium] text-[18px] font-[500] text-white">Project Completed</span>
                    </div>

                    <div className=" text-center">
                        <p className="font-[titillium] text-[46px] lg:text-[54px] font-[700] text-white">1.5k+</p>
                        <span className="font-[titillium] text-[18px] font-[500] text-white">Customer Satisfied</span>
                    </div>

                    <div className=" text-center">
                        <p className="font-[titillium] text-[46px] lg:text-[54px]  font-[700] text-white">360+</p>
                        <span className="font-[titillium] text-[18px] font-[500] text-white">Expert Team Members</span>
                    </div>

                    <div className=" text-center">
                        <p className="font-[titillium] text-[46px] lg:text-[54px]  font-[700] text-white">85+</p>
                        <span className="font-[titillium] text-[18px] font-[500] text-white">Awards Winner</span>
                    </div>

                </div>

            </div>

           
        </Fragment>
    )
}