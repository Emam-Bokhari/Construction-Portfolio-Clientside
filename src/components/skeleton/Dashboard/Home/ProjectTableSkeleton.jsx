import { Fragment } from "react";

export default function ProjectTableSkeleton() {
  return (
    <Fragment>
      <div className="p-5 w-full 2xl:w-[30%] h-auto  bg-white rounded-xl animate-pulse">
        <div className="space-y-5">
          <div className="flex items-center justify-between ">
            <div className="h-4 w-14 rounded bg-slate-200"></div>

            <div className="h-4 w-14 rounded bg-slate-200"></div>
          </div>

          <div className="overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
              <div className="border-2 border-dotted border-[#E4E4E4] rounded-2xl p-2">
                <div className="w-full h-[100px]  bg-slate-200 rounded-lg"></div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </Fragment>
  );
}
