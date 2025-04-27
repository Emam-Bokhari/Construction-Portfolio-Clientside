import { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientData from "./ClientData";

export default function OurClients() {
  return (
    <Fragment>
      <div className="bg-[#F8F8F8] w-full my-20">
        <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 space-y-3 md:space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <hr className="border-[1px] border-[#F68A0A] w-12" />
            <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] uppercase">
              Our Client
            </h2>
            <hr className="border-[1px] border-[#F68A0A] w-12" />
          </div>

          <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
            Real Happy Customers, Real Stories
          </h3>

          {/* start cards  */}
          <ClientData></ClientData>

          {/* ends cards */}
        </div>
      </div>
    </Fragment>
  );
}
