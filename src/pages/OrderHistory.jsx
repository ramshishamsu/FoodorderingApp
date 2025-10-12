import React from "react";
import { useSelector } from "react-redux";
import BottomNav from "../components/BottomNav";

export default function OrderHistory() {
  const history = useSelector((s) => s.orders.history || []);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col p-4">
      <div className="flex-1 max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-orange-500 text-center">Order History</h1>

        {history.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">You have no past orders yet.</p>
        ) : (
          <div className="space-y-4">
            {history.map((o) => (
              <div key={o.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-200">Order ID: {o.id}</div>
                    <div className="text-sm text-gray-400">{new Date(o.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="text-orange-500 font-bold text-lg">₹{o.total}</div>
                </div>
                <div className="mt-2 text-gray-300 text-sm">
                  {o.items.map((it) => (
                    <div key={it.id} className="flex justify-between">
                      <span>{it.name}</span>
                      <span>× {it.qty}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom navigation */}
    </div>
  );
}
