import { Fragment } from "react";

export default function ServiceTableSkeleton() {
  return (
    <Fragment>
      <div className="p-5 w-full 2xl:w-2/5 h-auto bg-white rounded-xl animate-pulse">

        <div className="space-y-5">
          <div className="flex items-center justify-between ">
            <div className="h-4 w-14 rounded bg-slate-200"></div>

            <div className="h-4 w-14 rounded bg-slate-200"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-3 w-16 rounded bg-slate-200"></div>
            <div className="h-3 w-16 rounded bg-slate-200"></div>
            <div className="h-3 w-16 rounded bg-slate-200"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-12 w-10 rounded-xl bg-slate-200"></div>

            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-12 w-10 rounded-xl bg-slate-200"></div>

            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-12 w-10 rounded-xl bg-slate-200"></div>

            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-12 w-10 rounded-xl bg-slate-200"></div>

            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-12 w-10 rounded-xl bg-slate-200"></div>

            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="h-12 w-10 rounded-xl bg-slate-200"></div>

            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
}
