import { Fragment } from "react";
import { FaFilePen, FaGears } from "react-icons/fa6";
import { FaBuilding, FaUsers } from "react-icons/fa";

export default function TotalCards({
  totalBlogs,
  totalServices,
  totalProjects,
  totalTeamMembers,
}) {
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* service  */}
        <div className="flex items-center gap-5 bg-white p-5 rounded-xl">
          {/* icon */}
          <div className="bg-[#22C55E] w-12 h-12 flex items-center justify-center rounded-xl">
            <FaGears className="text-2xl text-white" />
          </div>
          {/* text  */}
          <div>
            <p className="text-[#5C6573] font-[inter] font-[500] text-sm">
              Total Services
            </p>
            <p className="text-[#111111] font-[inter] font-[700] text-xl">
              {totalServices?.length}
            </p>
          </div>
        </div>

        {/* team member  */}
        <div className="flex items-center gap-5 bg-white p-5 rounded-xl">
          {/* icon  */}
          <div className="bg-[#FF5200] w-12 h-12 flex items-center justify-center rounded-xl">
            <FaUsers className="text-2xl text-white" />
          </div>
          {/* text  */}
          <div>
            <p className="text-[#5C6573] font-[inter] font-[500] text-sm">
              Total Team Members
            </p>
            <p className="text-[#111111] font-[inter] font-[700] text-xl">
              {totalTeamMembers?.length}
            </p>
          </div>
        </div>

        {/* project  */}
        <div className="flex items-center gap-5 bg-white p-5 rounded-xl">
          {/* icon  */}
          <div className="bg-[#F68A0A] w-12 h-12 flex items-center justify-center rounded-xl">
            <FaBuilding className="text-2xl text-white" />
          </div>
          {/* text  */}
          <div>
            <p className="text-[#5C6573] font-[inter] font-[500] text-sm">
              Total Projects
            </p>
            <p className="text-[#111111] font-[inter] font-[700] text-xl">
              {totalProjects?.length}
            </p>
          </div>
        </div>

        {/* blog */}
        <div className="flex items-center gap-5 bg-white p-5 rounded-xl">
          {/* icon  */}
          <div className="bg-[#2377FC] w-12 h-12 flex items-center justify-center rounded-xl">
            <FaFilePen className="text-2xl text-white" />
          </div>
          {/* text */}
          <div>
            <p className="text-[#5C6573] font-[inter] font-[500] text-sm">
              Total Blogs
            </p>
            <p className="text-[#111111] font-[inter] font-[700] text-xl">
              {totalBlogs?.length}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
