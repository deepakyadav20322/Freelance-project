import React, { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import Devide from "../components/Devide";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

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

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (

    <section>
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left Section - Product Images */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-4">
          {/* Thumbnail images */}
          {[1, 2, 3, 4, 5].map((item, index) => (
            <img
              key={index}
              src={`/Images/productEaring.png`} // Update with actual image paths
              alt={`Thumbnail ${item}`}
              className="w-16 h-16 md:w-20 md:h-20 object-cover border hover:border-orange-500 cursor-pointer"
            />
          ))}
        </div>
        <div>
          {/* Main Product Image */}
          <img
            src="/Images/productEaring.png" // Update with actual main image
            alt="Main Product"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="space-y-6">
        {/* SKU and Product Title */}
        <div>
            <div className="flex flex-row justify-between items-center">

          <p className="text-sm text-gray-500">SKU: AGDJSAG4515</p>
          <button className="">
         <IoShareSocialOutline className="inline-block mr-2"/>
         Share
         </button>
            </div>
          <h2 className="text-3xl lg:text-4xl font-semibold">Large Charlotte Hoops</h2>
        </div>

        {/* Price and Discount */}
        <div className="space-y-2 flex flex-row gap-x-4">
          <p className="text-2xl lg:text-3xl font-bold text-[#6e3000]">₹3,000</p>
          <p className="text-xl lg:text-2xl line-through text-gray-500">₹5,000</p>
          <p className="text-[#6e3000]">(50% off)</p>
         
        </div>
      <p className="text-sm text-gray-500">Inclusive of all taxes. Free Shipping</p>
    
      <div className="border-[1px] w-full"></div>
        {/* Product Description */}
        <p className="text-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Size Options */}
        <div className="space-y-2">
          <p className="text-lg font-medium">Size: 2.4</p>
          <select className="block w-full border border-gray-300 p-2">
            <option>Choose an option</option>
            <option>Size 2.4</option>
            <option>Size 2.6</option>
            <option>Size 2.8</option>
          </select>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center border border-gray-300">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 text-lg font-semibold"
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 text-lg font-semibold"
            >
              +
            </button>
          </div>
          <button className="bg-[#6e3000] text-white py-2 px-6 w-full md:w-">
            Add to Cart
          </button>
          <button className="border border-gray-300 py-2 px-6 rounded-md w-full md:w-auto">
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </button>
        </div>
        <button className="bg-orange-500 text-white py-3 w-full font-semibold">
          Buy Now
        </button>
      </div>
    </div>
     
         {/*---------------------- Description section ------------------------- */}
           <div className="py-12 border-l-0 border-r-0 border-t-2 border-b-2  border-black border-opacity-40 ">
         <div className="max-w-7xl mx-auto">
             <h2 className="text-2xl font-medium">Description</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      

         {/* table ----- */}
         <div class="overflow-x-auto max-w-96 my-8">
  <table class="min-w-full text-left table-auto border-collapse">
    <tbody>
      
      <tr class="border-b border-gray-300">
        <td className="p-2 font-semibold text-gray-700">Model</td>
        <td className="p-2 text-gray-600">#8786867</td>
      </tr>
    
      <tr class="border-b border-gray-300">
        <td className="p-2 font-semibold text-gray-700">Style</td>
        <td className="p-2 text-gray-600">Classic style</td>
      </tr>
      
      <tr class="border-b border-gray-300">
        <td className="p-2 font-semibold text-gray-700">Certificate</td>
        <td className="p-2 text-gray-600">ISO-898921212</td>
      </tr>
      
      <tr class="border-b border-gray-300">
        <td className="p-2 font-semibold text-gray-700">Size</td>
        <td className="p-2 text-gray-600">34mm x 450mm x 19mm</td>
      </tr>
      
      <tr class="border-b border-gray-300">
        <td className="p-2 font-semibold text-gray-700">Memory</td>
        <td className="p-2 text-gray-600">36GB RAM</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
</div>
 
   <Devide/>
   {/* Related products----------------- */}

   <div className=" mb-6 max-w-7xl w-full mx-auto">
   <div className="flex flex-col justify-center items-center w-full relative">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#E66E06] to-[#6E3000] bg-clip-text text-transparent p-1">
          Related Products
      </h2>
   <Link
          to={"/products"}
          className="absolute right-3 top-1/2 text-sm font-base text-[#E66E06] hover:border-b-[1px] border-[#E66e06]"
        >
          VIEW ALL
        </Link>
      </div>
   <div className="py-6 ">
        <div className=" grid grid-cols-4 gap-6 p-2">
          {jewelryProducts.map((product, index) => (
            <div key={index} className="slider-card ">
              <div className="relative group">
                
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

    </section>
  );
};

export default ProductPage;
