import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 border-t-[1px] border-black pt-3">
          {/* Contact Section */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/3 min-h-[210px] border-r-[1px] border-black">
            <h3 className="text-gray-600 text-lg font-medium mb-2">Contact Us</h3>
            <p className="text-sm text-center text-gray-500">
              Working Hours Monday to Saturday <br /> 9:00am to 6:30pm
            </p>
            <p className="text-gray-700 mt-4 font-semibold">+91-9999999999</p>
          </div>

          {/* Signup Form Section----- */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/3">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#E66E06] to-[#6E3000] bg-clip-text text-transparent p-1">
          Lets Get in Touch
      </h2>
            <p className="text-sm text-gray-500 mb-4">
              Lorem Ipsum is simply dummy text of the printing
            </p>

            {/* Email Input Form */}
            <div className="w-full md:w-2/3 flex items-center border border-gray-300 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow p-2 px-4 focus:outline-none"
              />
              <button className="bg-orange-700 text-white px-6 py-2 font-semibold">SIGNUP</button>
            </div>

            {/* Policy Agreement */}
            <p className="text-xs text-gray-400 mt-2">
              I Accept Privacy Policy and Cookies Policy
            </p>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/3 min-h-[210px]  border-l-[1px] border-black ">
            <h3 className="text-gray-600 text-lg font-medium mb-2">Follow Us on Social Media</h3>
            <div className="flex justify-center md:justify-end space-x-4 text-gray-600 text-xl">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaPinterestP /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
