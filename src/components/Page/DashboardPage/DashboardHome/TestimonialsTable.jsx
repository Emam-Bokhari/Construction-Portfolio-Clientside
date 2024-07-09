import { Fragment } from "react";
import Ratings from "./Ratings";

export default function TestimonialsTable({
  testimonialsData,
  testimonialLoading,
}) {
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
          {testimonialsData.slice(0, 6)?.map((testimonial, _id) => (
            <div key={_id} className="pb-3  w-full">
              <div>
                <div className="flex gap-3 ">
                  <img
                    className="w-14 h-14 object-cover rounded-full"
                    src={testimonial?.imageUrl}
                    alt=""
                  />

                  <div className="leading-5 space-y-1">
                    <p className="text-sm font-[inter] font-[500]">
                      {testimonial?.name}
                    </p>
                    <Ratings ratings={testimonial?.star}  />
                    <p className="text-sm font-[inter] font-normal text-[#5C6573]">
                      {testimonial?.review
                        ? testimonial?.review.substring(0, 60)
                        : testimonial?.review}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
