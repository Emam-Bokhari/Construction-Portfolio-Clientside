import { Fragment } from "react";
import getFreeConsultationBackgroundImage from "../assets/get-a-free-consultation/bg-01.png";
import getFreeConsultationImage from "../assets/get-a-free-consultation/img-01.jpg";
import { Link } from "react-router-dom";

export default function GetFreeConsultation(){
    const getFreeConsultationBackground = {
        backgroundImage: `url(${getFreeConsultationBackgroundImage})`,
      };
    return(
        <Fragment>
            <div
          style={getFreeConsultationBackground}
          className=" bg-no-repeat bg-cover w-full  "
        >
          <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 ">
            <div className="flex items-center justify-between gap-10">
              {/* text  */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">
                    GET CONSULTATION
                  </h2>
                  <hr className="border-[1px] border-[#F68A0A] w-12" />
                </div>
                <h3 className="text-[36px] lg:text-[48px] text-white font-[titillium] font-[700]">
                  Get A Free Consultation Contact Us !
                </h3>
                {/* contact us button  */}
                <div>
                  <Link to="/contactUs" className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-white uppercase">
                    CONTACT US
                  </Link>
                </div>
              </div>

              {/* image  */}
              <div>
                <img
                  className="w-80 xl:w-96 h-60 xl:h-80 rounded-tl-[50%] 2xl:rounded-tl-[45%] rounded-bl-[50%] 2xl:rounded-bl-[45%] hidden lg:block"
                  src={getFreeConsultationImage}
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        </Fragment>
    )
}