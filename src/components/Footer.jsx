import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#E9F1ED] text-black py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo and description */}
          <div className="space-y-4">
            <img 
              src="/Images/logo.svg" 
              alt="Hirapanna Logo" 
              className="h-20"
            />
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>

          {/* Customer Service Section */}
          <div>
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Our Blogs</a></li>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
              <li><a href="#" className="hover:underline">Shipping & Return</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="font-bold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Our Products</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Catalog Section */}
          <div>
            <h4 className="font-bold mb-4">Catalog</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Earrings</a></li>
              <li><a href="#" className="hover:underline">Pendants</a></li>
              <li><a href="#" className="hover:underline">Rings</a></li>
              <li><a href="#" className="hover:underline">Chain</a></li>
              <li><a href="#" className="hover:underline">Bangles</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-xs text-center md:text-left mb-4 md:mb-0">
              © 2023 Hirapanna Jewellery Company Limited. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex justify-center space-x-4">
              <img src="/Images/PaymentIcons.svg" alt="Stripe" className="h-6" />
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
