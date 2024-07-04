import { Fragment } from "react";
import CommonPageBanner from "../../CommonPageBanner";
import AboutUsSection from "../../AboutUsSection";
import WorkProcessSection from "../../WorkProcessSection";
import ProjectCompletationCount from "../../ProjectCompletationCount";
import teamMemberImage from "../../../assets/our-team-member-images/team-01.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutUs() {
  return (
    <Fragment>
      <CommonPageBanner heading="About Us" tittle="Home | About Us" />
      <AboutUsSection />
      <WorkProcessSection />
      <ProjectCompletationCount />

      {/* all team members section */}
      <div className="bg-[#F8F8F8] w-full my-20">
        <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 space-y-3 md:space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <hr className="border-[1px] border-[#F68A0A] w-12" />
            <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">
              TEAM MEMBERS
            </h2>
            <hr className="border-[1px] border-[#F68A0A] w-12" />
          </div>

          <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
            Our Professional Team
          </h3>

          {/* start cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* card 01  */}
            <div className="w-full  space-y-2 bg-white shadow-sm p-4 rounded-md">
              {/* image  */}
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-[80px] h-[80px] object-cover rounded-full ring-1 ring-[#F68A0A] ring-offset-2"
                    src={teamMemberImage}
                    alt=""
                  />
                </div>
              </div>

              <div>
                {/* text  */}
                <h2 className="font-[titillium] text-[20px] font-[600] text-center">
                  Michel Richard
                </h2>
                <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                  Founder
                </p>
              </div>

              {/* social icons  */}
              <div className="flex justify-center items-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1DA1F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaTwitter className="text-base" />
                  </div>
                </a>

                {/* instagram  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#e56969] transform transition-all duration-300 text-black hover:text-white">
                    <FaInstagram className="text-base" />
                  </div>
                </a>

                {/* linkedin  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#0077B5] transform transition-all duration-300 text-black hover:text-white">
                    <FaLinkedin className="text-base" />
                  </div>
                </a>
              </div>
              {/* end social icon  */}
            </div>
            <div className="w-full  space-y-2 bg-white shadow-sm p-4 rounded-md">
              {/* image  */}
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-[80px] h-[80px] object-cover rounded-full ring-1 ring-[#F68A0A] ring-offset-2"
                    src={teamMemberImage}
                    alt=""
                  />
                </div>
              </div>

              <div>
                {/* text  */}
                <h2 className="font-[titillium] text-[20px] font-[600] text-center">
                  Michel Richard
                </h2>
                <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                  Founder
                </p>
              </div>

              {/* social icons  */}
              <div className="flex justify-center items-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1DA1F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaTwitter className="text-base" />
                  </div>
                </a>

                {/* instagram  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#e56969] transform transition-all duration-300 text-black hover:text-white">
                    <FaInstagram className="text-base" />
                  </div>
                </a>

                {/* linkedin  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#0077B5] transform transition-all duration-300 text-black hover:text-white">
                    <FaLinkedin className="text-base" />
                  </div>
                </a>
              </div>
              {/* end social icon  */}
            </div>
            <div className="w-full  space-y-2 bg-white shadow-sm p-4 rounded-md">
              {/* image  */}
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-[80px] h-[80px] object-cover rounded-full ring-1 ring-[#F68A0A] ring-offset-2"
                    src={teamMemberImage}
                    alt=""
                  />
                </div>
              </div>

              <div>
                {/* text  */}
                <h2 className="font-[titillium] text-[20px] font-[600] text-center">
                  Michel Richard
                </h2>
                <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                  Founder
                </p>
              </div>

              {/* social icons  */}
              <div className="flex justify-center items-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1DA1F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaTwitter className="text-base" />
                  </div>
                </a>

                {/* instagram  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#e56969] transform transition-all duration-300 text-black hover:text-white">
                    <FaInstagram className="text-base" />
                  </div>
                </a>

                {/* linkedin  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#0077B5] transform transition-all duration-300 text-black hover:text-white">
                    <FaLinkedin className="text-base" />
                  </div>
                </a>
              </div>
              {/* end social icon  */}
            </div>
            <div className="w-full  space-y-2 bg-white shadow-sm p-4 rounded-md">
              {/* image  */}
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-[80px] h-[80px] object-cover rounded-full ring-1 ring-[#F68A0A] ring-offset-2"
                    src={teamMemberImage}
                    alt=""
                  />
                </div>
              </div>

              <div>
                {/* text  */}
                <h2 className="font-[titillium] text-[20px] font-[600] text-center">
                  Michel Richard
                </h2>
                <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                  Founder
                </p>
              </div>

              {/* social icons  */}
              <div className="flex justify-center items-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1DA1F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaTwitter className="text-base" />
                  </div>
                </a>

                {/* instagram  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#e56969] transform transition-all duration-300 text-black hover:text-white">
                    <FaInstagram className="text-base" />
                  </div>
                </a>

                {/* linkedin  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#0077B5] transform transition-all duration-300 text-black hover:text-white">
                    <FaLinkedin className="text-base" />
                  </div>
                </a>
              </div>
              {/* end social icon  */}
            </div>
            <div className="w-full  space-y-2 bg-white shadow-sm p-4 rounded-md">
              {/* image  */}
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-[80px] h-[80px] object-cover rounded-full ring-1 ring-[#F68A0A] ring-offset-2"
                    src={teamMemberImage}
                    alt=""
                  />
                </div>
              </div>

              <div>
                {/* text  */}
                <h2 className="font-[titillium] text-[20px] font-[600] text-center">
                  Michel Richard
                </h2>
                <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                  Founder
                </p>
              </div>

              {/* social icons  */}
              <div className="flex justify-center items-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1DA1F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaTwitter className="text-base" />
                  </div>
                </a>

                {/* instagram  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#e56969] transform transition-all duration-300 text-black hover:text-white">
                    <FaInstagram className="text-base" />
                  </div>
                </a>

                {/* linkedin  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#0077B5] transform transition-all duration-300 text-black hover:text-white">
                    <FaLinkedin className="text-base" />
                  </div>
                </a>
              </div>
              {/* end social icon  */}
            </div>
            <div className="w-full  space-y-2 bg-white shadow-sm p-4 rounded-md">
              {/* image  */}
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-[80px] h-[80px] object-cover rounded-full ring-1 ring-[#F68A0A] ring-offset-2"
                    src={teamMemberImage}
                    alt=""
                  />
                </div>
              </div>

              <div>
                {/* text  */}
                <h2 className="font-[titillium] text-[20px] font-[600] text-center">
                  Michel Richard
                </h2>
                <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                  Founder
                </p>
              </div>

              {/* social icons  */}
              <div className="flex justify-center items-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1DA1F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaTwitter className="text-base" />
                  </div>
                </a>

                {/* instagram  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#e56969] transform transition-all duration-300 text-black hover:text-white">
                    <FaInstagram className="text-base" />
                  </div>
                </a>

                {/* linkedin  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#0077B5] transform transition-all duration-300 text-black hover:text-white">
                    <FaLinkedin className="text-base" />
                  </div>
                </a>
              </div>
              {/* end social icon  */}
            </div>
            <div className="w-full  space-y-2 bg-white shadow-sm p-4 rounded-md">
              {/* image  */}
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-[80px] h-[80px] object-cover rounded-full ring-1 ring-[#F68A0A] ring-offset-2"
                    src={teamMemberImage}
                    alt=""
                  />
                </div>
              </div>

              <div>
                {/* text  */}
                <h2 className="font-[titillium] text-[20px] font-[600] text-center">
                  Michel Richard
                </h2>
                <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                  Founder
                </p>
              </div>

              {/* social icons  */}
              <div className="flex justify-center items-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1DA1F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaTwitter className="text-base" />
                  </div>
                </a>

                {/* instagram  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#e56969] transform transition-all duration-300 text-black hover:text-white">
                    <FaInstagram className="text-base" />
                  </div>
                </a>

                {/* linkedin  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#0077B5] transform transition-all duration-300 text-black hover:text-white">
                    <FaLinkedin className="text-base" />
                  </div>
                </a>
              </div>
              {/* end social icon  */}
            </div>
            {/* end card 01 */}
          </div>
          {/* ends cards  */}
        </div>
      </div>
    </Fragment>
  );
}
