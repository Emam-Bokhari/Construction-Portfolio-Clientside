import { Fragment } from "react";

export default function BlogSkeleton() {
  return (
    <Fragment>
      <div className="max-w-sm bg-white rounded-lg shadow animate-pulse">
        <div className="rounded-t-lg h-[200px] bg-slate-200"></div>
        <div className="p-5 space-y-5" >
            <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded" ></div>
            <div className="h-3 bg-slate-200 rounded" ></div>
            <div className="h-3 bg-slate-200 rounded" ></div>
            </div>
            <div className="space-y-2" >
            <div className="h-2 bg-slate-200 rounded" ></div>
            <div className="h-2 bg-slate-200 rounded" ></div>
            <div className="h-2 bg-slate-200 rounded" ></div>
            <div className="h-2 bg-slate-200 rounded" ></div>
            <div className="h-2 bg-slate-200 rounded" ></div>
            <div className="h-2 bg-slate-200 rounded" ></div>
            </div>
            <div className="w-1/4 h-2 bg-slate-200 rounded" ></div>
        </div>
      </div>
    </Fragment>
  );
}
