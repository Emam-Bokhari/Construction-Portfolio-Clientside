import { Fragment } from "react";

export default function ClientData() {
  // Sample data with real images from Unsplash
  const clientData = [
    {
      id: 1,
      name: "Local Government Engineering Dept.",
      image:
        "https://res.cloudinary.com/daxjf1buu/image/upload/v1745749492/LGED-Logo_fuitdm.png",
    },
    {
      id: 2,
      name: "Bangladesh Inland Water Transport Authority",
      image:
        "https://res.cloudinary.com/daxjf1buu/image/upload/v1745748657/unnamed_xnni7a.png",
    },
    {
      id: 3,
      name: "Bangladesh Army",
      image:
        "https://res.cloudinary.com/daxjf1buu/image/upload/v1745749034/army_eew4nf.png",
    },
    {
      id: 4,
      name: "Public Works Department",
      image:
        "https://res.cloudinary.com/daxjf1buu/image/upload/v1745749668/PWD_Logo_ahfykp.png",
    },
    {
      id: 5,
      name: "Nibondhon boi",
      image:
        "https://res.cloudinary.com/daxjf1buu/image/upload/v1745749375/boi_znbrl8.jpg",
    },
    {
      id: 6,
      name: "Nibondhon boi",
      image:
        "https://res.cloudinary.com/daxjf1buu/image/upload/v1745749279/boi2_gav2sl.jpg",
    },
  ];

  return (
    <Fragment>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientData.map((client) => (
            <div
              key={client.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#F68A0A]"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h2 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {client.name}
                </h2>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800 lg:hidden">
                  {client.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
