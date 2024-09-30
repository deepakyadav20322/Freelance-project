import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { useState } from "react";

const ProductList = () => {
  const [price, setPrice] = useState(24000);

  const categories = [
    "Braslet",
    "silver ring",
    "Diamong chain",
    "circular",
    "Rectangle",
  ];

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

    {
      title: "Pearl Earrings",
      price: 500,
      off: 50, // 5% off
      img: "/Images/roundring.png",
    },

    {
      title: "Pearl Earrings",
      price: 500,
      off: 50, // 5% off
      img: "/Images/roundring.png",
    },

    {
      title: "Pearl Earrings",
      price: 500,
      off: 50, // 5% off
      img: "/Images/roundring.png",
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
  ];

  return (
    <section>
      {/* ---------------- product list Header section ------------------ */}

      <div className="relative">
        <div className="absolute top-1/4 right-[10%] text-white">
          <h1 className="text-2xl">New Arival</h1>
          <h2 className="text-4xl font-semibold py-2 pt-4 ">Shop Chain</h2>
          <p className="max-w-[440px] w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys{" "}
          </p>
          <button className="border border-white p-2 my-3">SHOP NOW</button>
        </div>
        <img src="/Images/productListHeader.png" alt="" />
      </div>

      {/* ---------------- product list section --------------------------------------- */}
      <div className="flex justify-start items-start max-w-7xl mx-auto py-5">
        {/* ===========  Filter side section   =========== */}
        <div className="w-80 flex flex-col gap-y-8 px-4 pl-1">
          <div className="w-80">
            <h2 className="mb-4 text-xl font-semibold">Categories</h2>
            <div className="flex flex-col justify-start items-start gap-y-3">
              {categories.map((cat, ind) => (
                <Link
                  className="hover:border-b-[1px] border-black"
                  key={ind}
                  Link
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
         {/* price range box -------- */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Price</h3>
              <div className="w-8 h-1 bg-orange-500 rounded"></div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border border-gray-400"></div>
              <input
                type="range"
                min="0"
                max="100000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="flex-grow appearance-none h-1 bg-gray-300 rounded-lg outline-none"
              />
              <div className="w-4 h-4 border border-gray-400"></div>
            </div>

            <p className="mt-2 text-gray-600">RANGE: ₹ 0 - ₹ {price}</p>
          </div>

            {/* Featured product--- */}
            <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Featured product</h3>
              <div className="w-8 h-1 bg-orange-500 rounded"></div>
              </div>
               {/* product box */}
               <div className="flex flex-col gap-y-4">
                {[1,2,3,4,5].map((item, index) => (
                <div key={index} className="flex gap-x-4">
                  <img src="/Images/Earings.png" alt="" className="w-16 h-16" />
                  <div className="flex flex-col justify-center items-start gap-1">
                    <p className="font-normal text-base">DIAMOND CRISTRIAL STUD</p>
                    <div className="flex flex-row gap-3">
                    <p className="text-gray-400">$1200</p>
                    <p className="line-through text-slate-300">$500</p>
                    <p className=" text-[#6e3000] font-semibold">50% OFF</p>
                    </div>
                  </div>
                </div>
                ))}
                
            </div>
            </div>

        </div>

        <div className="w-full">
          {/* {shorting box ----------} */}
          <div className="  pb-6 w-full flex justify-between items-center">
            <p className="pr-4">Showing 1-12 of 29 items</p>
            <select className="w-40 border-2 border-slate-300 p-3">
              <option>Defalt shorting</option>
              <option>Price</option>
              <option>Popularity</option>
              <option>Rating</option>
            </select>
          </div>
          {/* ======= Product view section ============= */}
          {/* <div className="flex justify-center items-center w-full mx-auto"> */}
          <div className="grid grid-cols-3 gap-4 w-full m-auto">
            {jewelryProducts.map((product, index) => (
              <div key={index} className="slider-card ">
                <div className="relative group">
                  {" "}
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
          {/* </div> */}
        </div>
      </div>

      {/* {----------------------Pagination box------------------------} */}
      <div className="flex justify-center items-center gap-4 py-4 text-black my-12">
        <button className="border rounded-full border-black w-8 h-8 aspect-square">
          {"<"}
        </button>
        <button className="border border-black  w-8 h-8  rounded-full bg-[#6e3000] text-white hover:bg-[#6e3000]">
          1
        </button>
        <button className="border border-black  w-8 h-8  rounded-full hover:bg-[#6e3000] hover:text-white bg-[#fffbf0]">
          2
        </button>
        <button className="border border-black  w-8 h-8  rounded-full hover:bg-[#6e3000] hover:text-white bg-[#fffbf0]">
          3
        </button>
        <button className="border border-black  w-8 h-8  rounded-full hover:bg-[#6e3000] hover:text-white bg-[#fffbf0]">
          4
        </button>
        <button className="border border-black  w-8 h-8  rounded-full hover:bg-[#6e3000] hover:text-white bg-[#fffbf0]">
          5
        </button>
        <button className="border border-black  w-8 h-8  rounded-full hover:bg-[#6e3000] hover:text-white bg-[#fffbf0]">
          {">"}
        </button>
      </div>
    </section>
  );
};

export default ProductList;
