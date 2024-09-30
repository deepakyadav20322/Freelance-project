import React from "react";

const HeroSection = () => {
  return (
    <section>
    <div
      className="relative bg-cover bg-center h-[80vh] text-[#6E3000] bg-[linear-gradient(360deg,rgba(255,255,255,0.97)_23.38%,rgba(255,255,255,0)_100%)]"
      style={{
        backgroundImage:
          "url(/Images/HomeImage.png)",
      }}
    >
     
     <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-white/90 via-transparent to-transparent">
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent ">
        <div className="flex flex-col items-center justify-end h-full text-center pb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-[65rem] w-full ">
            UNIQUE AND AUTHENTIC VINTAGE DESIGNER JEWELLERY
          </h1>
          <p className="mb-2 font-semibold">Now available at The Hirapanna</p>
          <button className="border border-[#6E3000] font-semibold px-4 py-2">
            DISCOVER THE COLLECTION
          </button>
        </div>
      </div>
      </div>

    </div>
    {/* three svg indicator section ------------------ */}
    <div className=" flex flex-row justify-between items-center py-10 max-w-7xl mx-auto mt-8">
         <div className="bg-white shadow-custom-shadow relative px-4 text-center rounded-md w-[250px] flex flex-col items-center pt-8 pb-6">
           <img className="absolute -top-14 w-[4.4rem] h-[5rem]" src={"/Images/shield.svg"} alt="" />
          
            <h2 className="font-semibold text-xl mb-2">All India Shipping</h2>
            <p className="text-gray-500 text-lg">All India Shipping is the
            Process of Importing</p>
         </div>
         <div className="pt-10">
         <div className="bg-white shadow-custom-shadow relative px-4 text-center rounded-md w-[250px] flex flex-col items-center pt-8 pb-4">
           <img className="absolute -top-14 w-[4.4rem] h-[5rem]" src={"/Images/image2.png"} alt="" />
          
            <h2 className="font-semibold text-xl mb-2">Secured service</h2>
            <p className="text-gray-500 text-lg">Secured Services. Heavy
            Commercial/Industrial</p>
         </div>
         </div>
         <div className="bg-white shadow-custom-shadow relative px-4 text-center rounded-md w-[250px] flex flex-col items-center pt-8 pb-6">
           <img className="absolute -top-14 w-[4.4rem] h-[6rem]" src={"/Images/delivery-truck.svg"} alt="" />
          
            <h2 className="font-semibold text-xl mb-2">Secured service</h2>
            <p className="text-gray-500 text-lg">Fast Deliver is a Fast
            Growing and Promising</p>
         </div>
    </div>
    </section>
   
  );
};

export default HeroSection;


