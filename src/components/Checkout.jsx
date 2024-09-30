import React, { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-8 max-w-7xl mx-auto w-full">
      {/* Left Section - Contact & Delivery Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Contact</h2>
        <form className="space-y-4">
          {/* Contact */}
          <div>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="border border-gray-400 w-full p-2"
            />
            <label className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              Email me with news and offers
            </label>
          </div>

          {/* Delivery */}
          <h3 className="text-lg font-semibold mt-6">Delivery</h3>
          <div className="border border-gray-400 p-2">
            <label className="pb-2 text-gray-400">Country/Region</label>
            <select className=" w-full outline-none">
              <option>India</option>
              <option>America</option>
              <option>Austrelia</option>
              {/* Add more country options */}
            </select>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
         
            <div>
              <input
                type="text"
                className="border border-gray-400 w-full p-2 "
                placeholder="First name (optional)"
              />
            </div>
            <div>
              <input
                type="text"
                className="border border-gray-400 w-full p-2"
                placeholder="Last name"
              />
            </div>
    
            <div className="col-span-2">
              <input
                type="text"
                className="border border-gray-400 w-full p-2"
                placeholder="Address"
              />
            </div>
            <div>
              <input
                type="text"
                className="border border-gray-400 w-full p-2"
                placeholder="Apartment, suite, etc. (optional)"
              />
            </div>
            <div className="grid col-span-2">
            <div className="grid grid-cols-3 gap-2 w-full ">
            <div>
                <input
                  type="text"
                  className="border border-gray-400 w-full p-2 py-4"
                  placeholder="City"
                />
              </div>
              <div className="border border-gray-400 p-1">
                <label className=" text-gray-400">State</label>
                <select className=" w-full outline-none">
                  <option>Uttar pradesh</option>
                  <option>America</option>
                  <option>Austrelia</option>
                  {/* Add more country options */}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  className="border border-gray-400 w-full p-2 py-4"
                  placeholder="PIN code"
                />
              </div>
            </div>
            </div>

            <div className="col-span-2">
              <input
                type="text"
                className="border border-gray-400 w-full p-2"
                placeholder="Phone"
              />
            </div>
            <div className="col-span-2 flex items-center">
              <input type="checkbox" className="mr-2" />
              Save this information for next time
            </div>
          </div>

          {/* Shipping method */}
          <h3 className="text-lg font-semibold mt-6">Shipping method</h3>
          <input
            type="text"
            placeholder="Enter your shipping address to view available shipping methods"
            className="border border-gray-400 w-full p-2"
            disabled
          />

          {/* Billing address */}
          <h3 className="text-lg font-semibold mt-6">Billing address</h3>
          <div className="">
            <div className="border p-2 mb-3">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="billing"
                className="mr-2"
                defaultChecked
              />
              Same as shipping address
            </label>
            </div>
            <div className="border p-2">
            <label className="flex items-center">
              <input type="radio" name="billing" className="mr-2" />
              Use a different billing address
            </label>
            </div>
          </div>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-1/3 mt-8 md:mt-0">
        <div className="bg-white border border-gray-400 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Billing details</h2>

          {/* Order Items */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  src="/Images/checkoutImg1.png"
                  alt="Product 1"
                  className="h-16 w-[72px] mr-4"
                />
                <div>
                  <p className="font-semibold">DIAMOND CRISTIAL STUD</p>
                  <p className="text-sm">QTY 2</p>
                </div>
              </div>
              <p>₹3,000</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  src="/Images/checkoutImg1.png"
                  alt="Product 2"
                  className="h-16 w-[72px] mr-4"
                />
                <div>
                  <p className="font-semibold">DIAMOND CRISTIAL STUD</p>
                  <p className="text-sm">QTY 2</p>
                </div>
              </div>
              <p>₹3,000</p>
            </div>
          </div>

          {/* Billing Summary */}
          <div className=" mt-4 pt-4">
            <div className="flex justify-between my-8">
              <p>Subtotal</p>
              <p>₹6,000</p>
            </div>
            <div className="flex justify-between mb-8">
              <p>GST 18%</p>
              <p>₹540</p>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <p>Total</p>
              <p>₹6,540</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-[#faf8f0] p-3 my-2 pb-6">
          <h3 className="text-lg font-semibold pb-2">Choose payment method</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                className="mr-2"
                checked={paymentMethod === "Debit/Credit Card"}
                onChange={() => handlePaymentChange("Debit/Credit Card")}
              />
              Debit/Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                className="mr-2"
                checked={paymentMethod === "IMPS/Bank Transfer"}
                onChange={() => handlePaymentChange("IMPS/Bank Transfer")}
              />
              IMPS/Bank Transfer
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                className="mr-2"
                checked={paymentMethod === "UPI Payment app"}
                onChange={() => handlePaymentChange("UPI Payment app")}
              />
              UPI Payment app
            </label>
            <label className="flex items-center relative">
              <input
                type="radio"
                name="payment"
                className="mr-2"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={() => handlePaymentChange("Cash on Delivery")}
              />
              Cash on Delivery

            <span className="absolute top-[20px] left-[24px] text-[8px]">Pay with cash upon delivery.</span>
            </label>
          </div>
          </div>

          {/* Place Order Button */}
          <button className="w-full bg-orange-500 text-white py-2 rounded mt-6">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
