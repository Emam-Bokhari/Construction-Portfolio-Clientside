import { Fragment } from "react";

export default function ServiceSkeleton() {
  return (
    <Fragment>
      <div className="bg-white shadow p-6 space-y-3 md:space-y-4 xl:space-y-6 animate-pulse">
        <div className="flex  justify-between items-center">
          <div className="w-12 h-12 rounded-full bg-slate-200"></div>
          <div className="bg-slate-200 w-10 h-2 rounded"></div>
        </div>
        <div>
          <hr className="border-[1px] border-slate-200" />
        </div>
        <div className="bg-slate-200 rounded h-3"></div>
        <div className="space-y-3">
          <div className="bg-slate-200 rounded h-2"></div>
          <div className="bg-slate-200 rounded h-2"></div>
          <div className="bg-slate-200 rounded h-2"></div>
          <div className="bg-slate-200 rounded h-2"></div>
          <div className="bg-slate-200 rounded h-2"></div>
        </div>
        <div className="bg-slate-200 rounded w-1/4 h-2 "></div>
      </div>
    </Fragment>
  );
}
