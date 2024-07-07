import { Fragment } from "react";
import commonBannerImage from "../assets/banner-image/common-banner-image.webp";

export default function CommonPageBanner({ heading, tittle }) {
  return (
    <Fragment>
      <div className="relative">
        <img
          className="w-full h-[450px] object-cover"
          src={commonBannerImage}
          loading="lazy"
          alt=""
        />

        {/* overlay  */}
        <div className="bg-black absolute inset-0 opacity-60"></div>

        <div className="absolute top-1/2 -translate-y-1/2 left-[18%]">
          <h2 className="font-[titillium] text-[54px] font-[700] text-white">
            {heading}
          </h2>
          <p className="font-[titillium] text-[18px] font-[600] text-[#F68A0A] ">
            {tittle}
          </p>
        </div>
      </div>
    </Fragment>
  );
}
