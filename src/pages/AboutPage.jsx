import React from "react";
import { FaPlay } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";


const AboutPage = () => {

    const images = [
       "/Images/wireard3.png",
        '/Images/wireard2.png',
        '/Images/wireard1.png',
    ]
  return (
    <div className="bg-white text-black font-sans">
      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">About Hirapanna</h2>
            <h3 className="text-5xl">Learn More about the company</h3>
            <p className="text-gray-600">
              The Indian rupee is the official currency in the Republic of India.
              The rupee is subdivided into 100 paise, though as of 2023, coins of
              denomination of 1 rupee are the lowest value in circulation.
            </p>
            <div className="flex flex-row justify-start items-center gap-2 pt-20">
            <a
              href="#"
              className=" bg-orange-500 text-white w-12 h-12 flex justify-center items-center rounded-full font-semibold shadow-md hover:bg-orange-600 transition"
            >
             <FaPlay/>
           
            </a>
            <span className="text-lg font-medium">Play Now</span>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="/Images/about1.png"
              alt="Company image"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

    

      {/* History Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative">
            <img
              src="/Images/about2.png"
              alt="Company history image"
              className="w-[500px] h-[500px] object-cover"
            />
            <div className=" w-[500px] h-[510px] top-6 left-6 absolute border-4 border-orange-500 rounded-t-full "></div>
          </div>

          {/* Text Section */}
          <div className="space-y-4 flex justify-center items-start flex-col">
            <h2 className="text-4xl font-bold">History of Noorani Company</h2>
            <p className="text-gray-600 pt-8">
            The Indian rupee is the official currency in the Republic of India. The rupee is The Indian rupee is the official currency in the Republic of India. The rupee is The Indian rupee is the official currency in the Republic of India. The rupee is The Indian rupee is the official currency in the Republic of India. The rupee is The Indian rupee is the official currency in the Republic of India. The rupee is The Indian rupee is the official currency in the Republic of India. The rupee is 
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------**************-------------------------- */}

      <div className="grid grid-cols-3 max-w-7xl w-full mx-auto gap-4 my-8 mb-16">
        
        
      <div className="flex flex-col justify-center items-start px-4 py-8">
          
            <div className="flex justify-start items-center gap-x-4 w-[340px]">
                <img src="/Images/orisound.svg" className="w-8 h-8" alt="" />
                <h3 className="text-xl font-medium">Suppot Team</h3>
            </div>
            <p>The Indian rupee is the official currency in the Republic of India. The rupee is </p>
        </div>

        <div className="flex flex-col justify-center items-start px-4 py-8">
          
          <div className="flex justify-start items-center gap-x-4 w-[340px]">
              <img src="/Images/cube.svg" className="w-8 h-8" alt="" />
              <h3 className="text-xl font-medium">Suppot Team</h3>
          </div>
          <p>The Indian rupee is the official currency in the Republic of India. The rupee is </p>
      </div>


      <div className="flex flex-col justify-center items-start px-4 py-8">
          
          <div className="flex justify-start items-center gap-x-4 w-[340px]">
              <img src="/Images/scooter.svg" className="w-8 h-8" alt="" />
              <h3 className="text-xl font-medium">Suppot Team</h3>
          </div>
          <p>The Indian rupee is the official currency in the Republic of India. The rupee is </p>
      </div>



      <div className="flex flex-col justify-center items-start px-4 py-8">
          
          <div className="flex justify-start items-center gap-x-4 w-[340px]">
              <img src="/Images/fileStorage.svg" className="w-8 h-8" alt="" />
              <h3 className="text-xl font-medium">Suppot Team</h3>
          </div>
          <p>The Indian rupee is the official currency in the Republic of India. The rupee is </p>
      </div>


      <div className="flex flex-col justify-center items-start px-4 py-8">
          
          <div className="flex justify-start items-center gap-x-4 w-[340px]">
              <img src="/Images/birla.svg" className="w-8 h-8" alt="" />
              <h3 className="text-xl font-medium">Suppot Team</h3>
          </div>
          <p>The Indian rupee is the official currency in the Republic of India. The rupee is </p>
      </div>


      <div className="flex flex-col justify-center items-start px-4 py-8">
          
          <div className="flex justify-start items-center gap-x-4 w-[340px]">
              <img src="/Images/managements.svg.svg" className="w-8 h-8" alt="" />
              <h3 className="text-xl font-medium">Suppot Team</h3>
          </div>
          <p>The Indian rupee is the official currency in the Republic of India. The rupee is </p>
      </div>

      {/* {-------wiread photo design---------------} */}

      <div className=" flex justify-center items-center gap-6 p-4 px-0 mx-auto w-full col-span-3">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative ${
            index % 2 !== 0 ? 'translate-y-10' : ''
          }`}
        >
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="object-cover h-96"
          />
        </div>
      ))}
    </div>

   

      </div>

       {/* ----------------------- contact information --------------------------- */}
    
       <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-8">
        <img src="/Images/groupPeople.png" className="w-[350px]" alt=""/>
        <div className="w-full flex justify-center items-start flex-col">
            <h2 className="font-semibold text-3xl">Contact Information</h2>
            <p className="text-lg font-medium">Say something to start a live chat!</p>
            <div className="flex flex-row gap-4 items-center mt-8">
                <div className="flex flex-row items-center mb-6">
                <PiPhoneCallFill className="text-orange-500"/>
                <p>123-456-7890</p>
                </div>
                <div className=" flex flex-row ites-center mb-6">
                <MdOutlineEmail className="text-orange-500"/>
                <p>sjfdhskd@gmail.com</p> 
                </div>
                </div>
            
            <div className="flex flex-row gap-4 items-center">
                <IoLocation className="text-orange-500"/>
                <p>123-456-7890</p>
            </div>
            <button className="bg-orange-500 text-white text-base font-semibold text-center px-24 py-3 mt-4">Contact Us</button>
        </div>
       </div>
    </div>
  );
};

export default AboutPage;
