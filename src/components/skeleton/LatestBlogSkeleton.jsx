import { Fragment } from "react";

export default function LatestBlogSkeleton() {
  return (
    <Fragment>
      <div className="space-y-4 shadow animate-pulse p-2">
        <div className="flex flex-col xl:flex-row  gap-5">
          <div className=" w-[150px]">
            <div className="w-[150px] h-[100px]  bg-slate-200 rounded-md"></div>
          </div>
          <div className=" flex-1  space-y-3 md:space-y-4">
            <div className="bg-slate-200 h-3 rounded w-2/5"></div>
            <div className="space-y-3">
              <div className="bg-slate-200 h-2 rounded"></div>
              <div className="bg-slate-200 h-2 rounded"></div>
              <div className="bg-slate-200 h-2 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
