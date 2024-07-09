import { Fragment } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";

export default function ManageService() {
  return (
    <Fragment>
      <WrapStyle>
      <div className="max-w-screen-xl mx-auto ">
        <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
          Manage Service
        </h3>

        <div className="p-5 w-full  h-auto bg-white rounded-xl ">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between md:mb-5">
            <div className="flex ring-1 ring-[#EEF3F7] ring-offset-2 w-[250px]  rounded-lg">
              <input
                className="p-3 w-full outline-none px-2"
                type="text"
                placeholder="Search here..."
              />
              <button>
                <i className="fa-solid fa-magnifying-glass text-xl mr-3"></i>
              </button>
            </div>

            <button className="border-2 border-[#2275FC] rounded-xl w-[200px] py-3 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
              <span className="mr-1">
                <i className="fa-solid fa-plus"></i>
              </span>
              Add Service
            </button>
          </div>

          <div className="overflow-auto">
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="bg-[#F8F9FC] ">
                  <td className="text-[#111111] font-[inter] font-[700] text-base p-3   whitespace-nowrap">
                    Image
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
                <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                  <td className=" align-middle p-3">
                    <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                      <img
                        className="w-10 h-12 object-cover rounded-lg"
                        src="./assets/profile.jpg"
                        alt=""
                      />
                    </div>
                  </td>

                  <td className=" p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                    Material Supply
                  </td>

                  <td className=" p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap 2xl:whitespace-normal text-[#5C6573]">
                    Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor
                    sit amet...
                  </td>
                  <td className=" p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap 2xl:whitespace-normal text-[#5C6573]">
                    Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor
                    sit amet...
                  </td>
                  <td className=" p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                    <div className="flex justify-center gap-3">
                      <span className="text-[#22C7A1] font-extrabold">
                        <a href="#">
                          {" "}
                          <i className="fa-regular fa-pen-to-square"></i>
                        </a>
                      </span>

                      <span className="text-[#FF5200] font-extrabold">
                        <a href="#">
                          <i className="fa-solid fa-trash-can"></i>
                        </a>
                      </span>
                    </div>
                  </td>
                </tr>

                

              </tbody>
            </table>
          </div>
        </div>
      </div>
      </WrapStyle>
    </Fragment>
  );
}
