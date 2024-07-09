import { Fragment } from "react";

export default function WrapStyle({ children }) {
  return (
    <Fragment>
      <div className="ml-0 lg:ml-[300px] py-4 px-5 mt-11 lg:mt-0 bg-[#EEF3F7]">
        {children}
      </div>
    </Fragment>
  );
}
