import { Fragment } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";
import AddButton from "../../../../Dashboard/AddButton";
import Searchbar from "../../../../Dashboard/Searchbar";

export default function ManageBlog() {
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Manage Blog
          </h3>

          <div className="p-5 w-full  h-auto bg-white rounded-xl ">
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between md:mb-5">
              <Searchbar/>

              <AddButton button={"Add Blog"} />
            </div>

            <div className="overflow-auto">
              <table className="w-full border-separate border-spacing-y-3 ">
                <thead>
                  <tr className="bg-[#F8F9FC] ">
                    <td className="text-[#111111] font-[inter] font-[700] text-base p-3   whitespace-nowrap">
                      Image
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Tittle
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Category
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Description
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Publish Date
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Author Name
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base pl-3 p-3  whitespace-nowrap">
                      Action
                    </td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
                  <tr className="bg-white hover:bg-[#EEF3F7] odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <img
                          className="w-10 h-12 object-cover rounded-lg"
                          src="./assets/profile.jpg"
                          alt=""
                        />
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      How to identify best breaks?
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      Building Construction
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-normal text-[#5C6573]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, illum...
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      24-Jun-2024
                    </td>
                    <td className="p-3 align-middle text-base font-[inter] font-[500] whitespace-nowrap text-[#5C6573]">
                      Moshfiqur Rahman
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex justify-center gap-3">
                        <span className="text-[#22C7A1] font-extrabold">
                          <a href="#">
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
