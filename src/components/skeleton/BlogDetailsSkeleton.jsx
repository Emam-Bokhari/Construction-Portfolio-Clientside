import { Fragment } from "react";

export default function BlogDetailsSkeleton() {
  return (
    <Fragment>
      <div className="bg-[#F8F8F8] p-2 shadow animate-pulse">
        <div className="w-full h-[400px] bg-slate-200  rounded-t-md"></div>
        <div className="px-6">
          <div className="my-10">
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-200 h-6 w-6"></div>
                <div className="flex-1">
                  <div className="h-2 w-14 bg-slate-200 rounded"></div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-200 h-6 w-6"></div>
                <div className="flex-1">
                  <div className="h-2 w-14 bg-slate-200 rounded"></div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-200 h-6 w-6"></div>
                <div className="flex-1">
                  <div className="h-2 w-14 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="bg-slate-200 h-4 rounded"></div>
              <div className="bg-slate-200 h-4 rounded"></div>
              <div className="bg-slate-200 h-4 rounded"></div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
              <div className="bg-slate-200 h-3 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
