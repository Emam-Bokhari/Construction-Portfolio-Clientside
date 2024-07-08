import { Fragment } from "react";
import CommonPageBanner from "../../CommonPageBanner";
import aboutUsImage from "../../../assets/aboutUs-image/aboutus-profile.jpg";
import WorkProcessSection from "../../WorkProcessSection";
import ProjectCompletationCount from "../../ProjectCompletationCount";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import useTeamMember from "../../../hooks/useTeamMember";
import AboutUsTeamMemberSkeleton from "../../skeleton/AboutUsTeamMemberSkeleton";

export default function AboutUs() {
  // fetch data
  const { teamMembers, teamMemberLoading } = useTeamMember();

  return (
    <Fragment>
      <CommonPageBanner heading="About Us" title="Home | About Us" />
      {/* about us section */}
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

                <div>
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
          {teamMemberLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AboutUsTeamMemberSkeleton />
              <AboutUsTeamMemberSkeleton />
              <AboutUsTeamMemberSkeleton />
              <AboutUsTeamMemberSkeleton />
              <AboutUsTeamMemberSkeleton />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers?.map((teamMember, _id) => (
                <div
                  key={_id}
                  className="w-full  space-y-2 bg-white shadow-sm p-4 rounded-md"
                >
                  {/* image  */}
                  <div className="flex justify-center">
                    <img
                      className="w-[80px] h-[80px] object-cover rounded-full ring-1 ring-[#F68A0A] ring-offset-2"
                      src={teamMember?.imageUrl}
                      loading="lazy"
                      alt=""
                    />
                  </div>

                  <div>
                    {/* text  */}
                    <h2 className="font-[titillium] text-[20px] font-[600] text-center">
                      {teamMember?.name}
                    </h2>
                    <p className="font-[archivo] text-base font-[500] text-[#F68A0A] text-center">
                      {teamMember?.designation}
                    </p>
                  </div>

                  {/* social icons  */}
                  <div className="flex justify-center items-center gap-3">
                    {/* facebook  */}
                    <a href={teamMember?.facebookSocialLink}>
                      <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1877F2] transform transition-all duration-300 text-black hover:text-white">
                        <FaFacebook className="text-base" />
                      </div>
                    </a>

                    {/* twitter  */}
                    <a href={teamMember?.twitterSocialLink}>
                      <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#1DA1F2] transform transition-all duration-300 text-black hover:text-white">
                        <FaTwitter className="text-base" />
                      </div>
                    </a>

                    {/* instagram  */}
                    <a href={teamMember?.instagramSocialLink}>
                      <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#e56969] transform transition-all duration-300 text-black hover:text-white">
                        <FaInstagram className="text-base" />
                      </div>
                    </a>

                    {/* linkedin  */}
                    <a href={teamMember?.linkedinSocialLink}>
                      <div className="bg-[#E4E4E4] w-6 h-6 rounded-full flex justify-center items-center hover:bg-[#0077B5] transform transition-all duration-300 text-black hover:text-white">
                        <FaLinkedin className="text-base" />
                      </div>
                    </a>
                  </div>
                  {/* end social icon  */}
                </div>
              ))}
            </div>
          )}

          {/* ends cards  */}
        </div>
      </div>
    </Fragment>
  );
}
