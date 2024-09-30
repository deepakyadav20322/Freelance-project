// import React from 'react';

// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

//  const Slider = ()=>{

//     const jewelryProducts = [
//         {
//           title: "Gold Necklace",
//           price: 1200,
//           off: 15, // 15% off,
//           img: "/Images/Earings.png",
//         },
//         {
//           title: "Diamond Ring",
//           price: 3500,
//           off: 20, // 20% off
//           img: "/Images/diomondEar.png",
//         },
//         {
//           title: "Silver Bracelet",
//           price: 250,
//           off: 10, // 10% off
//           img: "/Images/neckles.png",
//         },
//         {
//           title: "Pearl Earrings",
//           price: 500,
//           off: 50, // 5% off
//           img: "/Images/roundring.png",
//         },
//       ];

//       return (
//         <>
//         </>
//       )

//  };

//  export default Slider;/
























import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; // Import only pagination styles since we don't need navigation arrows
// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FiShoppingBag } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';



const Slider = ({productsData}) => {

    // const jewelryProducts = [
    //     {
    //       title: "Gold Necklace",
    //       price: 1200,
    //       off: 15, // 15% off,
    //       img: "/Images/Earings.png",
    //     },
    //     {
    //       title: "Diamond Ring",
    //       price: 3500,
    //       off: 20, // 20% off
    //       img: "/Images/diomondEar.png",
    //     },
    //     {
    //       title: "Silver Bracelet",
    //       price: 250,
    //       off: 10, // 10% off
    //       img: "/Images/neckles.png",
    //     },
    //     {
    //       title: "Pearl Earrings",
    //       price: 500,
    //       off: 50, // 5% off
    //       img: "/Images/roundring.png",
    //     },
    //     {
    //       title: "Pearl Earrings",
    //       price: 500,
    //       off: 50, // 5% off
    //       img: "/Images/roundring.png",
    //     },
    //     {
    //       title: "Pearl Earrings",
    //       price: 500,
    //       off: 50, // 5% off
    //       img: "/Images/roundring.png",
    //     },
    //     {
    //       title: "Pearl Earrings",
    //       price: 500,
    //       off: 50, // 5% off
    //       img: "/Images/roundring.png",
    //     },
    //   ];

  return (
    <div className="max-w-7xl mx-auto w-full mb-12">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}  // Default to 1 slide for mobile
        pagination={{ clickable: true }}  // Enable pagination with clickable dots
        modules={[Pagination,Navigation]}  // Only include Pagination module
        className="mySwiper cursor-pointer"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >

      {productsData.map((product, index) => (
     <SwiperSlide key={index} className=''>
    
            <div className="slider-card ">
              <div className="relative group">
                {" "}
                <div className="absolute inset-0 bg-transparent group-hover:bg-[linear-gradient(0deg,rgba(230,110,6,0.5)_-69.03%,rgba(255,255,255,0)_100%)] transition-all duration-600"></div>
                <div className="absolute top-1/3 right-4 hidden  group-hover:block">
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <span className="bg-white p-1 cursor-pointer  rounded-md  border hover:border-[#000]">
                      <IoMdHeartEmpty size={20} className="text-[#9a602e]" />
                    </span>
                    <span className="bg-white p-1 cursor-pointer rounded-md  border hover:border-[#000]">
                      <FiShoppingBag size={20} className="text-[#9a602e]" />
                    </span>
                    <span className="bg-white p-1 cursor-pointer rounded-md border hover:border-[#000]">
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
      </SwiperSlide>
          ))}
           </Swiper>
          </div>
  );
};

export default Slider;
