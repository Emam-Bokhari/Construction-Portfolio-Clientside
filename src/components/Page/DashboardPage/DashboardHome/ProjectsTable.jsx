import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProjectTableSkeleton from "../../../skeleton/Dashboard/Home/ProjectTableSkeleton";

export default function ProjectsTable({ projectsData, projectLoading }) {
  return (
    <Fragment>
      {projectLoading ? (
        <ProjectTableSkeleton />
      ) : (
        <div className="p-5 w-full 2xl:w-[30%] h-auto  bg-white rounded-xl ">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[#111111] font-[inter] font-[700] text-xl">
              Projects Gallery
            </h2>

            <Link
              to="/golden@peach@dashboard/manageProject"
              className="text-[#BDC9DB] font-[inter] font-[500] text-sm"
            >
              View All
            </Link>
          </div>

          <div className="overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectsData.slice(0, 12)?.map((project, _id) => (
                <div
                  key={_id}
                  className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2"
                >
                  <img
                    className="w-full h-[70px] object-cover rounded-lg"
                    src={project?.imageUrl}
                    alt="Project Image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
