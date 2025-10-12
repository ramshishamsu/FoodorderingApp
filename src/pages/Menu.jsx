import React from "react";
import { useLocation } from "react-router-dom";
import FoodCard from "../components/FoodCard";


// Flatten all categories into one array
const MENU = {
  indian: [
    { id: "i1", name: "Butter Chicken", priceNumber: 250, description: "Creamy tomato gravy", image: "https://images.unsplash.com/photo-1604908553566-df4c34a06c7e" },
    { id: "i2", name: "Paneer Tikka", priceNumber: 180, description: "Spiced grilled paneer", image: "https://images.unsplash.com/photo-1622445272647-68e7a2d9c90b" },
  ],
  chinese: [
    { id: "c1", name: "Hakka Noodles", priceNumber: 150, description: "Stir-fried veg noodles", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9e" },
    { id: "c2", name: "Veg Manchurian", priceNumber: 170, description: "Crispy veg balls in sauce", image: "https://images.unsplash.com/photo-1617196039897-b71a76ccbe75" },
  ],
  italian: [
    { id: "it1", name: "Margherita Pizza", priceNumber: 299, description: "Tomato, cheese, basil", image: "https://images.unsplash.com/photo-1601924638867-3ec4c06a9d17" },
    { id: "it2", name: "Pasta Alfredo", priceNumber: 249, description: "Creamy white sauce pasta", image: "https://images.unsplash.com/photo-1617196034238-4dbce9c13d88" },
  ],
  "south-indian": [
    { id: "s1", name: "Masala Dosa", priceNumber: 120, description: "Crispy dosa with potato", image: "https://images.unsplash.com/photo-1632072176900-63c8792b2046" },
    { id: "s2", name: "Idli Sambar", priceNumber: 100, description: "Steamed idli with sambar", image: "https://images.unsplash.com/photo-1606791405792-7d9843a0e65b" },
  ],
  "fast-food": [
    { id: "f1", name: "Cheese Burger", priceNumber: 150, description: "Juicy cheese burger", image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
    { id: "f2", name: "Fries", priceNumber: 99, description: "Crispy french fries", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90" },
  ],
};

const Menu = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const allItems = Object.values(MENU).flat();
  const filteredItems = query
    ? allItems.filter((item) => item.name.toLowerCase().includes(query))
    : allItems;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {query ? `Search Results for "${query}"` : "All Menu"}
      </h1>
      {filteredItems.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;



