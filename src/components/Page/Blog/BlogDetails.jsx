import { Fragment } from "react";
import blogImage from "../../../assets/latest-projects-image/projects-img-01.jpg";
import LeftSide from "./LeftSide";
import CommonPageBanner from "../../CommonPageBanner";
import { FaLayerGroup, FaUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

export default function BLogDetails() {
  return (
    <Fragment>
      <CommonPageBanner heading="Blog Details" tittle="Blog | Blog Details" />
      {/* start blog details */}
      <div className=" bg-white my-20">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8  ">
          <div className="flex flex-col-reverse lg:flex-row  gap-10  ">
            {/* Start left side  */}
            <LeftSide />
            {/* Ends left side  */}

            {/* Start right side  */}
            <div className="w-full lg:w-3/5 xl:w-2/3">
              <div className="bg-[#F8F8F8]">
                {/* image  */}
                <div>
                  <img
                    className="w-full h-[400px]  object-cover rounded-t-md"
                    src={blogImage}
                    alt=""
                  />
                </div>

                <div className="px-6">
                  {/* start description  */}
                  <div className="my-10">
                    <div className="my-10 flex items-center gap-3">
                      {/* author  */}
                      <div>
                        <span className="text-[#F69247] mr-1">
                          <FaUser className="inline" />
                        </span>
                        <span className="font-[archivo] text-sm text-[#4D5765] ">
                          Admin
                        </span>
                      </div>
                      {/* publish date  */}
                      <div>
                        <span className="text-[#F69247] mr-1">
                          <FaCalendarDays className="inline" />
                        </span>
                        <span className="font-[archivo] text-sm text-[#4D5765] ">
                          24-Jun-2024
                        </span>
                      </div>
                      {/* category  */}
                      <div>
                        <span className="text-[#F69247] mr-1">
                          <FaLayerGroup className="inline" />
                        </span>
                        <span className="font-[archivo] text-sm text-[#4D5765] ">
                          Building Construction
                        </span>
                      </div>
                    </div>

                    <h2 className="text-[#0E121D] font-[titillium] text-3xl font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>

                    <p className="my-5 text-[#4D5765] text-base leading-7 font-[archivo] font-normal">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      At temporibus magnam perspiciatis quis iusto, minus
                      ratione quia explicabo praesentium, consectetur cupiditate
                      harum fuga quas illum mollitia, fugiat repudiandae natus
                      dolorum. Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eos voluptatem ipsum magni labore,
                      accusantium a ad tempore aliquid, quibusdam molestiae
                      delectus quae et expedita reprehenderit atque sint itaque
                      possimus doloribus? Lorem, ipsum dolor sit amet
                      consectetur adipisicing elit. Obcaecati, commodi id alias
                      explicabo architecto mollitia cumque accusamus, assumenda
                      atque praesentium reiciendis unde nemo! Quidem eligendi
                      assumenda vitae esse, sint doloribus.
                    </p>
                    <p className="my-5 text-[#4D5765] text-base leading-7 font-[archivo] font-normal">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      At temporibus magnam perspiciatis quis iusto, minus
                      ratione quia explicabo praesentium, consectetur cupiditate
                      harum fuga quas illum mollitia, fugiat repudiandae natus
                      dolorum. Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eos voluptatem ipsum magni labore,
                      accusantium a ad tempore aliquid, quibusdam molestiae
                      delectus quae et expedita reprehenderit atque sint itaque
                      possimus doloribus? Lorem, ipsum dolor sit amet
                      consectetur adipisicing elit. Obcaecati, commodi id alias
                      explicabo architecto mollitia cumque accusamus, assumenda
                      atque praesentium reiciendis unde nemo! Quidem eligendi
                      assumenda vitae esse, sint doloribus.
                    </p>
                    <p className="my-5 text-[#4D5765] text-base leading-7 font-[archivo] font-normal pb-6">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      At temporibus magnam perspiciatis quis iusto, minus
                      ratione quia explicabo praesentium, consectetur cupiditate
                      harum fuga quas illum mollitia, fugiat repudiandae natus
                      dolorum. Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eos voluptatem ipsum magni labore,
                      accusantium a ad tempore aliquid, quibusdam molestiae
                      delectus quae et expedita reprehenderit atque sint itaque
                      possimus doloribus? Lorem, ipsum dolor sit amet
                      consectetur adipisicing elit. Obcaecati, commodi id alias
                      explicabo architecto mollitia cumque accusamus, assumenda
                      atque praesentium reiciendis unde nemo! Quidem eligendi
                      assumenda vitae esse, sint doloribus.
                    </p>
                  </div>
                  {/* end description  */}
                </div>
              </div>
            </div>
            {/* Ends right side  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
