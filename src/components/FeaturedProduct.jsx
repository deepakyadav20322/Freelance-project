import React from 'react'
import { FiShoppingBag } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoShareSocialOutline } from 'react-icons/io5';

const FeaturedProduct = () => {

  const jewelryProducts = [
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
  ];

  return (
    <section className='max-w-7xl w-full mx-auto'>
      <div className='flex flex-col justify-center items-center pb-3'>
       <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#E66E06] to-[#6E3000] bg-clip-text text-transparent p-1">
       Feature Products
      </h2>
      </div>

      {/* --------------- Featured Product section ----------------  */}
      <div className='flex justify-between items-start'>
        <div className='w-[560px] h-[700px] overflow-hidden'>
          <img src={'/Images/collectionJwel.png'} alt="ring Img" className='w-full h-full' />
        </div>
        <div className='flex flex-col justify-center items-center gap-y-4'>
                  {/* fetured-product row-1  */}
        <div className=" grid grid-cols-4 gap-4 p-3">
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

                    {/* featured-product row-2  */}

        <div className=" grid grid-cols-4 gap-4 p-3">
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

     </div>
       
      </div>  


      {/* --------------- Premium collection discover Img section ----------------  */}
   <div className='relative my-20'>
    <img src="/Images/discover.png" alt="discover img" className="w-full h-full" />
    <div className='absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2'>
      <h2 className="text-3xl font-semibold p-1 text-white">
      FIND OUR PREMIUM RANGE 
      </h2>
      <h2 className="text-3xl font-semibold p-1 text-white">
      UNIQUE COLLECTION
      </h2>
      <button className=' text-white border border-white px-8 py-2 rounded-md mt-4'>DISCOVER THE COLLECTION</button>
   </div>
   </div>

     {/* --------------- YouTube vide section  ----------------  */}
     <div className=''>
      <img src="/Images/youtubVid.png" alt="" className='w-full h-[25rem]' />

     </div>

    </section>
  )
}

export default FeaturedProduct