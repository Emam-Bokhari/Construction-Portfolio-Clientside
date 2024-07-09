import { Fragment } from "react";
import WrapStyle from "../../../../Dashboard/WrapStyle";

export default function AddTeamMember() {
  return (
    <Fragment>
      <WrapStyle>
        <div className="max-w-screen-xl  mx-auto">
          <h3 className="text-[#111111] font-[inter] font-bold text-2xl pb-4">
            Add Team Member
          </h3>

          <div className="bg-white rounded-xl p-4 ">
            <form className="space-y-4">
              {/* team member image url  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111]"
                  htmlFor="teamMemberImageUrl"
                >
                  Team Member Image Url{" "}
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="teamMemberImageUrl"
                  id=""
                  placeholder="Enter Team Member Image Url"
                />
              </div>

              {/* team member name  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="serviceName"
                >
                  Team Member Name{" "}
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="teamMemberName"
                  id=""
                  placeholder="Enter Team Member Name"
                />
                <span className="text-sm text-[#95A3B9] block">
                  Do not exceed 20 characters when entering the team member
                  name.
                </span>
              </div>

              {/* team member designation  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="teamMemberDesignation"
                >
                  Team Member Designation{" "}
                  <sup>
                    <span className="text-red-500 font-bold">*</span>
                  </sup>
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="teamMemberDesignation"
                  id=""
                  placeholder="Enter Team Member Designation"
                />
                <span className="text-sm text-[#95A3B9] block">
                  Do not exceed 20 characters when entering the team member
                  designation.
                </span>
              </div>

              {/* team member social links  */}
              <div>
                <label
                  className="text-base font-medium text-[#111111] "
                  htmlFor="teamMemberSocialLink"
                >
                  Team Member Social Link
                </label>
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="facebookProfileLink"
                  id=""
                  placeholder="Enter Facebook Profile Link"
                />
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="twitterProfileLink"
                  id=""
                  placeholder="Enter Twitter Profile Link"
                />
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="instagramProfileLink"
                  id=""
                  placeholder="Enter Instagram Profile Link"
                />
                <input
                  className="block border-[1px] border-[#E4E4E4] w-full rounded-lg p-4 outline-none my-2"
                  type="text"
                  name="linkedinProfileLink"
                  id=""
                  placeholder="Enter Linkedin Profile Link"
                />
              </div>

              {/* add button */}
              <div>
                <button className="border-2 border-[#2275FC] rounded-xl w-[230px] py-4 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
                  Add Team Member
                </button>
              </div>
            </form>
          </div>
        </div>
      </WrapStyle>
    </Fragment>
  );
}
