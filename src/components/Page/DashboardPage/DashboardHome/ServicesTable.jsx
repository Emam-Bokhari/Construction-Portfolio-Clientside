import { Fragment } from "react";

export default function ServicesTable({ servicesData, serviceLoading }) {
  console.log(servicesData);
  return (
    <Fragment>
      <div className="p-5 w-full 2xl:w-2/5 h-auto  bg-white rounded-xl ">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[#111111] font-[inter] font-[700] text-xl">
            Services
          </h2>

          <button className="text-[#BDC9DB] font-[inter] font-[500] text-sm">
            View All
          </button>
        </div>

        <div className="overflow-auto">
          <table>
            <thead>
              <tr>
                <td className="text-[#111111] font-[inter] font-[700] text-sm pb-3 align-top whitespace-nowrap">
                  Image
                </td>
                <td className="text-[#111111] font-[inter] font-[700] text-sm pl-3 pb-2 align-top whitespace-nowrap">
                  Service Name
                </td>
                <td className="text-[#111111] font-[inter] font-[700] text-sm pl-3 pb-2 align-top whitespace-nowrap">
                  Description
                </td>
              </tr>
            </thead>

            <tbody>
              {servicesData?.slice(0, 6)?.map((service, _id) => (
                <tr key={_id}>
                  <td className="pb-4 align-top">
                    <div className="w-10 h-12 bg-[#EFF4F8] flex items-center justify-center rounded-xl">
                      <img
                        className="w-8 h-10 object-cover rounded-lg"
                        src={service.imageUrl}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="pl-3 pb-4 align-middle text-sm font-[inter] font-[500] text-[#5C6573] whitespace-nowrap">
                    {service?.serviceName}
                  </td>
                  <td className="pl-3 pb-4 align-middle text-sm font-[inter] font-normal whitespace-nowrap 2xl:whitespace-normal text-[#5C6573]">
                    {service.serviceDescription
                      ? service.serviceDescription.substring(0, 60)
                      : service.serviceDescription}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
