import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const orders = useSelector((state) => state.orders.history || []);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-900 text-gray-400">
        <h2 className="text-2xl font-semibold mb-2">You’re not logged in.</h2>
        <p className="text-gray-500 mb-4">Please log in to view your account details.</p>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-10">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-extrabold text-orange-500 text-center mb-8">
          My Account
        </h2>

        {/* User Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <p className="text-gray-400 font-medium">Full Name</p>
            <p className="text-xl font-semibold">{user.name}</p>
          </div>
          <div>
            <p className="text-gray-400 font-medium">Phone Number</p>
            <p className="text-xl font-semibold">{user.phone}</p>
          </div>
          {user.email && (
            <div className="md:col-span-2">
              <p className="text-gray-400 font-medium">Email Address</p>
              <p className="text-xl font-semibold">{user.email}</p>
            </div>
          )}
        </div>

        {/* Order Summary Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">Order History</h3>
          {orders.length === 0 ? (
            <p className="text-gray-400">You don’t have any orders yet.</p>
          ) : (
            <div className="space-y-3">
              {orders.slice().reverse().map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-orange-500 transition"
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-semibold text-lg">Order ID: {order.id}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-orange-400 font-semibold">₹{order.total}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
