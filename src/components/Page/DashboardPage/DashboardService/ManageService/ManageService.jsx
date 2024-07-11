import { Fragment } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import AddButton from "../../../../Dashboard/AddButton";
import Searchbar from "../../../../Dashboard/Searchbar";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Delete from "./Action/Delete";

export default function ManageService({ servicesData, serviceLoading }) {
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Manage Service
          </h3>

          <div className="p-5 w-full  h-auto bg-white rounded-xl ">
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between md:mb-5">
              <Searchbar />

              <Link to="/dashboard/addService">
                <AddButton button="Add Service" />
              </Link>
            </div>

            <div className="overflow-auto">
              <table className="w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="bg-[#F8F9FC] ">
                    <td className="text-[#111111] font-[inter] font-[700] text-base p-3   whitespace-nowrap">
                      Image
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Service No
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Service Name
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Service Description
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Service Benefits Description
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Action
                    </td>
                  </tr>
                </thead>

                <tbody>
                  {servicesData?.map((service) => (
                    <tr
                      key={service._id}
                      className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200"
                    >
                      <td className=" align-middle p-3">
                        <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                          <img
                            className="w-10 h-12 object-cover rounded-lg"
                            src={service?.imageUrl}
                            alt=""
                          />
                        </div>
                      </td>

                      <td className=" p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                        {service?.serviceNo}
                      </td>

                      <td className=" p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                        {service?.serviceName}
                      </td>

                      <td className=" p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap 2xl:whitespace-normal text-[#5C6573]">
                        {service?.serviceDescription}
                      </td>
                      <td className=" p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap 2xl:whitespace-normal text-[#5C6573]">
                        {service?.serviceBenefitsDescription}
                      </td>
                      <td className=" p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                        <div className="flex justify-center gap-3">
                          <span className="text-[#22C7A1] font-extrabold">
                            <a href="#">
                              <FaPen />
                            </a>
                          </span>

                          <Delete id={service._id} />
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
