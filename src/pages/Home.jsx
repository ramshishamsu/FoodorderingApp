import React, { useState } from "react";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../redux/userSlice";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addToCart } from "../redux/cartSlice";

const categories = [
  { name: "Indian", slug: "indian", image: "https://media.istockphoto.com/id/1156130293/photo/group-of-gujarati-snacks-like-jalebi-fafda-thepla-khaman-dhokla-aloo-bhujiya-khandvi-khakra.webp?a=1&b=1&s=612x612&w=0&k=20&c=7SgQryng4KNiZ7h_5dhQVhp4_Vph8U9a1Z9s2JJEfwg=" },
  { name: "Chinese", slug: "chinese", image: "https://images.unsplash.com/photo-1623689048105-a17b1e1936b8?auto=format&fit=crop&q=60&w=500" },
  { name: "South Indian", slug: "south-indian", image: "https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?auto=format&fit=crop&q=60&w=500" },
  { name: "Italian", slug: "italian", image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?auto=format&fit=crop&q=60&w=500" },
  { name: "Fast Food", slug: "fast-food", image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
];

const recommended = [
  { id: "r1", name: "Paneer Butter Masala", priceNumber: 220, priceText: "₹220", image: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyJTIwYnV0dGVyJTIwbWFzYWxhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", description: "Creamy, rich paneer curry." },
  { id: "r2", name: "Margherita Pizza", priceNumber: 299, priceText: "₹299", image: "https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?a=1&b=1&s=612x612&w=0&k=20&c=qO_TA5oZTY4d1e14l6noMYmAB26sSoE8L0m_VYl2bcU=", description: "Cheesy classic." },
  { id: "r3", name: "Veg Burger", priceNumber: 149, priceText: "₹149", image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnJTIwYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", description: "Juicy veg patty." },
  { id: "r4", name: "Dosa", description: "Crispy South Indian dosa", priceNumber: 100, priceText: "₹100", image: "https://media.istockphoto.com/id/1488738021/photo/crispy-masala-sin.webp?a=1&b=1&s=612x612&w=0&k=20&c=eBApIYmyNOl5HSXRSm5nJoaCNJefGAPqbhu6vX2u5fU=" },
];

export default function Home() {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  const filteredCategories = categories.filter(c =>
    c.name.toLowerCase().includes(q.toLowerCase())
  );
  const filteredRecommended = recommended.filter(r =>
    r.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex flex-col justify-center items-center text-center bg-[url('https://images.unsplash.com/photo-1543353071-087092ec393f')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/60 before:backdrop-blur-sm">
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-orange-400">
            Order Your Favorite Food 🍕
          </h1>
          <p className="text-gray-200 mb-6 text-lg">
            Discover delicious meals from top restaurants near you — delivered fast and fresh!
          </p>

          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="relative w-full sm:w-2/3">
              <input
                type="text"
                placeholder="Search food or categories..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full pl-4 pr-10 py-2 text-sm rounded-full bg-gray-800/90 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Carousel />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-5 text-orange-400">
            🍽️ Explore Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all"
              >
                <img src={c.image} alt={c.name} className="w-full h-32 object-cover" />
                <div className="p-3 text-center font-medium text-lg">{c.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommended */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 text-orange-400">
            🔥 Recommended for You
          </h3>
          <Slider {...settings}>
            {filteredRecommended.map((r) => (
              <div key={r.id} className="px-3">
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex flex-col h-full">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="h-48 w-full object-cover rounded"
                  />
                  <div className="mt-3 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-semibold text-lg">{r.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{r.description}</p>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="font-bold text-orange-500">{r.priceText}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: r.id,
                              name: r.name,
                              priceNumber: r.priceNumber,
                              priceText: r.priceText,
                              image: r.image,
                            })
                          )
                        }
                        className="bg-orange-500 text-white px-4 py-1.5 text-sm rounded-full hover:bg-orange-600 transition"
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
