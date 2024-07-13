import { Fragment } from "react";
import useTestimonial from "../hooks/useTestimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialSkeleton from "./skeleton/TestimonialSkeleton";

export default function TestimonialSection() {
  // fetch data
  const { testimonials, testimonialLoading } = useTestimonial();

  // react slick slider
  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className="bg-[#F8F8F8] w-full my-20">
        <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 space-y-3 md:space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <hr className="border-[1px] border-[#F68A0A] w-12" />
            <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A] uppercase">
              TESTIMONIALS
            </h2>
            <hr className="border-[1px] border-[#F68A0A] w-12" />
          </div>

          <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
            Real Happy Customers, Real Stories
          </h3>

          {/* start cards  */}
          <div>
            {testimonialLoading ? (
              // skeleton
              <Slider {...testimonialSliderSettings}>
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
              </Slider>
            ) : (
              <Slider {...testimonialSliderSettings}>
                {testimonials?.map((testimonial) => (
                  <div
                    key={testimonial._id}
                    className="w-full space-y-2 p-4 bg-white shadow-sm"
                  >
                    {/* image  */}
                    <div className="flex justify-center">
                      <img
                        className=" w-[120px] h-[120px] object-cover rounded-full ring-2 ring-offset-2 ring-[#F68A0A]"
                        src={testimonial?.imageUrl}
                        loading="lazy"
                        alt={testimonial?.name + " " + "Image"}
                      />
                    </div>

                    {/* text  */}
                    <h2 className="font-[titillium]  text-[20px] font-[600] text-center text-[#0E121D] capitalize">
                      {testimonial?.name}
                    </h2>

                    <p className="text-[#4D5765] h-16 text-center text-base font-[500] font-[archivo] ">
                      {testimonial?.review
                        ? testimonial?.review.substring(0, 100)
                        : testimonial?.review}
                    </p>
                  </div>
                ))}
              </Slider>
            )}
          </div>
          {/* ends cards */}
        </div>
      </div>
    </Fragment>
  );
}
