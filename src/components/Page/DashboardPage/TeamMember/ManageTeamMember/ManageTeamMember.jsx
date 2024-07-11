import { Fragment } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import AddButton from "../../../../Dashboard/AddButton";
import Searchbar from "../../../../Dashboard/Searchbar";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Delete from "./Action/Delete";

export default function ManageTeamMember({
  teamMembersData,
  teamMemberLoading,
}) {
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Manage Team Member
          </h3>

          <div className="p-5 w-full  h-auto bg-white rounded-xl ">
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between md:mb-5">
              <Searchbar />

              <Link to="/dashboard/addTeamMember">
                <AddButton button="Add Team Member" />
              </Link>
            </div>

            <div className="overflow-auto">
              <table className="w-full border-separate border-spacing-y-3 ">
                <thead>
                  <tr className="bg-[#F8F9FC] ">
                    <td className="text-[#111111] font-[inter] font-[700] text-base p-3   whitespace-nowrap">
                      Image
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Team Member Name
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Designation
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Facebook Link
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Twitter Link
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Instagram Link
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Linkedin Link
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Action
                    </td>
                  </tr>
                </thead>

                <tbody>
                  {teamMembersData?.map((teamMember, _id) => (
                    <tr
                      key={_id}
                      className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200"
                    >
                      <td className="align-middle p-3">
                        <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                          <img
                            className="w-10 h-12 object-cover rounded-lg"
                            src={teamMember?.imageUrl}
                            alt=""
                          />
                        </div>
                      </td>

                      <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                        {teamMember?.name}
                      </td>

                      <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                        {teamMember?.designation}
                      </td>

                      <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                        <a
                          href="https://www.facebook.com/emambokhari99/"
                          className="break-all"
                        >
                          {teamMember?.facebookSocialLink}
                        </a>
                      </td>
                      <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                        <a
                          href="https://www.facebook.com/emambokhari99/"
                          className="break-all"
                        >
                          {teamMember?.twitterSocialLink}
                        </a>
                      </td>
                      <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                        <a
                          href="https://www.facebook.com/emambokhari99/"
                          className="break-all"
                        >
                          {teamMember?.instagramSocialLink}
                        </a>
                      </td>
                      <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                        <a
                          href="https://www.facebook.com/emambokhari99/"
                          className="break-all"
                        >
                          {teamMember?.linkedinSocialLink}
                        </a>
                      </td>

                      <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                        <div className="flex justify-center gap-3">
                          <span className="text-[#22C7A1] font-extrabold">
                            <Link
                              to={`/dashboard/updateTeamMember/${teamMember._id}`}
                            >
                              <FaPen />
                            </Link>
                          </span>

                          <Delete id={teamMember._id} />
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
    </Fragment>
  );
}
