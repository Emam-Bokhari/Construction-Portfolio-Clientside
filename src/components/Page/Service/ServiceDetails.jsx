import { Fragment, useEffect, useState } from "react";
import CommonPageBanner from "../../CommonPageBanner";
import { FaFilePdf } from "react-icons/fa";
import { BsFiletypeDoc } from "react-icons/bs";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { serviceId } = useParams(); // Get serviceId from route params
  const [services, setServices] = useState({});
// // 01
//   useEffect(()=>{
//     fetch(`http://localhost:3000/api/v1/service-details/${serviceId}`)
//     .then((res)=>res.json())
//     .then((data)=>setServices(data))
//   },[serviceId])
//   console.log(services)

  useEffect(()=>{
    const fetchServiceDetailsData=async()=>{
     try{
      const response=await fetch(`http://localhost:3000/api/v1/service-details/${serviceId}`)
      if(!response.ok){
        const errorMessage=`Fetching service details is failed!${response.status}`
        throw new Error(errorMessage)
      }
      const data=await response.json()
      setServices(data)
    }catch(err){
      console.log(err)
    }
     }
     fetchServiceDetailsData()
  },[serviceId])
  

  return (
    <Fragment>
      <CommonPageBanner
        heading="Service Details"
        tittle="Service | Service Details"
      />
      <div className="bg-white my-20">
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Start left side  */}
            <div className="w-full lg:w-3/5 xl:w-2/3">
              <div>
                {/* image  */}
                <div>
                  <img
                    className="w-full h-[400px]  object-cover rounded-md"
                    src={services?.imageUrl}
                    alt=""
                  />
                </div>

                {/* start description  */}
                <div className="my-10">
                  <h2 className="text-[#0E121D] font-[titillium] text-4xl font-bold">
                    {services?.serviceName}
                  </h2>

                  <p className="my-5 text-[#4D5765] text-base leading-7 font-[archivo] font-normal">
                    {services?.serviceDescription}
                  </p>
                </div>
                {/* end description */}

                {/* start service benefits  */}
                <div className="my-10">
                  <h2 className="text-[#0E121D] font-[titillium] text-4xl font-bold">
                    Service Benefits
                  </h2>

                  <p className="my-5 text-[#4D5765] text-base leading-7 font-[archivo] font-normal">
                    {services?.serviceBenefitsDescription                    }
                  </p>
                </div>
                {/* end service benefits */}
              </div>
            </div>
            {/* Ends left side */}

            {/* Start right side  */}
            <div className="w-full lg:w-2/5 xl:w-1/3">
              {/* start all categories  */}
              <div className="bg-[#F8F8F8] p-4 rounded-md">
                <div>
                  <h2 className="font-[titillium] text-[24px] font-[600] text-[#0E121D]">
                    All Services
                  </h2>

                  <div className="mt-2">
                    <hr className="border-[1px] border-[#E4E4E4]" />
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
                  <a
                    href="#"
                    className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
                  >
                    Building Contracting
                  </a>

                  <a
                    href="#"
                    className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
                  >
                    General Contracting
                  </a>

                  <a
                    href="#"
                    className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
                  >
                    Material Supply
                  </a>

                  <a
                    href="#"
                    className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
                  >
                    Interior Design
                  </a>

                  <a
                    href="#"
                    className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
                  >
                    Architecture Design
                  </a>

                  <a
                    href="#"
                    className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white hover:bg-[#F68A0A] hover:text-white transition-all duration-300 shadow-sm p-4"
                  >
                    House Renovation
                  </a>
                </div>
              </div>
              {/* end all categories  */}

              {/* start download qoutation  */}
              <div className="bg-[#F8F8F8] p-4 rounded-md my-10">
                <div>
                  <h2 className="font-[titillium] text-[24px] font-[600] text-[#0E121D]">
                    Download
                  </h2>

                  <div className="mt-2">
                    <hr className="border-[1px] border-[#E4E4E4]" />
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
                  <a
                    href="#"
                    className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white shadow-sm p-4"
                  >
                    <span className="text-[#F68A59] text-lg font-medium mr-1">
                      <FaFilePdf className="inline" />
                    </span>
                    Download Brouchers
                  </a>

                  <a
                    href="#"
                    className="text-[archivo] text-base inline-block w-full font-[500] text-[#0E121D] rounded-md bg-white shadow-sm p-4"
                  >
                    <span className="text-[#F68A59] text-lg font-medium mr-1">
                      <BsFiletypeDoc className="inline" />
                    </span>
                    Download Doc.
                  </a>
                </div>
              </div>
              {/* end download qoutation */}
            </div>
            {/* Ends right side  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
