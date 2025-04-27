import { Fragment } from "react";

export default function ClientData() {
  // Sample data with real images from Unsplash
  const clientData = [
    {
      id: 1,
      name: "BIWTA",
      image:
        "https://res.cloudinary.com/daxjf1buu/image/upload/v1745748657/unnamed_xnni7a.png",
    },
    {
      id: 2,
      name: "LGED",
      image:
        "https://res.cloudinary.com/daxjf1buu/image/upload/v1745748837/lged_df62fq.jpg",
    },
    {
      id: 3,
      name: "Casey Kim",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      id: 4,
      name: "Riley Chen",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      id: 5,
      name: "Taylor Smith",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      id: 6,
      name: "Morgan Lee",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
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
