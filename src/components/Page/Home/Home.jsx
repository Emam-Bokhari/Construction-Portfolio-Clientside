import { Fragment } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import whyChooseUsImage from "../../../assets/why-choose-us-image/why-choose-us.jpg";
import faqImage from "../../../assets/faq-image/faq-01.jpg";
import blogImage from "../../../assets/aboutUs-image/aboutus-profile.jpg";
import getFreeConsultationBackgroundImage from "../../../assets/get-a-free-consultation/bg-01.png";
import getFreeConsultationImage from "../../../assets/get-a-free-consultation/img-01.jpg";
import projectBackgroundImage from "../../../assets/background-effects/latest-projects-bg-effect.png";
import projectImage from "../../../assets/latest-projects-image/projects-img-01.jpg";
import teamMemberBackgroundImage from "../../../assets/background-effects/our-team-bg-effect.jpg";
import teamMemberImage from "../../../assets/our-team-member-images/team-01.jpg";
import Banner from "../../Header/Banner";
import AboutUsSection from "../../AboutUsSection";
import WorkProcessSection from "../../WorkProcessSection";
import ServiceSection from "../../ServiceSection";
import ProjectCompletationCount from "../../ProjectCompletationCount";
import TestimonialSection from "../../TestimonialSection";
import ContactUsSection from "../../ContactUsSection";

export default function Home() {
  const getFreeConsultationBackground = {
    backgroundImage: `url(${getFreeConsultationBackgroundImage})`,
  };
  const projectBackground = {
    backgroundImage: `url(${projectBackgroundImage})`,
  };
  const teamMemberBackground = {
    backgroundImage: `url(${teamMemberBackgroundImage})`,
  };
  return (
    <Fragment>
      <Banner />
      <AboutUsSection />
      <ServiceSection />
      <WorkProcessSection />
      <div className="relative">
        {/* get free consultation section */}
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
                  <button className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-white uppercase">
                    CONTACT US
                  </button>
                </div>
              </div>

              {/* image  */}
              <div>
                <img
                  className="w-80 xl:w-96 h-60 xl:h-80 rounded-tl-[50%] 2xl:rounded-tl-[45%] rounded-bl-[50%] 2xl:rounded-bl-[45%] hidden lg:block"
                  src={getFreeConsultationImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

       <div className="absolute top-[90%] lg:top-[85%] left-2/4 -translate-x-2/4 w-full">
       <ProjectCompletationCount />
       </div>

      </div>

      {/* project section */}
      <div style={projectBackground} className=" bg-no-repeat bg-cover w-full ">
        <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 ">
          <div className="mt-[585px] md:mt-[280px] lg:mt-[200px]  xl:mt-40 space-y-3 md:space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <hr className="border-[1px] border-[#F68A0A] w-12" />
              <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">
                LATEST PROJECTS
              </h2>
              <hr className="border-[1px] border-[#F68A0A] w-12" />
            </div>

            <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
              Crafting Quality Structures, Creating
              <br />
              Lasting Impressions
            </h3>

            {/* image  */}
            <div className=" flex justify-between gap-10">
              {/* image 01  */}
              <div>
                <img
                  className="w-[500px] h-[400px] object-cover"
                  src={projectImage}
                  alt=""
                />
              </div>
              {/* image 01  */}
              <div>
                <img
                  className="w-[500px] h-[400px] object-cover"
                  src={projectImage}
                  alt=""
                />
              </div>
              {/* image 01  */}
              <div>
                <img
                  className="w-[500px] h-[400px] object-cover"
                  src={projectImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team member section */}
      <div
        style={teamMemberBackground}
        className=" bg-no-repeat bg-cover w-full my-20"
      >
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

          {/* start cards  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {/* card 01  */}
            <div className="w-full  space-y-2 pb-4 bg-white shadow-sm">
              {/* image  */}
              <img
                className="w-full h-[420px] lg:h-[320px] xl:h-[265px] object-cover"
                src={teamMemberImage}
                alt=""
              />

              {/* text  */}
              <h2 className="font-[titillium] text-[24px] font-[600] text-center">
                Michel Richard
              </h2>
              <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                Founder
              </p>

              {/* social icons  */}
              <div className="flex items-center justify-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter */}
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
            {/* end card 01  */}
            {/* card 01  */}
            <div className="w-full  space-y-2 pb-4 bg-white shadow-sm">
              {/* image  */}
              <img
                className="w-full h-[420px] lg:h-[320px] xl:h-[265px] object-cover"
                src={teamMemberImage}
                alt=""
              />

              {/* text  */}
              <h2 className="font-[titillium] text-[24px] font-[600] text-center">
                Michel Richard
              </h2>
              <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                Founder
              </p>

              {/* social icons  */}
              <div className="flex items-center justify-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter */}
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
            {/* end card 01  */}
            {/* card 01  */}
            <div className="w-full  space-y-2 pb-4 bg-white shadow-sm">
              {/* image  */}
              <img
                className="w-full h-[420px] lg:h-[320px] xl:h-[265px] object-cover"
                src={teamMemberImage}
                alt=""
              />

              {/* text  */}
              <h2 className="font-[titillium] text-[24px] font-[600] text-center">
                Michel Richard
              </h2>
              <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                Founder
              </p>

              {/* social icons  */}
              <div className="flex items-center justify-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter */}
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
            {/* end card 01  */}
            {/* card 01  */}
            <div className="w-full  space-y-2 pb-4 bg-white shadow-sm">
              {/* image  */}
              <img
                className="w-full h-[420px] lg:h-[320px] xl:h-[265px] object-cover"
                src={teamMemberImage}
                alt=""
              />

              {/* text  */}
              <h2 className="font-[titillium] text-[24px] font-[600] text-center">
                Michel Richard
              </h2>
              <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                Founder
              </p>

              {/* social icons  */}
              <div className="flex items-center justify-center gap-3">
                {/* facebook  */}
                <a href="#">
                  <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                    <FaFacebook className="text-base" />
                  </div>
                </a>

                {/* twitter */}
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
            {/* end card 01  */}
          </div>
          {/* ends cards  */}
        </div>
      </div>

      {/* why choose us section */}
      <div className="bg-white w-full my-20">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8 space-y-3 md:space-x-4">
          <div className="flex gap-0 lg:gap-10 justify-between items-start lg:items-center flex-col lg:flex-row">
            {/* text  */}
            <div className=" flex-1">
              <div className="space-y-3 md:space-y-4 ">
                <div className="flex items-center gap-3 lg:mt-0">
                  <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]  ">
                    WHY CHOOSE US
                  </h2>
                  <hr className="border-[1px] border-[#F68A0A] w-12" />
                </div>

                <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D]">
                  Precision in Construction, Strength in Execution
                </h3>

                {/* icon 1  */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                  <div className="flex items-center gap-2 w-[250px]">
                    <i className="fa-solid fa-square-check text-[#F68A0A] text-2xl"></i>
                    <span className="text-lg font-[600] font-[archivo]">
                      Powerfull Product Strategy
                    </span>
                  </div>

                  <div className="flex items-center gap-2  w-[250px]">
                    <i className="fa-solid fa-square-check text-[#F68A0A] text-2xl"></i>
                    <span className="text-lg font-[600] font-[archivo]">
                      Quality Control System
                    </span>
                  </div>
                </div>

                {/* icon 2 */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 ">
                  <div className="flex items-center gap-2  w-[250px]">
                    <i className="fa-solid fa-square-check text-[#F68A0A] text-2xl"></i>
                    <span className="text-lg font-[600] font-[archivo]">
                      Professional Team Works
                    </span>
                  </div>

                  <div className="flex items-center gap-2  w-[250px]">
                    <i className="fa-solid fa-square-check text-[#F68A0A] text-2xl"></i>
                    <span className="text-lg font-[600] font-[archivo]">
                      Award Winning Projects
                    </span>
                  </div>
                </div>

                <div>
                  <hr className="border-[1px] border-[#E4E4E4]" />
                </div>

                {/* icon  */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 ">
                  <div className="flex flex-col gap-5  w-[250px]">
                    <i className="fa-solid fa-trowel-bricks text-[#F68A0A] text-5xl"></i>
                    <span className="text-lg font-[600] font-[archivo]">
                      High Quality Materials
                    </span>
                  </div>

                  <div className="flex flex-col gap-5  w-[250px]">
                    <i className="fa-solid fa-headset text-[#F68A0A] text-5xl"></i>
                    <span className="text-lg font-[600] font-[archivo]">
                      24/7 Communications
                    </span>
                  </div>
                </div>

                <div>
                  <hr className="border-[1px] border-[#E4E4E4]" />
                </div>

                <div className="flex space-y-3 md:space-y-4 lg:space-y-0 lg:gap-10 flex-col lg:flex-row">
                  {/* more about us button  */}
                  <div>
                    <button className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-white uppercase">
                      MORE ABOUT Us
                    </button>
                  </div>

                  {/* founder text  */}
                  <div className=" lg:border-[#C4C4C4]  lg:border-l-2 ">
                    <div className="lg:ml-5">
                      <div className="flex flex-row items-center gap-3  w-[250px]">
                        <i className="fa-solid fa-phone text-[#F68A0A] text-5xl"></i>
                        <div>
                          <h2 className="text-sm text-[#4D5765] font-[archivo]">
                            Call Us Anytime
                          </h2>
                          <p className="text-[24px] font-[600] font-[titillium] mt-1">
                            +880 135 773 424
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* image */}
            <div className="flex-1 mt-10 lg:mt-0">
              <div>
                <img
                  className=" w-[550px] lg:w-full h-[450px] object-cover rounded-xl "
                  src={whyChooseUsImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faq section */}
      <div className=" bg-white my-20">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8  ">
          <div className="flex gap-10 justify-between items-start lg:items-center flex-col-reverse lg:flex-row ">
            {/* image and text */}
            <div className="flex-1">
              <div>
                <img
                  className="w-[550px] lg:w-full h-[450px] object-cover rounded-xl "
                  src={faqImage}
                  alt=""
                />
              </div>
            </div>

            {/* text  */}
            <div className=" flex-1">
              <div className="space-y-3 md:space-y-4 ">
                <div className="flex items-center gap-3 mt-10  lg:mt-0">
                  <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] uppercase">
                    FREQUENTLY ASKED QUESTION
                  </h2>
                  <hr className="border-[1px] border-[#F68A0A] w-12" />
                </div>

                <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D]">
                  Last Reviews, Inhabitance Allows, And Project
                </h3>

                <p className="text-base font-[archivo] font-normal text-[#4D5765]">
                  In the initial phases, architects and designers play a crucial
                  role in conceptualizing and designing projects, ensuring they
                  align with both aesthetic and functional requirements.
                </p>

                {/* faq 01  */}
                <div className="space-3 md:space-y-4">
                  <details className="bg-[#F6F6F6] p-4">
                    <summary className="font-[titillium] text-lg font-[600] text-[#0E121D] ">
                      How can I ensure safety on a constru site ?
                    </summary>
                    <div className="mt-3">
                      <span className="font-[archivo] text-base text-[#4D5765] ">
                        Ensuring safety on a construction site is crucial to
                        protect workers, visitors, and the overall success of
                        the project. Here are some key steps to enhance safety
                        on a construction site
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
                        Ensuring safety on a construction site is crucial to
                        protect workers, visitors, and the overall success of
                        the project. Here are some key steps to enhance safety
                        on a construction site
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
                        Ensuring safety on a construction site is crucial to
                        protect workers, visitors, and the overall success of
                        the project. Here are some key steps to enhance safety
                        on a construction site
                      </span>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSection />
      <ContactUsSection />

      {/* blog section */}
      <div className=" bg-white w-full my-20">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8 space-y-3 md:space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <hr className="border-[1px] border-[#F68A0A] w-12" />
            <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">
              Blog
            </h2>
            <hr className="border-[1px] border-[#F68A0A] w-12" />
          </div>

          <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
            Our Construction Blog
          </h3>

          <div className="flex justify-end">
            <button className="uppercase text-sm font-[archivo] font-[600] text-[#0E121D] hover:bg-[#F68A0A] px-3 py-2 hover:text-white transform transition-all duration-300 flex items-center gap-2 border-[1px] hover:border-transparent border-[#4D5765]">
              VIEW ALL
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>
          </div>

          {/* blogs  */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center">
            {/* blog 01  */}
            <div className="p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 ">
              <a href="#">
                <div className=" space-y-3 md:space-y-4">
                  <div className="relative ">
                    {/* image */}
                    <img
                      className="rounded-lg w-full  h-[185px]"
                      src={blogImage}
                      alt=""
                    />

                    <h2 className="bg-[#F68A0A] px-2 py-1 inline absolute w-[180px] transform -translate-x-2/4 left-2/4 top-[95%]   text-white text-sm font-[archivo] font-[500] text-center">
                      Building Construction
                    </h2>
                  </div>

                  <p className="font-[titillium] text-[20px] font-[600]  text-[#0E121D] pt-3 text-center ">
                    We offer comprehensive construction solutions, ensuring
                    quality
                  </p>

                  <div className="flex gap-10 items-center justify-center">
                    <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                      By Admin
                    </p>
                    <div className="flex gap-2 items-center">
                      <i className="fa-regular fa-calendar text-[#7d8794] text-base"></i>
                      <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                        27 May 2024
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* blog 01  */}
            <div className="p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 ">
              <a href="#">
                <div className=" space-y-3 md:space-y-4">
                  <div className="relative ">
                    {/* image */}
                    <img
                      className="rounded-lg w-full  h-[185px]"
                      src={blogImage}
                      alt=""
                    />

                    <h2 className="bg-[#F68A0A] px-2 py-1 inline absolute w-[180px] transform -translate-x-2/4 left-2/4 top-[95%]   text-white text-sm font-[archivo] font-[500] text-center">
                      Building Construction
                    </h2>
                  </div>

                  <p className="font-[titillium] text-[20px] font-[600]  text-[#0E121D] pt-3 text-center ">
                    We offer comprehensive construction solutions, ensuring
                    quality
                  </p>

                  <div className="flex gap-10 items-center justify-center">
                    <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                      By Admin
                    </p>
                    <div className="flex gap-2 items-center">
                      <i className="fa-regular fa-calendar text-[#7d8794] text-base"></i>
                      <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                        27 May 2024
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* blog 01  */}
            <div className="p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 ">
              <a href="#">
                <div className=" space-y-3 md:space-y-4">
                  <div className="relative ">
                    {/* image */}
                    <img
                      className="rounded-lg w-full  h-[185px]"
                      src={blogImage}
                      alt=""
                    />

                    <h2 className="bg-[#F68A0A] px-2 py-1 inline absolute w-[180px] transform -translate-x-2/4 left-2/4 top-[95%]   text-white text-sm font-[archivo] font-[500] text-center">
                      Building Construction
                    </h2>
                  </div>

                  <p className="font-[titillium] text-[20px] font-[600]  text-[#0E121D] pt-3 text-center ">
                    We offer comprehensive construction solutions, ensuring
                    quality
                  </p>

                  <div className="flex gap-10 items-center justify-center">
                    <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                      By Admin
                    </p>
                    <div className="flex gap-2 items-center">
                      <i className="fa-regular fa-calendar text-[#7d8794] text-base"></i>
                      <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                        27 May 2024
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* blog 01  */}
            <div className="p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-500 ">
              <a href="#">
                <div className=" space-y-3 md:space-y-4">
                  <div className="relative ">
                    {/* image */}
                    <img
                      className="rounded-lg w-full  h-[185px]"
                      src={blogImage}
                      alt=""
                    />

                    <h2 className="bg-[#F68A0A] px-2 py-1 inline absolute w-[180px] transform -translate-x-2/4 left-2/4 top-[95%]   text-white text-sm font-[archivo] font-[500] text-center">
                      Building Construction
                    </h2>
                  </div>

                  <p className="font-[titillium] text-[20px] font-[600]  text-[#0E121D] pt-3 text-center ">
                    We offer comprehensive construction solutions, ensuring
                    quality
                  </p>

                  <div className="flex gap-10 items-center justify-center">
                    <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                      By Admin
                    </p>
                    <div className="flex gap-2 items-center">
                      <i className="fa-regular fa-calendar text-[#7d8794] text-base"></i>
                      <p className="text-base font-[archivo] text-[#7d8794] font-normal">
                        27 May 2024
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* call center service section */}
      <div className="bg-[#F8F8F8] w-full">
        <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 ">
          <div className="space-y-3 md:space-y-4">
            {/* text  */}
            <div className="flex items-center gap-3">
              <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] uppercase">
                GET SUPPORT
              </h2>
              <hr className="border-[1px] border-[#F68A0A] w-12" />
            </div>

            <h3 className="text-[36px] lg:text-[48px] text-[#0E121D] font-[titillium] font-[700]">
              Can’t find your desired service? Let us know 24/7 in 16513
            </h3>

            {/* button  */}
            <div className="flex items-center gap-5">
              <a
                href="https://wa.me/+8801886578726"
                className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4  text-[#0E121D] uppercase flex items-center gap-3"
              >
                REQUEST A SERVICE
                <i className="fa-brands fa-whatsapp text-3xl"></i>
              </a>

              <button className="border-[1px] border-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-[#0E121D] uppercase flex items-center gap-2">
                <i className="fa-solid fa-phone"></i>
                16513
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
