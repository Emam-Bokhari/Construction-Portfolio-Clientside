import { Fragment } from "react";

export default function TestimonialsTable() {
  return (
    <Fragment>
      <div className="p-5 w-full 2xl:w-2/5 h-auto  bg-white rounded-xl ">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[#111111] font-[inter] font-[700] text-xl">
            Testimonials
          </h2>

          <button className="text-[#BDC9DB] font-[inter] font-[500] text-sm">
            View All
          </button>
        </div>

        <div className="overflow-auto">
          {/* card 01  */}
          <div className="pb-3  w-full">
            <div>
              <div className="flex gap-3 ">
                <img
                  className="w-14 h-14 object-cover rounded-full"
                  src="./assets/profile.jpg"
                  alt=""
                />

                <div className="leading-5">
                  <p className="text-sm font-[inter] font-[500]">
                    Emam Bokhari
                  </p>
                  <span>
                    <i className="fa-solid fa-star text-[10px] text-[#FFA800]"></i>
                    <i className="fa-solid fa-star text-[10px] text-[#FFA800]"></i>
                    <i className="fa-solid fa-star text-[10px] text-[#FFA800]"></i>
                    <i className="fa-solid fa-star text-[10px] text-[#FFA800]"></i>
                    <i className="fa-solid fa-star text-[10px] text-[#FFA800]"></i>
                  </span>
                  <p className="text-sm font-[inter] font-normal text-[#5C6573]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, non. Lorem ipsum dolor sit amet...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
