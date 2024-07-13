import { Fragment } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import AddButton from "../../../../Dashboard/AddButton";
import Searchbar from "../../../../Dashboard/Searchbar";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Delete from "./Action/Delete";
import ManageProjectTableSkeleton from "../../../../skeleton/Dashboard/ManageProjectTableSkeleton";

export default function ManageProject({ projectsData, projectLoading }) {
  return (
    <Fragment>
      {projectLoading ? (
        <ManageProjectTableSkeleton />
      ) : (
        <WrapStyle>
          <div className="max-w-screen-xl mx-auto ">
            <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
              Manage Project
            </h3>

            <div className="p-5 w-full  h-auto bg-white rounded-xl ">
              <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between md:mb-5">
                <Searchbar />

                <Link to="/golden@peach@dashboard/addProject">
                  <AddButton button="Add Project" />
                </Link>
              </div>

              <div className="overflow-auto">
                <table className="w-full border-separate border-spacing-y-3 ">
                  <thead>
                    <tr className="bg-[#F8F9FC] ">
                      <td className="text-[#111111] font-[inter] font-[700] text-base p-3   whitespace-nowrap">
                        Image
                      </td>

                      <td className="text-[#111111] font-[inter] font-[700] text-end text-base  p-3  whitespace-nowrap">
                        Action
                      </td>
                    </tr>
                  </thead>

                  <tbody>
                    {projectsData?.map((project, _id) => (
                      <tr
                        key={_id}
                        className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200"
                      >
                        <td className="align-middle p-3 ">
                          <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                            <img
                              className="w-10 h-12 object-cover rounded-lg"
                              src={project?.imageUrl}
                              alt="Project Image"
                            />
                          </div>
                        </td>

                        <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                          <div className="flex justify-end gap-3">
                            <span className="text-[#22C7A1] font-extrabold">
                              <Link
                                to={`/golden@peach@dashboard/updateProject/${project._id}`}
                              >
                                <FaPen />
                              </Link>
                            </span>

                            <Delete id={project._id} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </WrapStyle>
      )}
    </Fragment>
  );
}
