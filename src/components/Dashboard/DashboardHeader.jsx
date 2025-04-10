import { Fragment, useState } from "react";
import logo from "../../assets/logo/logo.png";
import adminImage from "../../assets/aboutUs-image/moniruzzaman-profile-image.jpg"
import { IoGridSharp, IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  FaCircleXmark,
  FaMagnifyingGlass,
  FaPeopleGroup,
} from "react-icons/fa6";
import {
  FaBars,
  FaBell,
  FaBlog,
  FaChevronDown,
  FaComments,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHome,
  FaImages,
  FaMoon,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function DashboardHeader() {
  const [showMenuBar, setShowMenuBar] = useState(false)

  const [showSubMenu, SetShowSubMenu] = useState({
    service: false,
    teamMember: false,
    project: false,
    testimonial: false,
    blog: false,
  });

  const onToggleSubMenu = (menu) => {
    SetShowSubMenu({
      [menu]: !showSubMenu[menu],
    });
  };

  

  return (
    <Fragment>
      <header>
        {/* start navbar  */}
        <nav>
          <div>
            <span
              onClick={()=>setShowMenuBar(!showMenuBar)}
              className="text-3xl cursor-pointer text-black absolute top-4 left-4"
            >
              <FaBars />
            </span>

            <div className="absolute top-5 left-14 ">
              <h2 className="font-[inter] text-2xl font-bold">GoldenPeach</h2>
            </div>

            <div className={`sidebar bg-white w-[300px] z-50 duration-1000 h-screen fixed lg:left-0 left-[-300px] top-0 overflow-y-auto px-5 py-3 ${showMenuBar?"left-[1px]":""}`}>
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/">
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          className=" w-16 h-16 object-contain"
                          src={logo}
                          loading="lazy"
                          alt="Logo"
                        />
                      </div>
                      <div>
                        <h2 className="font-[inter] text-2xl font-bold ">
                          GoldenPeach
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>

                <div onClick={()=>setShowMenuBar(!showMenuBar)} className="block lg:hidden">
                  <FaCircleXmark className="text-2xl" />
                </div>
              </div>

              <div className="my-5">
                <hr className="border-[1px] border-[#E4E4E4]" />
              </div>

              {/* start main home  */}
              <div>
                <p className="text-[#BDC9DB] text-[12px] font-[inter] font-bold uppercase">
                  MAIN HOME
                </p>

                <Link
                  className="w-full px-3 py-4 rounded-xl block bg-[#E9F1FF] text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 my-5"
                  to="/"
                >
                  <div className="flex items-center gap-3">
                    <FaHome className="text-2xl" />
                    <span className="text-base font-[500]">Home</span>
                  </div>
                </Link>
              </div>
              {/* start main home  */}
              <div>
                <p className="text-[#BDC9DB] text-[12px] font-[inter] font-bold uppercase">
                  DASHBOARD HOME
                </p>

                <Link
                  className="w-full px-3 py-4 rounded-xl block bg-[#E9F1FF] text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 my-5"
                  to="/golden@peach@dashboard"
                >
                  <div className="flex items-center gap-3">
                    <IoGridSharp className="text-2xl" />
                    <span className="text-base font-[500]">Dashboard</span>
                  </div>
                </Link>
              </div>
              {/* end main home  */}

              {/* start all page */}
              <div>
                <div className="my-5">
                  <p className="text-[#BDC9DB] text-[12px] font-[inter] font-bold uppercase">
                    ALL PAGE
                  </p>
                </div>

                <ul className="space-y-5">
                  {/* service  */}
                  <li>
                    <div
                      className="w-full  px-3 py-4 rounded-xl block bg-[#E9F1FF] text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 cursor-pointer"
                      href="#"
                    >
                      <div
                        onClick={() => onToggleSubMenu("service")}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <IoSettingsSharp className="text-2xl" />
                          <span className="text-base font-[500]">Service</span>
                        </div>

                        <span
                          className={`${
                            showSubMenu?.service ? "rotate-180" : ""
                          }`}
                        >
                          <FaChevronDown />
                        </span>
                      </div>
                    </div>

                    <ul
                      className={`w-4/5 mx-auto mt-5 list-disc list-inside ${
                        showSubMenu?.service ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                        to="/golden@peach@dashboard/addService"
                      >
                        <li>Add Service</li>
                      </Link>

                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                        to="/golden@peach@dashboard/manageService"
                      >
                        <li>Manage Service</li>
                      </Link>
                    </ul>
                  </li>

                  {/* team member  */}
                  <li>
                    <div className="w-full px-3 py-4 rounded-xl block bg-[#E9F1FF] text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 cursor-pointer">
                      <div
                        onClick={() => onToggleSubMenu("teamMember")}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <FaPeopleGroup className="text-2xl" />
                          <span className="text-base font-[500]">
                            Team Member
                          </span>
                        </div>

                        <span id="teamMemberArrow">
                          <FaChevronDown />
                        </span>
                      </div>
                    </div>

                    <ul
                      className={`w-4/5 mx-auto mt-5 list-disc list-inside ${
                        showSubMenu?.teamMember ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                        to="/golden@peach@dashboard/addTeamMember"
                      >
                        <li>Add Team Member</li>
                      </Link>

                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                        to="/golden@peach@dashboard/manageTeamMember"
                      >
                        <li>Manage Team Member</li>
                      </Link>
                    </ul>
                  </li>

                  {/* project  */}
                  <li>
                    <div
                      className="w-full px-3 py-4 rounded-xl block bg-[#E9F1FF] text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 cursor-pointer"
                      href="#"
                    >
                      <div
                        onClick={() => onToggleSubMenu("project")}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <FaImages className="text-2xl" />
                          <span className="text-base font-[500]">Project</span>
                        </div>

                        <span>
                          <FaChevronDown />
                        </span>
                      </div>
                    </div>

                    <ul
                      className={`w-4/5 mx-auto mt-5 list-disc list-inside ${
                        showSubMenu?.project ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                        to="/golden@peach@dashboard/addProject"
                      >
                        <li>Add Project</li>
                      </Link>

                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                        to="/golden@peach@dashboard/manageProject"
                      >
                        <li>Manage Project</li>
                      </Link>
                    </ul>
                  </li>

                  {/* testimonial  */}
                  <li>
                    <div
                      className="w-full px-3 py-4  rounded-xl block bg-[#E9F1FF] text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 cursor-pointer"
                      href="#"
                    >
                      <div
                        onClick={() => onToggleSubMenu("testimonial")}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <FaComments className="text-2xl" />
                          <span className="text-base font-[500]">
                            Testimonial
                          </span>
                        </div>

                        <span id="testimonialArrow">
                          <FaChevronDown />
                        </span>
                      </div>
                    </div>

                    <ul
                      className={`w-4/5 mx-auto mt-5 list-disc list-inside ${
                        showSubMenu?.testimonial ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                        to="/golden@peach@dashboard/addTestimonial"
                      >
                        <li>Add Testimonial</li>
                      </Link>

                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                        to="/golden@peach@dashboard/manageTestimonial"
                      >
                        <li>Manage Testimonial</li>
                      </Link>
                    </ul>
                  </li>

                  {/* blog  */}
                  <li>
                    <div
                      className="w-full px-3 py-4  rounded-xl block bg-[#E9F1FF] text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 cursor-pointer"
                      href="#"
                    >
                      <div
                        onClick={() => onToggleSubMenu("blog")}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <FaBlog className="text-2xl" />
                          <span className="text-base font-[500]">Blog</span>
                        </div>

                        <span id="blogArrow">
                          <FaChevronDown />
                        </span>
                      </div>
                    </div>

                    <ul
                      className={`w-4/5 mx-auto mt-5 list-disc list-inside ${
                        showSubMenu?.blog ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                        to="/golden@peach@dashboard/addBlog"
                      >
                        <li>Add Blog</li>
                      </Link>

                      <Link
                        className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                        to="/golden@peach@dashboard/manageBlog"
                      >
                        <li>Manage Blog</li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* end all page  */}

              {/* start connect us  */}
              <div>
                <div className="my-5">
                  <p className="text-[#BDC9DB] text-[12px] font-[inter] font-bold uppercase">
                    CONNECT US
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* facebook */}
                  <a
                    href="https://www.facebook.com/emambokhari99/"
                    className="border-[1px] border-[#E4E4E4] w-10 h-10 flex items-center justify-center rounded-lg text-lg text-[#BDC9DB] hover:text-[#2275FC] transition-all duration-300"
                  >
                    <FaFacebook />
                  </a>
                  {/* github */}
                  <a
                    href="https://github.com/Emam-Bokhari"
                    className="border-[1px] border-[#E4E4E4] w-10 h-10 flex items-center justify-center rounded-lg text-lg text-[#BDC9DB] hover:text-[#2275FC] transition-all duration-300"
                  >
                    <FaGithub />
                  </a>
                  {/* whats app  */}
                  <a
                    href="https://wa.me/+08801315773424"
                    className="border-[1px] border-[#E4E4E4] w-10 h-10 flex items-center justify-center rounded-lg text-lg text-[#BDC9DB] hover:text-[#2275FC] transition-all duration-300"
                  >
                    <FaWhatsapp />
                  </a>
                  {/* twitter  */}
                  <a
                    href="#"
                    className="border-[1px] border-[#E4E4E4] w-10 h-10 flex items-center justify-center rounded-lg text-lg text-[#BDC9DB] hover:text-[#2275FC] transition-all duration-300"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
              {/* end connect us  */}
            </div>
          </div>
        </nav>
        {/* end navbar  */}

        {/* start top navbar  */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between px-5 py-4 ml-0 lg:ml-[300px] bg-[#FDFDFD]">
            {/* start search box  */}
            <div className="flex ring-1 ring-[#EEF3F7] ring-offset-2 w-[500px] 2xl:w-[750px] rounded-lg">
              <input
                className="p-3 w-full outline-none px-2"
                type="text"
                placeholder="Search..."
              />
              <button>
                <FaMagnifyingGlass className="text-xl mr-3" />
              </button>
            </div>
            {/* end search box  */}

            <div className="flex items-center gap-5">
              {/* start moon  */}
              <div className="bg-[#EFF2F6] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaMoon className="text-lg" />
              </div>
              {/* end moon  */}

              {/* start message  */}
              <div className="bg-[#EFF2F6] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaEnvelope className="text-lg" />
              </div>
              {/* end message  */}

              {/* start notification  */}
              <div className="bg-[#EFF2F6] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                <FaBell className="text-lg" />
              </div>
              {/* end notification  */}

              {/* start profile  */}
              <div className="flex items-center gap-3">
                <div>
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={adminImage}
                    alt="Admin Profile Image"
                  />
                </div>

                <div className="leading-3">
                  <p className="text-[#111111] font-[inter] font-[700] text-base">
                    Md. Moniruzzaman
                  </p>

                  <span className="text-[#BDC9DB] font-[inter] text-sm font-[500]">
                    Admin
                  </span>
                </div>
              </div>
              {/* end profile  */}
            </div>
          </div>
        </div>
        {/* end top navbar  */}
        <nav />
      </header>
    </Fragment>
  );
}
