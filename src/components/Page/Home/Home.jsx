import { Fragment } from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import whyChooseUsImage from "../../../assets/why-choose-us-image/why-choose-us.jpg";
import faqImage from "../../../assets/faq-image/faq-01.jpg";
import aboutUsImage from "../../../assets/aboutUs-image/aboutus-profile.jpg";
import projectBackgroundImage from "../../../assets/background-effects/latest-projects-bg-effect.png";
import teamMemberBackgroundImage from "../../../assets/background-effects/our-team-bg-effect.jpg";
import Banner from "../../Header/Banner";
import AboutUsSection from "../../AboutUsSection";
import WorkProcessSection from "../../WorkProcessSection";
import ProjectCompletationCount from "../../ProjectCompletationCount";
import TestimonialSection from "../../TestimonialSection";
import ContactUsSection from "../../ContactUsSection";
import GetFreeConsultation from "../../GetFreeConsultation";
import { IoIosCheckmarkCircle } from "react-icons/io";
import MoreAboutUsButton from "../../MoreAboutUsButton";
import { Link } from "react-router-dom";
import useService from "../../../hooks/useService";
import useTeamMember from "../../../hooks/useTeamMember";
import useProject from "../../../hooks/useProject";
import useBlog from "../../../hooks/useBlog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  // fetch data
  const { services } = useService();
  const { teamMembers } = useTeamMember();
  const { projects } = useProject();
  const { blogs } = useBlog();

  const projectBackground = {
    backgroundImage: `url(${projectBackgroundImage})`,
  };
  const teamMemberBackground = {
    backgroundImage: `url(${teamMemberBackgroundImage})`,
  };
  //  slider react slick
  const teamMemberSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projectSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <Banner />
      <AboutUsSection />
      {/* About us section */}
      <div className=" bg-white my-20">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8  ">
          <div className="flex gap-0 lg:gap-10 justify-between items-start lg:items-center flex-col lg:flex-row">
            {/* image and text */}
            <div className="flex-1">
              <div>
                <img
                  className="w-[550px] lg:w-full h-[450px] object-cover rounded-xl "
                  src={aboutUsImage}
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>

            {/* text */}
            <div className=" flex-1">
              <div className="space-y-3 md:space-y-4 ">
                <div className="flex items-center gap-3 mt-10  lg:mt-0">
                  <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] ">
                    ABOUT US COMPANY
                  </h2>
                  <hr className="border-[1px] border-[#F68A0A] w-12" />
                </div>

                <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D]">
                  We Are Always Think On Your Dream
                </h3>

                <p className="text-base font-[archivo] font-normal text-[#4D5765]">
                  Many modern construction companies focus on sustainable
                  building practices, incorporating eco-friendly material
                  energy-efficient systems and environmental conscious designs
                  to reduce the environmental impact of their projects.
                </p>

                {/* icon 1  */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                  <div className="flex items-center gap-2 w-[250px]">
                    <IoIosCheckmarkCircle className="fa-solid fa-circle-check text-[#F68A0A] text-2xl" />
                    <span className="text-lg font-[600] font-[archivo]">
                      We provide 24/7 service
                    </span>
                  </div>

                  <div className="flex items-center gap-2  w-[250px]">
                    <IoIosCheckmarkCircle className="fa-solid fa-circle-check text-[#F68A0A] text-2xl" />
                    <span className="text-lg font-[600] font-[archivo]">
                      Greate Technology
                    </span>
                  </div>
                </div>

                {/* icon 2  */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 ">
                  <div className="flex items-center gap-2  w-[250px]">
                    <IoIosCheckmarkCircle className="fa-solid fa-circle-check text-[#F68A0A] text-2xl" />
                    <span className="text-lg font-[600] font-[archivo]">
                      Qualified Agents
                    </span>
                  </div>

                  <div className="flex items-center gap-2  w-[250px]">
                    <IoIosCheckmarkCircle className="fa-solid fa-circle-check text-[#F68A0A] text-2xl" />
                    <span className="text-lg font-[600] font-[archivo]">
                      11 Years Experiance
                    </span>
                  </div>
                </div>

                <div className="flex space-y-3 md:space-y-4 lg:space-y-0 lg:gap-10 flex-col lg:flex-row">
                  {/* more about us button */}
                  <MoreAboutUsButton />

                  {/* founder text  */}
                  <div className=" lg:border-[#C4C4C4]  lg:border-l-2 ">
                    <div className="lg:ml-5">
                      <p className=" text-[20px] font-[titillium] font-[600]">
                        Emam Bokhari
                      </p>
                      <span className="font-[archivo] text-base  font-normal text-[#F68A0A]">
                        Founder of Dreams Construction
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service section */}
      <div className="bg-[url('./assets/background-effects/bg-effect-service.png')] bg-no-repeat bg-cover w-full my-20">
        <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8">
          {/* text  */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <hr className="border-[1px] border-[#F68A0A] w-12" />
              <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">
                OUR SERVICES
              </h2>
              <hr className="border-[1px] border-[#F68A0A] w-12" />
            </div>

            <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
              The Best Service For You
            </h3>

            <div className="flex justify-end">
              <Link
                to="/service"
                className="uppercase text-sm font-[archivo] font-[600] text-[#0E121D] hover:bg-[#F68A0A] px-3 py-2 hover:text-white transform transition-all duration-300 flex items-center gap-2 border-[1px] hover:border-transparent border-[#4D5765]"
              >
                VIEW ALL
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>

          {/* start card  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-3 md:mt-4 ">
            {services.slice(0, 3)?.map((service, _id) => (
              <div
                key={_id}
                className="bg-white p-6 space-y-3 md:space-y-4 xl:space-y-6"
              >
                <div className="flex items-center justify-between">
                  {/* icon  */}
                  <img className="w-12 h-12" src={service?.iconUrl} loading="lazy" alt="" />
                  <span className="text-[20px] text-[#4D5765] font-[titillium] font-[600]">
                    {service?.serviceNo}
                  </span>
                </div>

                <div>
                  <hr className="border-[1px] border-[#E4E4E4]" />
                </div>

                {/* text  */}
                <h2 className="font-[titillium] font-[600] text-[20px] lg:text-[24px] text-[#0E121D]">
                  {service?.serviceName}
                </h2>
                <p className="font-[archivo] text-base text-[#4D5765]">
                  {service?.serviceDescription.length > 10
                    ? `${service?.serviceDescription.substring(0, 80)}...`
                    : service?.serviceDescription}
                </p>
                {/* read more button */}
                <Link
                  to={`/serviceDetails/${service._id}`}
                  className="uppercase text-sm font-[archivo] font-[600] text-[#0E121D] hover:text-[#F68A0A] transform transition-all duration-200 flex items-center gap-2"
                >
                  READ MORE
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            ))}

            {/* end card 03  */}
          </div>
          {/* end card  */}
        </div>
      </div>
      <WorkProcessSection />
      <div className="relative">
        <GetFreeConsultation />
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
            <div>
              <Slider {...projectSliderSettings}>
                {projects?.map((project, _id) => (
                  <div key={_id}>
                    <img
                      className="w-full h-[300px] lg:w-[500px] md:h-[400px] object-cover"
                      src={project.imageUrl}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                ))}
              </Slider>
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
          <div>
            <Slider {...teamMemberSliderSettings}>
              {teamMembers?.map((teamMember, _id) => (
                <div
                  key={_id}
                  className="w-full  space-y-2 pb-4 bg-white shadow-sm"
                >
                  {/* image  */}
                  <img
                    className="w-full h-[300px] lg:h-[320px] xl:h-[265px] object-cover"
                    src={teamMember?.imageUrl}
                    loading="lazy"
                    alt=""
                  />

                  {/* text  */}
                  <h2 className="font-[titillium] text-[24px] font-[600] text-center">
                    {teamMember?.name}
                  </h2>
                  <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                    {teamMember?.designation}
                  </p>

                  {/* social icons  */}
                  <div className="flex items-center justify-center gap-3">
                    {/* facebook  */}
                    <Link to={teamMember?.facebookSocialLink}>
                      <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                        <FaFacebook className="text-base" />
                      </div>
                    </Link>

                    {/* twitter */}
                    <Link to={teamMember?.twitterSocialLink}>
                      <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1DA1F2] transform transition-all duration-300 text-black hover:text-white">
                        <FaTwitter className="text-base" />
                      </div>
                    </Link>

                    {/* instagram  */}
                    <Link to={teamMember?.instagramSocialLink}>
                      <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#e56969] transform transition-all duration-300 text-black hover:text-white">
                        <FaInstagram className="text-base" />
                      </div>
                    </Link>

                    {/* linkedin  */}
                    <Link to={teamMember?.linkedinSocialLink}>
                      <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#0077B5] transform transition-all duration-300 text-black hover:text-white">
                        <FaLinkedin className="text-base" />
                      </div>
                    </Link>
                  </div>
                  {/* end social icon  */}
                </div>
              ))}
            </Slider>
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
                    <Link
                      to="/aboutUs"
                      className="bg-[#F68A0A] block hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-white uppercase"
                    >
                      MORE ABOUT Us
                    </Link>
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
                  loading="lazy"
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
                  loading="lazy"
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
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* blogs  */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center">
            {blogs.slice(0, 4)?.map((blog, _id) => (
              <div
                key={_id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              >
                <Link to={`blogDetails/${blog._id}`}>
                  <img className="rounded-t-lg" 
                  src={blog?.imageUrl}
                  loading="lazy"
                  alt="" />
                </Link>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog?.title.length > 10
                      ? `${blog?.title.substring(0, 35)}...`
                      : blog?.title}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {blog?.description}
                  </p>

                  <Link
                    to={`blogDetails/${blog._id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F68A0A] rounded-lg hover:bg-[#ee8404] focus:ring-4 focus:outline-none focus:ring-blue-300   "
                  >
                    Read more
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
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
              <Link
                to="https://wa.me/+8801886578726"
                className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4  text-[#0E121D] uppercase flex items-center gap-3"
              >
                REQUEST A SERVICE
                <FaWhatsapp className="text-3xl" />
              </Link>

              <button className="border-[1px] border-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-[#0E121D] uppercase flex items-center gap-2">
                <FaPhone />
                16513
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
