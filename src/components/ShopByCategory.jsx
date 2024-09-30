import React from "react";
import { Link } from "react-router-dom";
const ShopByCategory = () => {
  return (
    <>
      <div className="max-w-7xl m-auto">
        <div className="flex justify-center items-center flex-col relative">
          <Link
            to={"/products"}
            className="absolute right-3 top-1/2 text-sm font-base text-[#E66E06]"
          >
            VIEW ALL
          </Link>
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#E66E06] to-[#6E3000] bg-clip-text text-transparent p-1">
            Shop By Category
          </h2>
          <p className="text-base py-1">OUR EVERYDAY PIECES</p>
        </div>
        <div className="grid grid-cols-6 border border-black w-full">
          {/* --------------------------- */}

          <div className="w-full overflow-hidden relative cursor-pointer">
            <div className="absolute bottom-4 left-4 textlg font-medium text-white z-10">
              Bracelets
            </div>
            <div className="absolute inset-0 bg-transparent bg-[linear-gradient(0deg,rgba(230,110,6,0.6)_-69.03%,rgba(255,255,255,0)_100%)]"></div>
            <img src="/Images/spcat1.png" alt="category one" />
          </div>

          <div className="w-full overflow-hidden relative cursor-pointer">
            <div className="absolute bottom-4 left-4 textlg font-medium text-white z-10">
              Chain
            </div>
            <img src="/Images/spcat2.png" alt="category one" />
            <div className="absolute inset-0 bg-transparent bg-[linear-gradient(0deg,rgba(230,110,6,0.6)_-69.03%,rgba(255,255,255,0)_100%)]"></div>
          </div>

          <div className="w-full overflow-hidden relative cursor-pointer">
            <div className="absolute bottom-4 left-4 textlg font-medium text-white z-10">
              Bracelets
            </div>
            <div className="absolute inset-0 bg-transparent bg-[linear-gradient(0deg,rgba(230,110,6,0.6)_-69.03%,rgba(255,255,255,0)_100%)]"></div>
            <img src="/Images/spcat1.png" alt="category one" />
          </div>

          <div className="w-full overflow-hidden relative cursor-pointer">
            <div className="absolute bottom-4 left-4 textlg font-medium text-white z-10">
              Chain
            </div>
            <img src="/Images/spcat2.png" alt="category one" />
            <div className="absolute inset-0 bg-transparent bg-[linear-gradient(0deg,rgba(230,110,6,0.6)_-69.03%,rgba(255,255,255,0)_100%)]"></div>
          </div>

          <div className="w-full overflow-hidden relative cursor-pointer">
            <div className="absolute bottom-4 left-4 textlg font-medium text-white  z-10">
              Bracelets
            </div>
            <div className="absolute inset-0 bg-transparent bg-[linear-gradient(0deg,rgba(230,110,6,0.6)_-69.03%,rgba(255,255,255,0)_100%)]"></div>
            <img src="/Images/spcat1.png" alt="category one" />
          </div>

          <div className="w-full overflow-hidden relative cursor-pointer">
            <div className="absolute bottom-4 left-4 textlg font-medium text-white z-10">
              Chain
            </div>
            <img src="/Images/spcat2.png" alt="category one" />
            <div className="absolute inset-0 bg-transparent bg-[linear-gradient(0deg,rgba(230,110,6,0.6)_-69.03%,rgba(255,255,255,0)_100%)]"></div>
          </div>

          {/* ------------------------------ */}
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
