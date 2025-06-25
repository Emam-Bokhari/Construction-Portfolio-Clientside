import { Fragment } from "react";
import biwtaLogo from "../assets/our-client-logo/biwta.png";
import rajukLogo from "../assets/our-client-logo/rajuk.png";
import bangladeshArmy from "../assets/our-client-logo/military-engineer-services-bangladesh-seeklogo.png";
import pwd from "../assets/our-client-logo/pwd.png";
import lged from "../assets/our-client-logo/LGED Logo-Photoroom.png";
import akij from "../assets/our-client-logo/akij-group-seeklogo.png";

const clientsData = [
  {
    logo: biwtaLogo,
    name: "Bangladesh Inland Water Transport Authority",
  },
  {
    logo: rajukLogo,
    name: "Capital Development Authority (RAJUK)",
  },
  {
    logo: bangladeshArmy,
    name: "Military Engineer Services Bangladesh",
  },
  {
    logo: pwd,
    name: "Public Works Department",
  },
  {
    logo: lged,
    name: "Local Government Engineering Department (LGED)",
  },
  {
    logo: akij,
    name: "Akij Group",
  },
];

export default function OurClient() {
  return (
    <Fragment>
      <div className="bg-[#F6F6F6] my-20">
        <div className="max-w-screen-xl mx-auto p-8 md:p-16 lg:p-8 space-y-3 md:space-y-4  ">
          <div className="flex items-center gap-3 justify-center">
            <hr className="border-[1px] border-[#F68A0A] w-12" />
            <h2 className="text-base font-[titillium] font-[600] text-[#F68A0A]">
              Our Clients
            </h2>
            <hr className="border-[1px] border-[#F68A0A] w-12" />
          </div>

          <h3 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] text-center">
            Proud to Serve These Esteemed Organizations
          </h3>

          {/* start cards  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-3 md:mt-4 ">
            {clientsData?.map((clientData) => (
              <div key={clientData._id} className="bg-white p-6 ">
                <div className=" space-y-3 md:space-y-4 xl:space-y-6 mx-auto">
                  {/* icon  */}
                  <img
                    className="w-[120px] h-[120px] object-cover rounded-full mx-auto"
                    src={clientData?.logo}
                    loading="lazy"
                    alt={clientData?.name + " " + "Image"}
                  />
                  {/* text  */}
                  <h2 className="font-[titillium] font-[600] text-[20px] lg:text-[24px] text-[#0E121D] text-center">
                    {clientData?.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          {/* ends cards  */}
        </div>
      </div>
    </Fragment>
  );
}
