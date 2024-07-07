import { Fragment } from "react";

export default function TeamMemberSkeleton() {
  return (
    <Fragment>
      <div className="shadow w-full  space-y-4 pb-4 bg-white animate-pulse ">
        <div className="w-full h-[300px] lg:h-[320px] xl:h-[265px] bg-slate-200"></div>
        <div className="h-3 bg-slate-200"></div>

        <div className="space-y-2">
          <div className="h-3 bg-slate-200"></div>
          <div className="h-3 bg-slate-200"></div>
          <div className="flex justify-center gap-3">
            <div className="bg-slate-200 w-6 h-6 rounded-full"></div>
            <div className="bg-slate-200 w-6 h-6 rounded-full"></div>
            <div className="bg-slate-200 w-6 h-6 rounded-full"></div>
            <div className="bg-slate-200 w-6 h-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
