import React from "react";
import GalleryInstagram from "./GalleryInstagram";

const FollowUsInstagram = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center  mt-4 mb-10">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#E66E06] to-[#6E3000] bg-clip-text text-transparent p-1">
          Follow Us On Instagram
        </h2>
        <GalleryInstagram />
      </div>
      <div className=" py-14 max-w-7xl mx-auto w-full">
        <div className="" style={{backgroundImage:"url(/Images/rs.png)"}}>
          <div className="grid grid-cols-4 gap-4 bg-[#FFF6CE] opacity-95 p-8" >

            <div className="flex justify-center items-center flex-col w-full border-r-2 border-gray-300 gap-3">
              <img src="/Images/aeroplane.svg" className="h-[42px]" alt="" />
              <p className="">FREE TRACKED DELIVERY</p>
            </div>
    
         
          <div className="flex justify-center items-center flex-col border-r-2 border-gray-300 gap-3">
              <img src="/Images/reload.svg" className="h-[42px]" alt="" />
              <p className="">QUICK RETURNS AND EXCHANGES</p>
            </div>
         

            <div className="flex justify-center items-center flex-col border-r-2 border-gray-300 gap-3">
              <img src="/Images/headphone.svg" className="h-[50px]" alt="" />
              <p className="">24/7  CUSTOMER SERVICE</p>
            </div>

            <div className="flex justify-center items-center flex-col gap-3">
              <img src="/Images/shildVector.svg" className="h-[50px]" alt="" />
              <p className="">100% SECURE PAYMENT</p>
            </div>

            </div>
            </div>

        </div>
    </section>
  );
};

export default FollowUsInstagram;
