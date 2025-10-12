import React from "react";

export default function FoodCard({ item, qty, onAdd, onInc, onDec }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between h-[180px]">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-green-600">{item.priceText}</span>

          {qty > 0 ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onDec(item.id)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 rounded-full transition"
              >
                -
              </button>
              <span className="font-semibold">{qty}</span>
              <button
                onClick={() => onInc(item.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-2 rounded-full transition"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAdd(item)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}



