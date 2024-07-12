import { Fragment } from "react";

export default function TeamMemberTableSkeleton() {
  return (
    <Fragment>
      <div className="p-5 w-full 2xl:w-[30%] h-auto  bg-white rounded-xl animate-pulse">
        <div className="space-y-5">
          <div className="flex items-center justify-between ">
            <div className="h-4 w-14 rounded bg-slate-200"></div>
            <div className="h-4 w-14 rounded bg-slate-200"></div>
          </div>

          <div className="pb-3  w-full space-y-3">
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-4 space-y-5">

                <div className="flex items-center gap-3 ">
                  <div className="w-14 h-14 bg-slate-200 rounded-full"></div>
                  <div className="h-3 w-16 bg-slate-200 rounded"></div>
                </div>

                <div className="flex justify-end ">
                  <div className="h-3 w-16 p-1 bg-slate-200 rounded"></div>
                </div>

              </div>

              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-4 space-y-5">

                <div className="flex items-center gap-3 ">
                  <div className="w-14 h-14 bg-slate-200 rounded-full"></div>
                  <div className="h-3 w-16 bg-slate-200 rounded"></div>
                </div>

                <div className="flex justify-end ">
                  <div className="h-3 w-16 p-1 bg-slate-200 rounded"></div>
                </div>

              </div>

              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-4 space-y-5">

                <div className="flex items-center gap-3 ">
                  <div className="w-14 h-14 bg-slate-200 rounded-full"></div>
                  <div className="h-3 w-16 bg-slate-200 rounded"></div>
                </div>

                <div className="flex justify-end ">
                  <div className="h-3 w-16 p-1 bg-slate-200 rounded"></div>
                </div>

              </div>

            </div>

        </div>
      </div>
    </Fragment>
  );
}
