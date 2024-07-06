import { Fragment } from "react";
import { FaFileAlt, FaHandshake, FaPenNib } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function WorkProcessSection() {
  return (
    <Fragment>
      <div className="bg-white my-20">
        <div className="bg-[url('./assets/background-effects/bg-effect-how-it-works.png')] bg-no-repeat bg-cover w-full  max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8    ">
          <div className="flex lg:justify-between items-center gap-10 flex-col lg:flex-row">
            {/* text  */}
            <div className=" bg-[#0E121D] z-10 p-6 space-y-3 md:space-y-4  w-full lg:w-2/5">
              <div className="flex items-center gap-3">
                <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">
                  WORK PROCESS
                </h2>
                <hr className="border-[1px] border-[#F68A0A] w-12" />
              </div>
              <h3 className="text-[36px] lg:text-[48px] text-white font-[titillium] font-[700]">
                How It Work
              </h3>
              <p className="text-base font-[archivo] text-[#7d8794] font-normal ">
                The pre-construction phase involves site preparation, acquiring
                necessary permits, and establishing a construct.
              </p>
              {/* get in touch button */}
              <div className="bg-[#F68A0A] hover:bg-[#ee8404] w-[150px] py-4 text-center transform transition-all duration-300  text-sm md:text-base font-[archivo] font-[600]   text-white uppercase">
                <Link to="/contactUs" >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
            {/* work step,icon  */}
            <div className=" w-full lg:w-3/5  ">
              <div className="space-y-10 xl:space-y-16">
                {/* Step 01,Step 02  */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-3">
                  {/* step 01  */}
                  <div className="flex flex-1 flex-col  md:flex-row items-center md:items-start text-center md:text-left gap-3">
                    <div className="rounded-full bg-[#e4e2e2]  w-[80px] h-[80px] flex justify-center items-center">
                      <div className="bg-[#e4e2e2] w-[80px] h-[80px] rounded-full flex justify-center items-center ">
                        <FaFileAlt className=" text-5xl text-[#A4D4FF] hover:rotate-[360deg] transition-all duration-500 " />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h2 className="font-[archivo] text-sm">STEP -01</h2>
                      <h3 className="font-[titillium] font-[600] text-[20px] lg:text-[24px]">
                        Project Research
                      </h3>
                      <p className="font-[archivo] text-base text-[#4D5765]">
                        Comprehensive research to understand project needs,
                        scope, and potential hurdles.
                      </p>
                    </div>

                    <div></div>
                  </div>
                  {/* step 02  */}
                  <div className="flex flex-1 flex-col  md:flex-row items-center md:items-start text-center md:text-left gap-3">
                    <div className="rounded-full bg-[#e4e2e2] w-[80px] h-[80px] flex justify-center items-center">
                      <div className="bg-[#e4e2e2] w-[80px] h-[80px] rounded-full flex justify-center items-center ">
                        <FaPenNib className="text-5xl text-[#FF6600] hover:rotate-[360deg] transition-all duration-500" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h2 className="font-[archivo] text-sm">STEP -02</h2>
                      <h3 className="font-[titillium] font-[600] text-[20px] lg:text-[24px]">
                        Design Build
                      </h3>
                      <p className="font-[archivo] text-base text-[#4D5765]">
                        Sketching, prototyping, and commencing construction.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Step 03,Step 04  */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-3">
                  {/* step 03  */}
                  <div className="flex flex-1 flex-col  md:flex-row items-center md:items-start text-center md:text-left gap-3">
                    <div className="rounded-full bg-[#e4e2e2] w-[80px] h-[80px] flex justify-center items-center">
                      <div className="bg-[#e4e2e2] w-[80px] h-[80px] rounded-full flex justify-center items-center ">
                        <FaHelmetSafety className=" text-5xl text-[#F8C460] hover:rotate-[360deg] transition-all duration-500" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h2 className="font-[archivo] text-sm">STEP -03</h2>
                      <h3 className="font-[titillium] font-[600] text-[20px] lg:text-[24px]">
                        Starting Work
                      </h3>
                      <p className="font-[archivo] text-base text-[#4D5765]">
                        Initiate construction work according to approved designs
                        and plans.
                      </p>
                    </div>

                    <div></div>
                  </div>
                  {/* step 04  */}
                  <div className="flex flex-1 flex-col  md:flex-row items-center md:items-start text-center md:text-left gap-3">
                    <div className="rounded-full bg-[#e4e2e2]  w-[80px] h-[80px] flex justify-center items-center">
                      <div className="bg-[#e4e2e2] w-[80px] h-[80px] rounded-full flex justify-center items-center ">
                        <FaHandshake className=" text-5xl text-[#737373] hover:rotate-[360deg] transition-all duration-500" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h2 className="font-[archivo] text-sm">STEP -04</h2>
                      <h3 className="font-[titillium] font-[600] text-[20px] lg:text-[24px]">
                        Finished Work
                      </h3>
                      <p className="font-[archivo] text-base text-[#48525f]">
                        Finalize construction work, ensuring adherence to
                        specifications and standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
