import { Fragment } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";

export default function ContactUsSection(){
    return(
        <Fragment>
            <div className="bg-white w-full my-20 ">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8 space-y-3 md:space-y-4">

                <div className="flex items-center gap-3 justify-center">
                    <hr className="border-[1px] border-[#F68A0A] w-12"/>
                    <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] uppercase">CONTACT US</h2>
                    <hr className="border-[1px] border-[#F68A0A] w-12"/>
                </div>

                <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
                    Let's Build a Better Future, Together</h3>

                <div className=" flex flex-col lg:flex-row gap-10 justify-between">

                    {/* text  */}
                    <div className="flex-1  space-y-3 md:space-y-4 ">
                         {/* text  */}
                        <p className="text-lg font-[archivo] text-[#4D5765]">
                            Have a query or project in mind? Get in touch with us today. Our team is ready to assist you
                            with expert advice and personalized solutions tailored to your construction needs.
                        </p>


                         {/* location  */}
                        <div className="flex items-center gap-3 border-[1px] border-[#E4E4E4] p-4">
                            <div className="bg-[#E4E2E2] w-12 h-12 rounded-full flex items-center justify-center">
                                
                                <IoLocation className="text-3xl text-[#F68A0A]" />
                            </div>
                            <p className="text-lg font-[600] font-[archivo] text-[#0E121D]">138 MacArthur Ave, United States
                            </p>
                        </div>

                        {/* phone */}
                        <div className="flex items-center gap-3 border-[1px] border-[#E4E4E4] p-4">
                            <div className="bg-[#E4E2E2] w-12 h-12 rounded-full flex items-center justify-center">
                              
                                <FiPhoneCall className="text-3xl text-[#F68A0A]"/>
                            </div>
                            <p className="text-lg font-[600] font-[archivo] text-[#0E121D]">+1 201-380-2737</p>
                        </div>

                        {/* gmail  */}
                        <div className="flex items-center gap-3 border-[1px] border-[#E4E4E4] p-4">
                            <div className="bg-[#E4E2E2] w-12 h-12 rounded-full flex items-center justify-center">
                                
                                <AiOutlineMail className=" text-3xl text-[#F68A0A]" />
                            </div>
                            <p className="text-lg font-[600] font-[archivo] text-[#0E121D]">help24/7info@kotar.com</p>
                        </div>

                    </div>

                    {/* input feilds  */}
                    <div className="flex-1  space-y-3 md:space-y-4 ">

                         {/* fullName,company  */}
                        <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
                            <div className="w-full">
                                <p className="text-base font-[600] font-[archivo] text-[#0E121D]">Full Name</p>
                                <input
                                    className="border-[1px] border-[#E4E4E4] w-full p-2 rounded-md mt-1 focus:border-[#F68A0A] focus:outline-none transition duration-300"
                                    type="text" placeholder="Enter Your Full Name"/>
                            </div>

                            <div className="w-full">
                                <p className="text-base font-[600] font-[archivo] text-[#0E121D]">Company</p>
                                <input
                                    className="border-[1px] border-[#E4E4E4] w-full p-2 rounded-md mt-1 focus:border-[#F68A0A] focus:outline-none transition duration-300"
                                    type="text" placeholder="Enter Your Company Name"/>
                            </div>

                        </div>

                         {/* email,phone  */}
                        <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
                            <div className="w-full">
                                <p className="text-base font-[600] font-[archivo] text-[#0E121D]">Email</p>
                                <input
                                    className="border-[1px] border-[#E4E4E4] w-full p-2 rounded-md mt-1 focus:border-[#F68A0A] focus:outline-none transition duration-300"
                                    type="text" placeholder="abc@gmail.com"/>
                            </div>

                            <div className="w-full">
                                <p className="text-base font-[600] font-[archivo] text-[#0E121D]">Phone Number</p>
                                <input
                                    className="border-[1px] border-[#E4E4E4] w-full p-2 rounded-md mt-1 focus:border-[#F68A0A] focus:outline-none transition duration-300"
                                    type="text" placeholder="Enter Your Phone Number"/>
                            </div>

                        </div>

                       {/* address */}
                        <div className="w-full">
                            <p className="text-base font-[600] font-[archivo] text-[#0E121D]">Address</p>
                            <input
                                className="border-[1px] border-[#E4E4E4] w-full p-2 rounded-md mt-1 focus:border-[#F68A0A] focus:outline-none transition duration-300"
                                type="text" placeholder="Enter You Address"/>
                        </div>

                         {/* message  */}
                        <div className="w-full">
                            <p className="text-base font-[600] font-[archivo] text-[#0E121D]">Your Message</p>
                            <textarea
                                className="border-[1px] border-[#E4E4E4] w-full p-2 rounded-md mt-1 min-h-[100px] resize-none focus:border-[#F68A0A] focus:outline-none transition duration-300"
                                name="" id="" placeholder="Type Your Message Here..."></textarea>
                        </div>

                         {/* button  */}
                        <div>
                            <button
                                className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 text-white text-sm font-[archivo] font-[500] px-7 py-4 flex items-center gap-1">
                                SEND A MESSAGE
                            </button>
                        </div>


                    </div>

                </div>

            </div>
        </div>
        </Fragment>
    )
}