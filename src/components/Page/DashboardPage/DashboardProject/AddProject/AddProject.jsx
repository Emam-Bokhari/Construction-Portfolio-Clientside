import { Fragment } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";

export default function AddProject() {
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl  mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Add Project
          </h3>

          <div className="bg-white rounded-xl p-4 ">
            <form className="space-y-4">
              {/* project image url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="projectImageUrl"
                >
                  Project Image Url{" "}
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="projectImageUrl"
                  id=""
                  placeholder="Enter Project Image Url"
                />
              </div>

              {/* add button  */}
              <div>
                <button className="border-2 border-[#2275FC] rounded-xl w-[230px] py-4 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
