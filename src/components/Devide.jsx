import React from 'react';
import { IoDiamondOutline } from "react-icons/io5";

const Devide = () => {
  return (
    <div className="flex items-center justify-center my-8">
      {/* Left side: white line */}
      <div className="flex-grow border-t border-white"></div>

      {/* Left side: black line */}
      <div className="w-1/12 border-t border-black"></div>

      {/* Icon in the center */}
      <div className="mx-4">
        <IoDiamondOutline className="w-6 h-6 text-gray-400" />
      </div>

      <div className="w-1/12 border-t border-black"></div>

{/* Right side: white line */}
<div className="flex-grow border-t border-white"></div>

    </div>
  );
};

export default Devide;
