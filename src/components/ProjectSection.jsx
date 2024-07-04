import { Fragment } from "react";
import backgroundImage from "../assets/background-effects/latest-projects-bg-effect.png"
import projectImage from "../assets/latest-projects-image/projects-img-01.jpg"

export default function ProjectSection(){
    const background={
        backgroundImage:`url(${backgroundImage})`
    }
    return(
        <Fragment>
            <div style={background}
            className=" bg-no-repeat bg-cover w-full ">
            <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 ">

                <div className="mt-[585px] md:mt-[280px] lg:mt-[200px]  xl:mt-40 space-y-3 md:space-y-4">

                    <div className="flex items-center gap-3 justify-center">
                        <hr className="border-[1px] border-[#F68A0A] w-12"/>
                        <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">LATEST PROJECTS</h2>
                        <hr className="border-[1px] border-[#F68A0A] w-12"/>
                    </div>

                    <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
                        Crafting Quality Structures, Creating
                        <br/>
                        Lasting Impressions
                    </h3>

                    {/* image  */}
                    <div className=" flex justify-between gap-10">

                        {/* image 01  */}
                        <div>
                            <img className="w-[500px] h-[400px] object-cover"
                                src={projectImage} alt=""/>
                        </div>
                        {/* image 01  */}
                        <div>
                            <img className="w-[500px] h-[400px] object-cover"
                                src={projectImage} alt=""/>
                        </div>
                        {/* image 01  */}
                        <div>
                            <img className="w-[500px] h-[400px] object-cover"
                                src={projectImage} alt=""/>
                        </div>

                       



                    </div>

                </div>


            </div>
        </div>
        </Fragment>
    )
}