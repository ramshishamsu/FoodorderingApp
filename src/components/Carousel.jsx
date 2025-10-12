import React, { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
  "https://media.istockphoto.com/id/1266914116/photo/tabbouleh-salad-traditional-middle-eastern-or-arab-dish-levantine-vegetarian-salad-with.jpg?s=612x612&w=0&k=20&c=7zvEbLyASsfIt7hzp1R4RRVm94Xgk5FwazEB4p0jPZU=",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
];

export default function Carousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative rounded-lg overflow-hidden h-56 md:h-72 shadow">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)` }}>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt="" className="w-full h-56 md:h-72 object-cover flex-shrink-0" />
        ))}
      </div>
    </div>
  );
}

