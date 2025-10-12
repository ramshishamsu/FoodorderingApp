import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import { login, logout } from "../redux/userSlice";

export default function Navbar() {
  const user = useSelector((s) => s.user.user);
  const cartItems = useSelector((s) => s.cart.items);
  const count = cartItems.reduce((s, i) => s + i.qty, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login({ name: form.name || "User", email: form.email, phone: form.phone }));
    } else {
      dispatch(login({ name: form.name, email: form.email, phone: form.phone }));
    }
    setShowModal(false);
  };

  return (
    <>
      <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold text-orange-500 hover:text-orange-400">
            Foodly
          </Link>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-gray-300 hover:text-white z-50"
            onClick={() => setMobileOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link to="/orders" className="text-gray-300 hover:text-white">Orders</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
            {user && <Link to="/account" className="text-gray-300 hover:text-white">Account</Link>}
            <ThemeToggle />
            <button onClick={() => navigate("/cart")} className="relative text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              </svg>
              {count > 0 && <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full font-semibold">{count}</span>}
            </button>
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-gray-200 font-medium">Hi, <strong>{user.name}</strong></span>
                <button onClick={() => dispatch(logout())} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-gray-300 font-medium">Logout</button>
              </div>
            ) : (
              <button onClick={() => setShowModal(true)} className="px-3 py-1 bg-orange-500 hover:bg-orange-600 rounded text-white font-semibold">
                Login / SignUp
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-orange-500 font-bold text-xl">Menu</span>
          <button onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white">
            ✕
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4">
          <Link onClick={() => setMobileOpen(false)} to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link onClick={() => setMobileOpen(false)} to="/orders" className="text-gray-300 hover:text-white">Orders</Link>
          <Link onClick={() => setMobileOpen(false)} to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
          {user && <Link onClick={() => setMobileOpen(false)} to="/account" className="text-gray-300 hover:text-white">Account</Link>}
          <ThemeToggle />
          <button onClick={() => { navigate("/cart"); setMobileOpen(false); }} className="relative text-gray-300 hover:text-white">
            Cart {count > 0 && <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full font-semibold">{count}</span>}
          </button>
          {user ? (
            <button onClick={() => { dispatch(logout()); setMobileOpen(false); }} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded text-gray-300 font-medium">
              Logout
            </button>
          ) : (
            <button onClick={() => { setShowModal(true); setMobileOpen(false); }} className="px-3 py-1 bg-orange-500 hover:bg-orange-600 rounded text-white font-semibold">
              Login / SignUp
            </button>
          )}
        </div>
      </div>

      {/* Modal (unchanged) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 w-96 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-400 hover:text-white">✕</button>
            <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">{isLogin ? "Login" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {!isLogin && <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:ring-orange-500" required />}
              {!isLogin && <input type="text" placeholder="Mobile Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:ring-orange-500" required />}
              <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:ring-orange-500" required />
              <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:ring-orange-500" required />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded">{isLogin ? "Login" : "Create Account"}</button>
            </form>
            <p className="text-center text-gray-400 mt-4">
              {isLogin ? <>Don’t have an account? <button onClick={() => setIsLogin(false)} className="text-orange-400 hover:underline">Sign Up</button></> :
                <>Already have an account? <button onClick={() => setIsLogin(true)} className="text-orange-400 hover:underline">Login</button></>}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
