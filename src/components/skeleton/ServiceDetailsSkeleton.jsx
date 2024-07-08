import { Fragment } from "react";

export default function ServiceDetailsSkeleton() {
  return (
    <Fragment>
      <div className=" bg-white shadow animate-pulse p-2">
        <div className="w-full h-[400px] bg-slate-200  rounded-md"></div>
        <div className="my-10 space-y-10">
          <div className="bg-slate-200 rounded h-4 "></div>
          <div className="space-y-3">
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
          </div>
          <div className="bg-slate-200 rounded h-4 "></div>
          <div className="space-y-3">
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
            <div className="bg-slate-200 rounded h-3"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
