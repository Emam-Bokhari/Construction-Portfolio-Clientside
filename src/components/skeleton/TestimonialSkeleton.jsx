import { Fragment } from "react";

export default function TestimonialSkeleton() {
  return (
    <Fragment>
      <div className=" shadow rounded-md bg-white p-4 space-y-2 animate-pulse">
        <div className="flex justify-center">
          <div className=" w-[120px] h-[120px] rounded-full bg-slate-200 "></div>
        </div>
        <div className="h-3 bg-slate-200 rounded"></div>
        <br />
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </Fragment>
//     <div
//     key={_id}
//     className="w-full space-y-2 p-4 bg-white shadow-sm"
//   > 
//     {/* text  */}
//     <h2 className="font-[titillium]  text-[20px] font-[600] text-center text-[#0E121D]">
//       {testimonial.name}
//     </h2>

//     <p className="text-[#4D5765] h-12 text-center text-base font-[500] font-[archivo]">
//       {testimonial.review}
//     </p>
//   </div>
  );
}
