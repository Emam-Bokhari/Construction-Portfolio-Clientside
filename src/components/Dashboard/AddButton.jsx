import { Fragment } from "react";
import { FaPlus } from "react-icons/fa";

export default function AddButton({button}) {
  return (
    <Fragment>
      <button className="border-2 border-[#2275FC] rounded-xl w-[200px] py-3 text-[base] text-[#2275FC] font-[inter] font-medium hover:text-white hover:bg-[#2275FC] transform transition-all duration-200">
        <span className="mr-1">
          <FaPlus className="inline" />
        </span>
        {button}
      </button>
    </Fragment>
  );
}
