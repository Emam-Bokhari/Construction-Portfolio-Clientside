import { Fragment } from "react";


export default function DashboardFooter() {
  return (
    <Fragment>
      <footer className=" w-full  bg-white">
        <div className="py-5 flex justify-center text-center ml-0 lg:ml-[300px] ">
          <span className="font-[inter] text-[12px] md:text-sm font-normal">
            Copyright &copy; 2024 GoldenPeach. Develop by
            <a
              className="text-[#2377FC]"
              href="https://www.facebook.com/emambokhari99/"
            >
              &nbsp;Moshfiqur Rahman&nbsp;
            </a>
            All rights reserved.
          </span>
        </div>
      </footer>
    </Fragment>
  );
}
