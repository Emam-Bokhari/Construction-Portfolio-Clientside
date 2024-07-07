import { Fragment } from "react";
import background from "../../assets/banner-image/background.webp";
import bannerImage from "../../assets/banner-image/banner-image.webp";
import { Link } from "react-router-dom";

export default function Banner() {
  const backgroundImage = {
    backgroundImage: `url(${background})`,
  };

  return (
    <Fragment>
      <div
        style={backgroundImage}
        loading="lazy"
        className=" w-full h-[800px] bg-no-repeat bg-cover relative"
      >
        {/* text  */}
        <div className="space-y-3 md:space-y-4 top-2/4 absolute -translate-y-2/4 left-2/4 -translate-x-2/4 lg:-translate-x-0  lg:left-10 xl:left-20 2xl:left-28 ">
          <h2 className="text-[#F68A0A] font-[titillium] uppercase text-[18px] md:text-[20px] font-[600]">
            WELCOME TO DREAMS CONSTRUCTION
          </h2>

          <h3 className="text-white font-[titillium] text-[24px] md:text-[38px] xl:text-[48px] 2xl:text-[74px] font-[700] uppercase ">
            BUILD A BETTER
            <br />
            TOMORROW.
          </h3>

          <p className="text-[#908C8D] text-sm md:text-base font-[archivo]">
            The Construction industry encompasses the planning, design and
            execution
            <br className="hidden lg:block" />
            of buildings, infrastructure and related projects.
          </p>

          {/* button  */}
          <div className="flex items-center gap-10">
            <Link
              to="/aboutUs"
              className="bg-[#F68A0A] hover:bg-[#ee8404] transform transition-all duration-300 px-5 lg:px-7 text-sm md:text-base font-[archivo] font-[600] py-3 lg:py-4 text-white uppercase"
            >
              DISCOVER MORE
            </Link>
            <Link
              to="/service"
              className="px-5 lg:px-7 py-3 lg:py-4 text-sm md:text-base font-[archivo] font-[600] text-white border-[1px] border-[#F68A0A] bg-transparent relative transition-transform uppercase before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:absolute before:duration-300 before:origin-top-left before:bg-white before:scale-x-0 hover:text-[#F68A0A] before:hover:scale-100 flex items-center gap-1"
            >
              OUR SERVICES
            </Link>
          </div>
        </div>

        {/* image  */}

        <div>
          <img
            style={{
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
            }}
            className="w-[350px] xl:w-[500px] 2xl:w-[600px] h-[350px] xl:h-[500px] 2xl:h-[600px] hidden lg:block top-1/2 -translate-y-2/4 absolute right-10 xl:right-20 2xl:right-28 object-center"
            src={bannerImage}
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
}
