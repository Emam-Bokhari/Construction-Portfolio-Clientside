import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function MoreAboutUsButton() {
  return (
    <Fragment>
      <div>
        <Link to="/aboutUs" className="bg-[#F68A0A] hover:bg-[#ee8404] block transform transition-all duration-300   text-sm md:text-base font-[archivo] font-[600] w-[160px] text-center py-3 text-white uppercase">
          MORE ABOUT Us
        </Link>
      </div>
    </Fragment>
  );
}
