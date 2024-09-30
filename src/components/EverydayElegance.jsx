import React from 'react'
  import { IoMdHeartEmpty } from "react-icons/io";
  import { FiShoppingBag } from "react-icons/fi";
  import { IoShareSocialOutline } from "react-icons/io5";
  import { Link } from "react-router-dom";
import Slider from './Slider';

  const EverydayElegance = () => {
    
    const jewelryProducts = [
     
      {
        title: "Silver Bracelet",
        price: 250,
        off: 10, // 10% off
        img: "/Images/neckles.png",
      },
      {
        title: "Pearl Earrings",
        price: 500,
        off: 50, // 5% off
        img: "/Images/roundring.png",
      },
      {
        title: "Gold Necklace",
        price: 1200,
        off: 15, // 15% off,
        img: "/Images/Earings.png",
      },
      {
        title: "Diamond Ring",
        price: 3500,
        off: 20, // 20% off
        img: "/Images/diomondEar.png",
      },
      {
        title: "Pearl Earrings",
        price: 500,
        off: 50, // 5% off
        img: "/Images/roundring.png",
      },
      {
        title: "Gold Necklace",
        price: 1200,
        off: 15, // 15% off,
        img: "/Images/Earings.png",
      },
    ];
  
    return (
      <section className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col justify-center items-center w-full relative">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#E66E06] to-[#6E3000] bg-clip-text text-transparent p-1">
           Everyday Elegance
          </h2>
          <Link
            to={"/products"}
            className="absolute right-3 top-1/2 text-sm font-base text-[#E66E06]"
          >
            VIEW ALL
          </Link>
          <p className='text-sm font-medium text-[#6e3000] pt-2'>DISCOVER ALL TRENDS</p>
        </div>
  
        {/* <div className="py-6">
          <div className=" grid grid-cols-4 gap-6 p-2">
            {jewelryProducts.map((product, index) => (
              <div key={index} className="slider-card ">
                <div className="relative group">
                  {" "}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-[linear-gradient(0deg,rgba(230,110,6,0.6)_-69.03%,rgba(255,255,255,0)_100%)] transition-all duration-600"></div>
                  <div className="absolute top-1/3 right-4 hidden  group-hover:block">
                    <div className="flex flex-col justify-center items-center gap-y-2">
                      <span className="bg-white p-1 cursor-pointer  rounded-md">
                        <IoMdHeartEmpty size={20} className="text-[#9a602e]" />
                      </span>
                      <span className="bg-white p-1 cursor-pointer rounded-md">
                        <FiShoppingBag size={20} className="text-[#9a602e]" />
                      </span>
                      <span className="bg-white p-1 cursor-pointer rounded-md">
                        <IoShareSocialOutline
                          size={20}
                          className="text-[#9a602e]"
                        />
                      </span>
                    </div>
                  </div>
                  <img src={product.img} className=" " alt="" />
                </div>
  
                <div className="flex flex-col px-2">
                  <p>{product.title} </p>
                  <div className="flex flex-row justify-start gap-x-4 items-center">
                    <p>${product.price}</p>
                    <p className="text-gray-400 line-through ">$5000</p>
                    <p className="text-[#6e3000] font-semibold">
                      {product.off}% off
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
  
       <div className='py-6'>
        <Slider productsData={jewelryProducts}/>
       </div>

        {/* -----------------Adervrtisment posters (find your perfect figt) ----------------- */}
        <div className="grid grid-cols-2 gap-3 px-12 my-14">
          <div className="grid grid-rows-3 gap-3 relative">
            <div className="absolute -top-24 -left-48 rotate-[0.8deg]">
              <img src="/Images/heart2.png" className="h-[28rem]" alt="" />
            </div>
            <div className=" row-span-2">
              <img src="/Images/gift.png" alt="" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-center custom-gradient-border relative">
                <div className="absolute inset-0 bg-transparent bg-[linear-gradient(0deg,rgba(230,110,6,0.6)_-69.03%,rgba(255,255,255,0)_100%)]"></div>
                <img
                  src="/Images/sabrianna-ring.png"
                  className="w-48"
                  alt="Ring Image"
                />
              </div>
              <div className="flex items-start justify-center custom-gradient-border bg-[linear-gradient(0deg,#FFFFFF_-39.98%,rgba(255,255,255,0)_100%)]">
                <img
                  src="/Images/chain.png"
                  className="h-[180px]"
                  alt="chain Image"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 gap-3 relative">
            
            
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-center custom-gradient-border relative">
                <div className="absolute inset-0 bg-transparent bg-[linear-gradient(0deg,rgba(230,110,6,0.6)_-69.03%,rgba(255,255,255,0)_100%)]"></div>
                <img
                  src="/Images/bengels.png"
                  className="w-48"
                  alt="Ring Image"
                />
              </div>
              <div className="flex items-center justify-center custom-gradient-border bg-[linear-gradient(0deg,#FFFFFF_-39.98%,rgba(255,255,255,0)_100%)]">
                <img
                  src="/Images/carlos-ring.png"
                  className="h-[88px]"
                  alt="chain Image"
                />
              </div>
            </div>
            <div className=" row-span-2">
              <img src="/Images/premiumRing.png" alt="" />
            </div>
            <div className="absolute -bottom-24 -right-48 rotate-[0.8deg]">
              <img src="/Images/heart1.png" className="h-[28rem]" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default EverydayElegance;
  