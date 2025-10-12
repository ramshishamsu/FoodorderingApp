import React from "react";
import BottomNav from "../components/BottomNav";

export default function About() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      {/* Content */}
      <div className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-orange-500 text-center">
          About Foodly 🍕
        </h1>
        <p className="text-lg text-gray-200 mb-4 leading-relaxed">
          Foodly is your ultimate online food ordering platform, designed to bring
          your favorite meals straight to your doorstep. Whether you crave Indian,
          Chinese, Italian, South Indian delicacies, or fast food, we have it all!
        </p>
        <p className="text-lg text-gray-200 mb-4 leading-relaxed">
          Inspired by popular food delivery apps like Swiggy and Zomato, our mission
          is to deliver happiness, flavor, and convenience with every order. From
          curated menus to seamless checkout, Foodly ensures a smooth and delightful
          experience for all food lovers.
        </p>
        <p className="text-lg text-gray-200 mb-4 leading-relaxed">
          Explore diverse cuisines, discover recommended dishes, track your orders,
          and enjoy fast delivery, all in a single, professional, and user-friendly
          app interface.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed">
          At Foodly, we believe that food is not just sustenance, but an experience.
          Every meal should feel special, and every order should bring a smile.
        </p>
      </div>

      {/* Bottom Navigation */}
    </div>
  );
}
