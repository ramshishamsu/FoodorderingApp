import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OrderSuccess() {
  const { id } = useParams();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <motion.div initial={{scale:0}} animate={{scale:1}} className="bg-green-500 text-white p-6 rounded-full mb-6">
        <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
      </motion.div>
      <h2 className="text-2xl font-bold mb-2">Order placed successfully!</h2>
      <p className="text-gray-600 mb-4">Your order id: <strong>{id}</strong></p>
      <Link to="/orders" className="text-orange-500">View Order History</Link>
    </div>
  );
}
