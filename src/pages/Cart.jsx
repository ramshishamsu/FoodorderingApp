import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function Cart() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = items.reduce((s, it) => s + it.priceNumber * it.qty, 0);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col p-4">
      <div className="flex-1 max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-orange-500 text-center">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center text-gray-400">
            <p>Your cart is empty.</p>
            <Link to="/" className="text-orange-500 underline mt-2 inline-block">Browse menu</Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((it) => (
                <div key={it.id} className="bg-gray-800 p-4 rounded-xl flex flex-col md:flex-row items-center justify-between shadow-md">
                  <div className="flex items-center gap-4 w-full md:w-2/3">
                    <img src={it.image} alt={it.name} className="w-24 h-24 object-cover rounded-lg"/>
                    <div>
                      <h3 className="font-semibold text-lg">{it.name}</h3>
                      <div className="text-sm text-gray-400">{it.priceText}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 md:mt-0">
                    <button onClick={()=>dispatch(decrement(it.id))} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">➖</button>
                    <div className="px-2">{it.qty}</div>
                    <button onClick={()=>dispatch(increment(it.id))} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">➕</button>
                    <button onClick={()=>dispatch(removeFromCart(it.id))} className="ml-4 text-red-500 hover:text-red-400 font-medium">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gray-800 p-4 rounded-xl flex flex-col md:flex-row justify-between items-center shadow-md">
              <div className="mb-3 md:mb-0">
                <div className="text-gray-400 text-sm">Total</div>
                <div className="text-2xl font-bold text-orange-500">₹{total}</div>
              </div>
              <button
                onClick={()=>navigate("/checkout")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Bottom navigation */}
    </div>
  );
}


