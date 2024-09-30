import React from "react";

const NewThing = () => {
  return (
    <div>
      <div className="container mx-auto p-4 font-serif pt-6 w-full max-w-7xl m-auto overflow-hidden">
        {/* Main grid layout */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {/* First large image (Left column in large screens) */}
          <div className="relative row-span-2 lg:col-span-1 sm:col-span-2 bg-gray-100  h-[547px] max-w-[497px]">
            <img
              src="/Images/newArrival.png"
              alt="New Arrival"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white/90 via-transparent to-transparent">
              <div className="absolute bottom-12 left-1/3 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  NEW ARRIVAL
                </h3>
                <p className="text-4xl md:text-6xl font-bold text-[#6e3000]">
                  10%{" "}
                </p>
                <h3 className="text-xl font-semibold text-gray-900">OFF</h3>
              </div>
            </div>
          </div>

          {/* Middle section: Top-middle and Bottom-middle */}
          <div className="grid grid-rows-2 gap-2 lg:col-span-1 sm:col-span-2">
            {/* Top-middle image */}
            <div className="relative bg-gray-100  h-[268px]">
              <img
                src="/Images/newArrival2.png"
                alt="Shop Bracelets"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white/90 via-transparent to-transparent">
                <div className="absolute bottom-4 left-1/3 text-center">
                  <h2 className="text-lg font-semibold text-gray-900">
                    SHOP BRACELETS
                  </h2>
                </div>
              </div>
            </div>

            {/* Bottom-middle section (Two vertically split images) */}
            <div className="grid grid-cols-2 gap-2">
              {/* Third image */}
              <div className="relative bg-gray-100  h-[268px]">
                <img
                  src="/Images/newArrival3.png"
                  alt="Shop Earing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white/90 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-1/3 text-center">
                    <h2 className="text-lg font-semibold text-gray-900">
                      SHOP{" "}
                    </h2>
                    <h2 className="text-lg font-semibold text-gray-900">
                      EARING{" "}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Fourth image */}
              <div className="relative bg-gray-100  h-[268px]">
                <img
                  src="/Images/newArrival4.png"
                  alt="Shop Locket"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white/90 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-1/3 text-center">
                    <h2 className="text-lg font-semibold text-gray-900">
                      SHOP 
                    </h2>
                    <h2 className="text-lg font-semibold text-gray-900">
                    LOCKET 
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth image (Right column in large screens) */}
          <div className="relative row-span-2 lg:col-span-1 sm:col-span-2 bg-gray-100  max-w-[497px] max-h-[547px]">
            <img
              src="/Images/newArrival5.png"
              alt="Up to 30% Off"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white/90 via-transparent to-transparent">
              <div className="absolute bottom-16 left-1/3 text-center">
                <h2 className="text-xl font-semibold text-gray-900">UPTO</h2>
                <p className="text-4xl md:text-6xl font-bold text-[#6e3000]">
                  30%
                </p>
                <h3 className="text-xl font-semibold text-gray-900">OFF</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewThing;
