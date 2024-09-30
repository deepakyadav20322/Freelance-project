import React from "react";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 max-w-7xl mx-auto w-full mb-8">
      {/* Left Section - Thank You & Billing Address */}
      <div className="w-full md:w-1/2 mb-8 ">
        <h2 className="text-3xl font-semibold mb-2">Thanks you for purchase</h2>
        <p className="text-gray-600 mb-8">
          Your order will be processed within 2 working days. We will notify you
          by email once your order has been shipped.
        </p>

        {/* Billing Address */}
        <h3 className="text-2xl font-semibold mb-4">Billing Address</h3>
        <div className="text-gray-700 space-y-2">
        <table border="1" cellpadding="8" cellspacing="0" className=" text-left ">
  <tr>
    <th className="pr-8">Name</th>
    <td className="pl-8">Jony</td>
  </tr>
  <tr>
    <th  className="pr-8">Address</th>
    <td className="pl-8">E-24, Uttam Nagar Om Vihar <br /> New Delhi - 110059</td>
  </tr>
  <tr>
    <th  className="pr-8">Phone</th>
    <td className="pl-8">9999999999</td>
  </tr>
  <tr>
    <th  className="pr-8">Email</th>
    <td className="pl-8">itsmejony@gmail.com</td>
  </tr>
</table>

        </div>

        {/* Track Order Button */}
        <button className="bg-orange-500 text-white px-20 py-3 mt-8">
          Touch Your Order
        </button>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-1/3 ">
        <div className=" bg-[#6e3000] text-white p-6 rounded-lg shadow-lg relative">
            <div className="bg-white w-8 h-8 rounded-full absolute top-[34%] -left-3"></div>
            <div className="bg-white w-8 h-8 rounded-full absolute top-[34%] -right-3"></div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {/* Order Details */}
          <div className="text-sm space-y-2 border-b border-dashed border-gray-300 pb-4">
            <div className="flex justify-between">
              <p>Date</p>
              <p>02 Oct 2023</p>
            </div>
            <div className="flex justify-between">
              <p>Order Number</p>
              <p>0215-45152152</p>
            </div>
            <div className="flex justify-between">
              <p>Payment Method</p>
              <p>Cash</p>
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-4 mt-4">
            <div className="flex justify-between">
              <p>Size: 12 <br /> Qty: 01</p>
              <p>₹3,000</p>
            </div>
            <div className="flex justify-between">
              <p>Size: 12 <br /> Qty: 01</p>
              <p>₹3,000</p>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="mt-4 text-sm">
            <div className="flex justify-between">
              <p>Sub Total</p>
              <p>₹3,000</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>₹500</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>₹50</p>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <p>Order Total</p>
              <p>₹3,550</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
