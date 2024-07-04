import { Fragment } from "react";
import faqImage from "../assets/faq-image/faq-01.jpg"

export default function FaqSection(){
    return(
        <Fragment>
            <div className=" bg-white my-20">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8  ">

                <div className="flex gap-10 justify-between items-start lg:items-center flex-col-reverse lg:flex-row ">

                     {/* image and text */}
                    <div className="flex-1">
                        <div>
                            <img className="w-[550px] lg:w-full h-[450px] object-cover rounded-xl "
                                src={faqImage} alt=""/>
                        </div>
                    </div>

                     {/* text  */}
                    <div className=" flex-1">
                        <div className="space-y-3 md:space-y-4 ">
                            <div className="flex items-center gap-3 mt-10  lg:mt-0">
                                <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] uppercase">
                                    FREQUENTLY ASKED QUESTION
                                </h2>
                                <hr className="border-[1px] border-[#F68A0A] w-12"/>
                            </div>

                            <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D]">
                                Last Reviews, Inhabitance Allows, And Project
                            </h3>

                            <p className="text-base font-[archivo] font-normal text-[#4D5765]">In the initial phases,
                                architects and designers play a crucial role in conceptualizing and designing projects,
                                ensuring they align with both aesthetic and functional requirements.</p>

                            {/* faq 01  */}
                            <div className="space-3 md:space-y-4">

                                <details className="bg-[#F6F6F6] p-4">
                                    <summary className="font-[titillium] text-lg font-[600] text-[#0E121D] ">
                                        How can I ensure safety on a constru site ?
                                    </summary>
                                    <div className="mt-3">
                                        <span className="font-[archivo] text-base text-[#4D5765] ">
                                            Ensuring safety on a construction site is crucial to protect workers,
                                            visitors, and the overall success of the project. Here are some key steps to
                                            enhance safety on a construction site
                                        </span>
                                    </div>
                                </details>

                                 {/* faq 02  */}
                                <details className="bg-[#F6F6F6] p-4">
                                    <summary className="font-[titillium] text-lg font-[600] text-[#0E121D] ">
                                        How can I ensure safety on a constru site ?
                                    </summary>
                                    <div className="mt-3">
                                        <span className="font-[archivo] text-base text-[#4D5765] ">
                                            Ensuring safety on a construction site is crucial to protect workers,
                                            visitors, and the overall success of the project. Here are some key steps to
                                            enhance safety on a construction site
                                        </span>
                                    </div>
                                </details>

                                 {/* faq 03  */}
                                <details className="bg-[#F6F6F6] p-4">
                                    <summary className="font-[titillium] text-lg font-[600] text-[#0E121D] ">
                                        How can I ensure safety on a constru site ?
                                    </summary>
                                    <div className="mt-3">
                                        <span className="font-[archivo] text-base text-[#4D5765] ">
                                            Ensuring safety on a construction site is crucial to protect workers,
                                            visitors, and the overall success of the project. Here are some key steps to
                                            enhance safety on a construction site
                                        </span>
                                    </div>
                                </details>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </div>
        </Fragment>
    )
}