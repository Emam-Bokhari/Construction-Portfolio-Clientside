import { Fragment } from "react";

export default function TestimonialSkeleton() {
  return (
    <Fragment>
      <div className="shadow rounded-md bg-white p-4 space-y-2 animate-pulse">
        <div className="flex justify-center">
          <div className=" w-[120px] h-[120px] rounded-full bg-slate-200 "></div>
        </div>
        <div className="h-3 bg-slate-200 rounded"></div>
        <br />
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </Fragment>
  );
}
