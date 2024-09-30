import React from "react";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center mb-8">
      <div className="max-w-7xl w-full p-10 grid grid-cols-1 lg:grid-cols-5 gap-8 ">
        {/* Left Contact Information Section */}
        <div className="relative bg-cover bg-center rounded-lg p-10 flex flex-col justify-between h-full col-span-2  " style={{ backgroundImage: "url('/Images/contactPage.png')" }}>
        <div className="absolute inset-0 bg-[#6e3000] opacity-70 rounded-lg"> </div>
          <div className="relative z-10 p-10 text-white">
            <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
            <p className="text-sm mb-12">Say something to start a live chat!</p>
            
            <div className="flex items-center mb-5">
              <span className="mr-4 text-lg"><FaPhoneAlt color="white"/></span>
              <p>+1012 3456 789</p>
            </div>

            <div className="flex items-center mb-5">
              <span className="mr-4 text-lg">✉️</span>
              <p>demo@gmail.com</p>
            </div>

            <div className="flex items-center mb-4">
              <span className="mr-4 text-lg"><IoLocationOutline size={25} /></span>
              <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 relative">
            <a href="#!" className="text-white text-2xl bg-[#ccb162] p-2 aspect-square rounded-full"><FiTwitter/></a>
            <a href="#!" className="text-white text-2xl bg-[#ccb162] p-2 rounded-full"><AiOutlineInstagram/></a>
            <a href="#!" className="text-white text-2xl bg-[#ccb162] p-2 rounded-full"><AiOutlineDiscord/></a>
           
          </div>
        </div>
       

        {/* Right Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-10 col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input type="text" placeholder="First Name" className="w-full outline-none focus:border-black border-0 border-b-2 border-gray-300  p-2 mt-2" />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input type="text" placeholder="Last Name" className="w-full outline-none focus:border-black border-0 border-b-2 border-gray-300 p-2 mt-2" />
            </div>
          </div>
             
          <div className="grid grid-cols-2 gap-4">
          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" placeholder="Email" className="w-full outline-none focus:border-black border-0 border-b-2 border-gray-300 p-2 mt-2" />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Phone Number</label>
            <input type="text" placeholder="+1 012 3456 789" className="w-full outline-none focus:border-black border-0 border-b-2 border-gray-300 p-2 mt-2" />
          </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Select Subject</label>
            <div className="flex items-center space-x-4 mt-2">
              <input type="radio" id="general1" name="subject" className="mr-2" />
              <label htmlFor="general1">General Inquiry</label>

              <input type="radio" id="general2" name="subject" className="mr-2" />
              <label htmlFor="general2">General Inquiry</label>

              <input type="radio" id="general3" name="subject" className="mr-2" />
              <label htmlFor="general3">General Inquiry</label>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Message</label>
            <textarea placeholder="Write your message.." className="w-full border border-gray-300 rounded-md p-2 mt-2" rows="5"></textarea>
          </div>
      
      <div className="flex flex-row justify-end items-center">
          <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-orange-600 flex items-center">
            Send Message
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
