import { Fragment } from "react";
import WrapStyle from "../../Dashboard/WrapStyle";

export default function ManageTestimonialTableSkeleton() {
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Manage Testimonial
          </h3>

          <div className="p-5 w-full h-auto bg-white rounded-xl">
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between md:mb-5">
              {/* Placeholder for Searchbar */}
              <div className="bg-[#EFF4F8] w-1/3 h-10 animate-pulse rounded"></div>

              {/* Placeholder for Add Button */}
              <div className="bg-[#EFF4F8] w-36 h-10 animate-pulse rounded"></div>
            </div>

            <div className="overflow-auto">
              <table className="w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="bg-[#F8F9FC]">
                    <td className="text-[#111111] font-[inter] font-[700] text-base p-3 whitespace-nowrap">
                      Image
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base p-3 whitespace-nowrap">
                      Testimonial Person Name
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base p-3 whitespace-nowrap">
                      Review
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base p-3 whitespace-nowrap">
                      Ratings
                    </td>
                    <td className="text-[#111111] font-[inter] font-[700] text-base p-3 whitespace-nowrap">
                      Action
                    </td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white  odd:bg-[#F8F9FC] cursor-default transform transition-all duration-200">
                    <td className="align-middle p-3">
                      <div className="w-12 h-14 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                        <div className="w-10 h-12 bg-white rounded-lg animate-pulse"></div>
                      </div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-20 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-normal text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-36 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-base font-[inter] font-normal whitespace-nowrap text-[#5C6573]">
                      <div className="bg-[#EFF4F8] w-12 h-4 animate-pulse rounded"></div>
                    </td>

                    <td className="p-3 align-middle text-lg font-[inter] whitespace-nowrap">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-[#EFF4F8] rounded-full animate-pulse"></div>
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
