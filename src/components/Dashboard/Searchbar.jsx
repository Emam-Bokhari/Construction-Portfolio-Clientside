import { Fragment } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Searchbar() {
  return (
    <Fragment>
      <div className="flex ring-1 ring-[#EEF3F7] ring-offset-2 w-[250px]  rounded-lg">
        <input
          className="p-3 w-full outline-none px-2"
          type="text"
          placeholder="Search here..."
        />
        <button>
          <FaMagnifyingGlass />
        </button>
      </div>
    </Fragment>
  );
}
