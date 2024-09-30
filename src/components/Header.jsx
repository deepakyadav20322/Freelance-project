import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { CgSearch } from "react-icons/cg";
const Header = () => {
  return (
    <header className="bg-[#e9f1ed]">
      <div className="container mx-auto flex items-center justify-between py-4 px-12">
        {/* Logo */}
        <div>
          <img src="/Images/logo.svg" alt="Logo" className="h-20" />
        </div>
        {/* Navigation and SearchBar--------------------------------*/}
          <div className="header-middle flex flex-col items-center gap-y-3">
            <div className="searchBar w-[34rem] h-[2.8rem] border-[#c1c1c1] border-2 flex justify-start items-center ">
                <span className="px-2 py-1"><CgSearch size={23}/></span>
                <input className=" outline-none ml-2 mr-2 h-full w-full bg-[#e9f1ed]" type="text" name="" id="" placeholder="Search"  />
            </div>
        <nav className="hidden md:flex space-x-6 w-md">
          <div className="relative text-lg font-normal ">
            <img
              src="https://s3-alpha-sig.figma.com/img/5339/c94c/13c15a44638011b1f13c16fc502ee24e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h~22r0kpK28yJ4tS1fu2eBnTlnkBQBjeyogpbb5g87HyWkSSG4LZaYYgGU4FFaJi1QUPcNriaaZrOqgH8O7xw6u6-SPXvbsI9ND0OPHHDMxI4ds~NrDMRBu3vQwGAFRijmCSPn~RpHuQIOSNhGklMlqyIZP-SmzCYdZ5r5xfW5EmrMPdv-JF60Rg7JJcwydpeASK4IdHTn5Y1OkSQSdt1Za8lEnaPGdEaRDyt5mQCrLpwrr9yQvFLuJDlDf~XePyTDPud4cUrMRUwvOkt~Agv4Li6oK7FFV4vc20F-OogH5WamQD4yWuLuTAsuRQQUzEUO2o3ejWLXLeoUXtzKoGOA__"
              alt="ring"
              className="w-8 h-8 absolute top-0 right-[30%] z-10"
            />
            <a href="/" className="text-orange-500 hover:cursor-pointer z-20">
              What's New
            </a>
          </div>
          <a href="/" className="text-gray-600 hover:text-black">
           Gifting
          </a>
          <a href="/product" className="text-gray-600 hover:text-black">
            Shop By Category
          </a>
          <a href="/product" className="text-gray-600 hover:text-black">
            Shop By Collection
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            Gifting
          </a>
          <a href="/" className="text-gray-600 hover:text-black">
            Material
          </a>
        </nav>
        </div>
        {/* Utility Links */}
        <div className="flex space-x-5 ">
          <div className="">
            <a href="/" className="text-black">
              <LuUser size={18} />
            </a>
          </div>

          <div className="relative">
            <a href="/" className="text-black">
              <div className="absolute -top-5 left-2 bg-[#9A602E] w-5 h-5 rounded-full flex justify-center items-center">
                <span className="text-white text-sm">2</span>
              </div>
              <FaRegHeart size={16} />
            </a>
          </div>

          <div className="relative">
            <a href="/" className="text-black">
              <div className="absolute -top-5 left-2 bg-[#9A602E] w-5 h-5 rounded-full flex justify-center items-center">
                <span className="text-white text-sm">2</span>
              </div>
              <FiShoppingBag />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
