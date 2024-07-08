import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Fragment>
      <section className="bg-white translate-y-1/2">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#2563EB] ">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              Somethings missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 ">
              Sorry, we cant find that page. Looks like you are in the wrong place.
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-[#2563EB] hover:bg-[#1A4BBF] focus:ring-4 focus:outline-none focus:ring-[#2264E6] font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
