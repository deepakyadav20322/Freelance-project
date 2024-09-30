import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "DIAMOND CRISTIAL STUD", price: 3000, quantity: 2 },
    { id: 2, name: "DIAMOND CRISTIAL STUD", price: 3000, quantity: 2 },
    { id: 3, name: "DIAMOND CRISTIAL STUD", price: 3000, quantity: 2 },
    { id: 4, name: "DIAMOND CRISTIAL STUD", price: 3000, quantity: 2 },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(50); // Example discount
  const shippingCost = 50;
  const gst = 250;

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const total = subtotal + gst + shippingCost - discount;

  return (
    <div className="p-8 max-w-7xl w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-[#6e3000] border-[#9a602e] text-left text-white">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="p-4 flex items-center">
                  <img
                    src={`https://via.placeholder.com/60`} // Placeholder image
                    alt={item.name}
                    className="w-16 h-16 mr-4"
                  />
                  {item.name}
                </td>
                <td className="p-4">₹{item.price}</td>
                <td className="p-4">
                  <div className="flex items-center justify-between w-48 border border-black py-2 px-3 rounded-[2rem] ">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-gray-300 w-6 h-6 flex justify-center items-center rounded-full "
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                    className="bg-gray-300 w-6 h-6 flex justify-center items-center rounded-full "
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4">
                    <div className="flex gap-x-8">
                        <span>₹{item.price * item.quantity}</span>
                        <button className="rounded-full border-gray-400 border-[1px] p-1"><RxCross2/></button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* {coupan code section } */}
        <div className=" flex justify-between items-center border p-3">
        <div className="flex space-x-4">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Coupon Code"
            className="border px-4 py-2 w-96"
          />
          <button className="bg-orange-500 text-white px-12 py-2 rounded">
            APPLY
          </button>
        </div>
        <div className="flex gap-x-4 items-center">
        <span>Continued Shopping</span>
        <button className="bg-orange-500 text-white w-56 py-2 rounded">
          Update Cart
        </button>
        </div>
      </div>
      </div>

     




      <div className="mt-6 max-w-[25rem] ml-auto bg-[#ccb162] bg-opacity-10  ">
        <h3 className="text-lg font-semibold bg-[#6e3000] border-[#9a602e] px-5  py-2 text-white">Cart Total</h3>
        <div className="border-t border-b py-2 mt-2 px-5">
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span className="text-lg ">₹{subtotal}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Gst 18%</span>
            <span>₹{gst}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Shipping</span>
            <span>₹{shippingCost}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
        </div>
        <div className="flex justify-between py-4 text-xl font-semibold px-5">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button className="bg-orange-500 text-white w-full py-3 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
