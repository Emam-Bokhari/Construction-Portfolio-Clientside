import { Fragment } from "react";
import logo from "../../assets/logo/logo.png"
import { IoGridSharp, IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBlog, FaChevronDown, FaComments, FaImages } from "react-icons/fa";

export default function DashboardHeader() {
  return (
    <Fragment>
      {/* start navbar  */}
      <nav>
        <div>
          <span
            onClick="openBar()"
            className="text-3xl cursor-pointer text-black absolute top-4 left-4"
          >
            <i className="fa-solid fa-bars"></i>
          </span>

          <div className="absolute top-5 left-14">
            <h2 className="font-[inter] text-2xl font-bold">GoldenPeach</h2>
          </div>

          <div className="sidebar bg-white w-[300px] duration-1000 h-screen fixed lg:left-0 left-[-300px] top-0 overflow-y-auto px-5 py-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div>
                  <img
                className=" w-16 h-16 object-contain"
                src={logo}
                loading="lazy"
                alt=""
              />
                  </div>
                  <div>
                    <h2 className="font-[inter] text-2xl font-bold">
                      GoldenPeach
                    </h2>
                  </div>
                </div>
              </div>

              <div onClick="openBar()" className="block lg:hidden">
                <i className="fa-regular fa-circle-xmark text-2xl"></i>
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
                href="./index.html"
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
                      onClick="serviceDropDown()"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                      <IoSettingsSharp className="text-2xl" />
                        <span className="text-base font-[500]">Service</span>
                      </div>

                      <span id="serviceArrow">
                      <FaChevronDown/>
                      </span>
                    </div>
                  </div>

                  <ul
                    id="serviceSubMenu"
                    className="w-4/5 mx-auto mt-5 hidden list-disc list-inside"
                  >
                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                      href="./add-service.html"
                    >
                      <li>Add Service</li>
                    </Link>

                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                      href="./service-list.html"
                    >
                      <li>Service List</li>
                    </Link>
                  </ul>
                </li>

                {/* team member  */}
                <li>
                  <div className="w-full px-3 py-4 rounded-xl block bg-[#E9F1FF] text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 cursor-pointer">
                    <div
                      onClick="teamMemberDropDown()"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                      <FaPeopleGroup className="text-2xl" />
                        <span className="text-base font-[500]">
                          Team Member
                        </span>
                      </div>

                      <span id="teamMemberArrow">
                      <FaChevronDown/>
                      </span>
                    </div>
                  </div>

                  <ul
                    id="teamMemberSubMenu"
                    className="w-4/5 mx-auto mt-5 hidden list-disc list-inside"
                  >
                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                      href="./add-team-member.html"
                    >
                      <li>Add Team Member</li>
                    </Link>

                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                      href="./team-member-list.html"
                    >
                      <li>Team Member List</li>
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
                      onClick="projectDropDown()"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <FaImages className="text-2xl" />
                        <span className="text-base font-[500]">Project</span>
                      </div>

                      <span id="projectArrow">
                      <FaChevronDown/>
                      </span>
                    </div>
                  </div>

                  <ul
                    id="projectSubMenu"
                    className="w-4/5 mx-auto mt-5 hidden list-disc list-inside"
                  >
                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                      href="./add-project.html"
                    >
                      <li>Add Project</li>
                    </Link>

                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                      href="./add-project-list.html"
                    >
                      <li>Project List</li>
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
                      onClick="testimonialDropDown()"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <FaComments className="text-2xl" />
                        <span className="text-base font-[500]">
                          Testimonial
                        </span>
                      </div>

                      <span id="testimonialArrow">
                      <FaChevronDown/>
                      </span>
                    </div>
                  </div>

                  <ul
                    id="testimonialSubMenu"
                    className="w-4/5 mx-auto mt-5 hidden list-disc list-inside"
                  >
                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                      href="./add-testimonial.html"
                    >
                      <li>Add Testimonial</li>
                    </Link>

                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                      href="./testimonial-list.html"
                    >
                      <li>Testimonial List</li>
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
                      onClick="blogDropDown()"
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <FaBlog className="text-2xl" />
                        <span className="text-base font-[500]">Blog</span>
                      </div>

                      <span id="blogArrow">
                        <FaChevronDown/>
                      </span>
                    </div>
                  </div>

                  <ul
                    id="blogSubMenu"
                    className="w-4/5 mx-auto mt-5 hidden list-disc list-inside"
                  >
                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300"
                      href="./add-blog.html"
                    >
                      <li>Add Blog</li>
                    </Link>

                    <Link
                      className="block text-[#111111] hover:text-[#2E7EFD] transition-all duration-300 mt-3"
                      href="./blog-list.html"
                    >
                      <li>Blog List</li>
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
                <Link
                  href="https://www.facebook.com/emambokhari99/"
                  className="border-[1px] border-[#E4E4E4] w-10 h-10 flex items-center justify-center rounded-lg text-lg text-[#BDC9DB] hover:text-[#2275FC] transition-all duration-300"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                {/* github */}
                <Link
                  href="https://github.com/Emam-Bokhari"
                  className="border-[1px] border-[#E4E4E4] w-10 h-10 flex items-center justify-center rounded-lg text-lg text-[#BDC9DB] hover:text-[#2275FC] transition-all duration-300"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
                {/* whats app  */}
                <Link
                  href="https://wa.me/+08801315773424"
                  className="border-[1px] border-[#E4E4E4] w-10 h-10 flex items-center justify-center rounded-lg text-lg text-[#BDC9DB] hover:text-[#2275FC] transition-all duration-300"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
                {/* twitter  */}
                <Link
                  href="#"
                  className="border-[1px] border-[#E4E4E4] w-10 h-10 flex items-center justify-center rounded-lg text-lg text-[#BDC9DB] hover:text-[#2275FC] transition-all duration-300"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
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
              <i className="fa-solid fa-magnifying-glass text-xl mr-3"></i>
            </button>
          </div>
          {/* end search box  */}

          <div className="flex items-center gap-5">
            {/* start moon  */}
            <div className="bg-[#EFF2F6] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <i className="fa-regular fa-moon text-lg"></i>
            </div>
            {/* end moon  */}

            {/* start message  */}
            <div className="bg-[#EFF2F6] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <i className="fa-regular fa-envelope text-lg"></i>
            </div>
            {/* end message  */}

            {/* start notification  */}
            <div className="bg-[#EFF2F6] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <i className="fa-regular fa-bell text-lg"></i>
            </div>
            {/* end notification  */}

            {/* start profile  */}
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="./assets/profile.jpg"
                  alt=""
                />
              </div>

              <div className="leading-3">
                <p className="text-[#111111] font-[inter] font-[700] text-base">
                  Emam Bokhari
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
    </Fragment>
  );
}
