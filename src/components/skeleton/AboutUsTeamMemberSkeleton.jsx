import { Fragment } from "react";

export default function AboutUsTeamMemberSkeleton() {
  return (
    <Fragment>
      <div className="w-full space-y-3  bg-white shadow p-4 rounded-md animate-pulse">
        <div className="flex justify-center">
          <div className="w-[80px] h-[80px] bg-slate-200 rounded-full "></div>
        </div>
        <div className="bg-slate-200 h-3 rounded"></div>
        <div className="space-y-2">
          <div className="bg-slate-200 h-2 rounded"></div>
          <div className="bg-slate-200 h-2 rounded"></div>
        </div>
        <div className="flex justify-center gap-3">
          <div className="bg-slate-200 w-5 h-5 rounded-full"></div>
          <div className="bg-slate-200 w-5 h-5 rounded-full"></div>
          <div className="bg-slate-200 w-5 h-5 rounded-full"></div>
          <div className="bg-slate-200 w-5 h-5 rounded-full"></div>
        </div>
      </div>
    </Fragment>
  );
}
