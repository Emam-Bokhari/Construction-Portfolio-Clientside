import { Fragment } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";

export default function AddService() {
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl  mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Add Service
          </h3>

          <div className="bg-white rounded-xl p-4 ">
            <form className="space-y-4">
              {/* service image url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="serviceImageUrl"
                >
                  Service Image Url
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="serviceImageUrl"
                  id=""
                  placeholder="Enter Service Image Url"
                />
              </div>

              {/* service name  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceName"
                >
                  Service Name
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="serviceName"
                  id=""
                  placeholder="Enter Service Name"
                />
                <span className="text-sm text-[#95A3B9] block">
                  Do not exceed 20 characters when entering the service name.
                </span>
              </div>

              {/* service description  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceDescription"
                >
                  Service Description
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <textarea
                  className="border-[1px] border-[#E4E4E4] w-full h-[220px] rounded-lg p-4  outline-none resize-none my-2"
                  name="serviceDescription"
                  placeholder="Enter Service Description"
                ></textarea>
              </div>

              {/* service benefits description  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceDescription"
                >
                  Service Benefits Description
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <textarea
                  className="border-[1px] border-[#E4E4E4] w-full h-[220px] rounded-lg p-4  outline-none resize-none my-2"
                  name="serviceBenefitsDescription"
                  placeholder="Enter Service Benefits Description"
                ></textarea>
              </div>

              {/* add button  */}
              <div>
                <button className="border-2 border-[#2275FC] rounded-xl w-[230px] py-4 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
