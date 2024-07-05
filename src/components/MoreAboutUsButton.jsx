import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function MoreAboutUsButton() {
  return (
    <Fragment>
      <div>
        <Link to="/aboutUs" className="bg-[#F68A0A] hover:bg-[#ee8404] block transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-white uppercase">
          MORE ABOUT Us
        </Link>
      </div>
    </Fragment>
  );
}
