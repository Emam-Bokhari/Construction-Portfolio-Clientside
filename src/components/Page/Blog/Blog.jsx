import { Fragment } from "react";
import blogImage from "../../../assets/latest-projects-image/projects-img-01.jpg"
import CommonPageBanner from "../../CommonPageBanner";
import LeftSide from "./LeftSide";

export default function Blog() {
  return (
    <Fragment>
      <CommonPageBanner heading="Blog" tittle="Home | Blog" />
      {/*start blog */}
      <div className=" bg-white my-20">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8  ">

            <div className="flex flex-col-reverse lg:flex-row  gap-10  ">


                {/* Start left side */}
                <LeftSide/>
                {/* Ends left side  */}

                 {/* Start right side  */}
                <div className="  w-full lg:w-3/5 xl:w-2/3">

                   <div className="space-y-3 md:space-y-4" >

                     {/* start blog 01  */}
                     <div className="flex flex-col xl:flex-row  gap-5" >
                         {/* image  */}
                    <div className="  flex-1" >
                        <img className="w-full h-[300px] md:h-[400px] xl:h-[300px]   object-cover rounded-md"
                            src={blogImage} alt=""/>
                    </div>

                     {/* text  */}
                    <div className="  flex-1 space-y-3 md:space-y-4" >

                        <h2 className="px-3 py-2 bg-[#F68A0A] inline text-sm font-[500] font-[archivo] rounded-sm text-white">
                            Material Supply
                        </h2>

                        <h3 className="font-[titillium] text-[#0E121D]  text-[24px] font-[600]" >
                            The Growing Need For Effective Password Management
                        </h3>

                        <div className="flex items-center gap-2" >
                            <i className="fa-solid fa-calendar text-[#F68A0A] text-xl"></i>
                            <p className="font-[archivo] text-base text-[#4D5765]">
                                27 Jun 2024
                            </p>
                        </div>

                        <p className="text-base font-[archivo] text-[#4D5765]">
                            Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.
                        </p>

                        <a href="./blogDetails.html"
                            className="uppercase text-sm font-[archivo] border-[1px] border-[#E4E4E4] px-3 py-2 rounded-md font-[600] text-[#0E121D] hover:bg-[#F68A0A] hover:text-white transform transition-all duration-200 flex items-center w-[140px] gap-2">
                            READ MORE
                            <i className="fa-solid fa-arrow-right text-sm"></i>
                    </a>

                    </div>

                    
                    </div>
                     {/* end blog 01  */}

                   </div>

                </div>
                {/* Ends right side  */}


            </div>

        </div>
    </div>

    </Fragment>
  );
}
