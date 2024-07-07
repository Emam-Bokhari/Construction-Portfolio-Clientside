import { Fragment } from "react";

export default function BlogCardSkeleton(){
    return(
        <Fragment>
            <div className="bg-white space-y-4 shadow animate-pulse" >
                <div className="flex flex-col xl:flex-row  gap-5" >
                <div className=" flex-1">
                 <div className="w-full bg-slate-200 h-[300px] md:h-[400px] xl:h-[300px] rounded-md"></div>
                </div>
                <div className="  flex-1 space-y-3 md:space-y-4" >
                    <div className="bg-slate-200 h-4 rounded w-2/5" ></div>
                    <div className="space-y-3" >
                    <div className="bg-slate-200 h-3 rounded" ></div>
                    <div className="bg-slate-200 h-3 rounded" ></div>
                    <div className="bg-slate-200 h-3 rounded" ></div>
                    </div>
                    <div className="bg-slate-200 h-3 rounded" ></div>
                    <div className="space-y-3" >
                        <div className="bg-slate-200 h-2 rounded" ></div>
                        <div className="bg-slate-200 h-2 rounded" ></div>
                        <div className="bg-slate-200 h-2 rounded" ></div>
                        <div className="bg-slate-200 h-2 rounded" ></div>
                        <div className="bg-slate-200 h-2 rounded" ></div>
                    </div>
                    <div className="bg-slate-200 h-3 w-1/4" ></div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}