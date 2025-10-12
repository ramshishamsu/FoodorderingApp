import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { addOrder } from "../redux/orderSlice";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function genId() {
  return "ORD" + Date.now().toString().slice(-6) + Math.floor(Math.random() * 90 + 10);
}

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const total = items.reduce((s, it) => s + it.priceNumber * it.qty, 0);
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cod");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlace = () => {
    if (!address.trim()) {
      alert("Enter address");
      return;
    }
    const id = genId();
    const order = { id, items, total, address, payment, createdAt: new Date().toISOString() };
    dispatch(addOrder(order));
    dispatch(clearCart());
    navigate(`/order-success/${id}`);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col p-4">
      <div className="flex-1 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-extrabold text-orange-500 text-center">Checkout</h1>

        {/* Order Summary */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
          <div className="space-y-2">
            {items.map((it) => (
              <div key={it.id} className="flex justify-between">
                <span>{it.name} × {it.qty}</span>
                <span>₹{it.priceNumber * it.qty}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xl font-bold text-orange-500 flex justify-between">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <label className="block mb-2 font-semibold">Delivery Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address..."
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-orange-500"
            rows={4}
          />
        </div>

        {/* Payment Method */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <label className="block mb-2 font-semibold">Payment Method</label>
          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
                className="accent-orange-500"
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={payment === "online"}
                onChange={() => setPayment("online")}
                className="accent-orange-500"
              />
              Online Payment
            </label>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlace}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl text-lg"
        >
          Place Order
        </button>
      </div>

      {/* Bottom Navigation */}
   
    </div>
  );
}
