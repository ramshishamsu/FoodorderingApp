import React from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment, decrement } from "../redux/cartSlice";

const MENU = {
  indian: [
    { id: "i1", name: "Butter Chicken", priceNumber: 250, priceText: "₹250", description: "Creamy tomato gravy", image: "https://media.istockphoto.com/id/639390540/photo/indian-butter-chicken.webp?a=1&b=1&s=612x612&w=0&k=20&c=xZvd8MXsgpCBN-QyW1PdNMes0K55UMLQgbhnKNF30HE=" },
    { id: "i2", name: "Paneer Tikka", priceNumber: 180, priceText: "₹180", description: "Spiced grilled paneer", image: "https://media.istockphoto.com/id/1474136049/photo/close-up-image-of-paneer-kebabs-marinated-curd-cheese-pieces-on-metal-skewers-red-onion-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=cvfV2qr33X-FNf0E4GCYnVovx3w7DdXmyIxv4EuMLII=" },
    {id:"i3", name:"biriyani" , priceNumber: 200, priceText:"₹200" , description:"Spiced biriyani" , image:"https://media.istockphoto.com/id/1453499717/photo/chicken-biryani-or-biriyani-served-in-plate-isolated-on-table-top-view-indian-spicy-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=9ne-015JVWzfwWIqV8Xhjg4FVVcqfKScBAa-29nt8ec="},
    {id:"i4", name:"tandoori chicken" , priceNumber: 280, priceText:"₹280" , description:"Spiced tandoori chicken" , image:"https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=1D5tmeb0HGE2bT2yPtMwJlxVOrwpnWDcF0BNG27z_Qg="},
     {id:"i4", name:"alfaham" , priceNumber: 480, priceText:"₹480" , description:"Spicy alfaham" , image:"https://media.istockphoto.com/id/2190955433/photo/delicious-chicken-mandi-tandoor-dish-mandi-is-a-yemeni-dish-which-consists-of-meat-and-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=WACdnVXhiOGdU1JzEBLKxmMGH9H6acwO27xfKgVmlvE="},
  ],
  chinese: [
    { id: "c1", name: "Hakka Noodles", priceNumber: 150, priceText: "₹150", description: "Stir-fried veg noodles", image: "https://media.istockphoto.com/id/1158159302/photo/schezwan-hakka-noodles-served-in-a-bowl-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sl8a9xk9wHMChAabKhso0WVc6QQ58hc2HZvcs43YagA=" },
    { id: "c2", name: "Veg Manchurian", priceNumber: 170, priceText: "₹170", description: "Crispy veg balls in sauce", image: "https://media.istockphoto.com/id/2168401756/photo/chinese-veg-fried-rice-in-a-dish-with-noodles-indo-chinese-dish-served-over-a-wooden.webp?a=1&b=1&s=612x612&w=0&k=20&c=9-wcmfu6tjpuoIuniaA1rCEhrUZ8ZfI7ZDPJXfOnty0=" },
   { id: "c3", name: "Fried Rice", priceNumber: 180, priceText: "₹180", description: "Tasty Fried rice", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" },
    {id: "c4", name: "dumplings", priceNumber: 120, priceText: "₹120", description: "Special dumplings ", image: "https://media.istockphoto.com/id/2212542612/photo/tandoori-momos.webp?a=1&b=1&s=612x612&w=0&k=20&c=R4WI5xUFgWIdnXC8PEejD8qfdc3QCYMRkIx--DY4rWU=" },
    {id: "c5", name: "dim sum", priceNumber: 200, priceText: "₹200", description: "Tasty dim sum", image: "https://plus.unsplash.com/premium_photo-1674601031608-1a38ca161523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGltJTIwc3VtfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" },
  ],
  "south-indian": [
    { id: "s1", name: "Masala Dosa", priceNumber: 120, priceText: "₹120", description: "Crispy dosa with potato", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" },
    { id: "s2", name: "Idli Sambar", priceNumber: 100, priceText: "₹100", description: "Steamed idli with sambar", image: "https://media.istockphoto.com/id/1024549454/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.webp?a=1&b=1&s=612x612&w=0&k=20&c=JGYk6zJNS6bneptDScV-2P8PrH2EirPA1qH3KKW8_9w=" },
 { id: "s3", name: "Chicken Chettinad", priceNumber: 150, priceText: "₹150", description: "Chicken Chettinad", image: "https://media.istockphoto.com/id/2209850560/photo/murgh-musallam-or-masala-roasted-chicken-is-mughlai-dish-from-india-and-pakistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=f-s1Vl12KFpJWx9uHeCH-57IIIFtKcO83wA3kStQql4=" },
 { id: "s4", name: " Meen Pollichathu", priceNumber: 250, priceText: "₹250", description: " Meen Pollichathu", image: "https://media.istockphoto.com/id/1589149610/photo/fish-fry-served-with-lemon-and-onion-on-banana-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=VWev8xYZ_SQRhhia6f7qGW2A-fmvfy_RVmY4p2mbQsA=" },
 { id: "s5", name: "Hyderabadi Biryani", priceNumber: 200, priceText: "₹200", description: "Spicy Hyderabadi Biryani", image: "https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.webp?a=1&b=1&s=612x612&w=0&k=20&c=3YtQkUbwhNVUKo0___k4URBOcL6o-LcMUCAZ-lIoGAw=" },
  ],
  italian: [
    { id: "it1", name: "Margherita Pizza", priceNumber: 299, priceText: "₹299", description: "Tomato, cheese, basil", image: "https://images.unsplash.com/photo-1564936281291-294551497d81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" },
    { id: "it2", name: "Pasta Alfredo", priceNumber: 249, priceText: "₹249", description: "Creamy white sauce pasta", image: "https://media.istockphoto.com/id/1398788293/photo/white-sauce-penne-pasta-directly-above-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=9ItdxVhC6rcTPNxq21TSPF9a1b14Q93EvSBSAFZsxe0=" },
    { id: "it3", name: "Risotto", priceNumber: 259, priceText: "₹259", description: "rissotto", image: "https://media.istockphoto.com/id/143920878/photo/three-cheese-risotto.webp?a=1&b=1&s=612x612&w=0&k=20&c=udDwWfvFPhLj4YpOy5selF7vYw2hPy826-HTbvg5UBc=" },
    { id: "it4", name: "arancini", priceNumber: 399, priceText: "₹399", description: "arancini", image: "https://media.istockphoto.com/id/1705538082/photo/recipe-for-arancini-with-zucchini-in-a-small-format-similar-to-a-spanish-tapa-crequette.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cq4cfh45SLtn1WqVsPumTpKaeHv8Sil7qsvugCW-iK8=" },
    { id: "it5", name: "bruschetta", priceNumber: 499, priceText: "₹499", description: "bruschetta", image: "https://media.istockphoto.com/id/527116431/photo/bruschetta.webp?a=1&b=1&s=612x612&w=0&k=20&c=F6LnP0jUSlYKT6PajuFOKCMl9DiAwFIm7gwHcjvfd50=" },
  ],
  "fast-food": [
    { id: "f1", name: "Cheese Burger", priceNumber: 150, priceText: "₹150", description: "Juicy cheese burger", image: "https://media.istockphoto.com/id/1430066812/photo/double-cheese-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=jKCEyUjSYcwLs7f_lratGarKEZDCJgpWROiiwZHp8xE=" },
    { id: "f2", name: "Fries", priceNumber: 99, priceText: "₹99", description: "Crispy french fries", image: "https://media.istockphoto.com/id/502893771/photo/french-fries-12.webp?a=1&b=1&s=612x612&w=0&k=20&c=ignUcTaqDWXIIuTy-7krHi5zAAR49vDzN1JxFCoX2wk=" },
     { id: "f3", name: "KFC", priceNumber: 450, priceText: "₹450", description: "Crispy KFC", image: "https://plus.unsplash.com/premium_photo-1683139916670-38113db90cb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S0ZDfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" },
      { id: "f4", name: "  Pizza Hut", priceNumber: 250, priceText: "₹250", description: " Pizza Hut", image: "https://plus.unsplash.com/premium_photo-1733259709671-9dbf22bf02cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emFodXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" },
       { id: "f5", name: "McDonald's", priceNumber: 290, priceText: "₹290", description: "McDonald's", image: "https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWNEb25hbGQnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" },
  ],
};

export default function CategoryPage() {
  const { slug } = useParams();
  const items = MENU[slug] || [];
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart.items);

  const qtyOf = (id) => cart.find((i) => i.id === id)?.qty || 0;

  return (
    <div className="bg-gray-900 min-h-screen text-white px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold capitalize text-orange-400 mb-2">
          {slug.replace("-", " ")} Menu
        </h1>
        <p className="text-gray-400 text-sm">
          Explore authentic {slug.replace("-", " ")} dishes prepared fresh and fast 🍴
        </p>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Food Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it) => (
          <div
            key={it.id}
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 overflow-hidden group"
          >
            {/* Image - Full Fit */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={it.image}
                alt={it.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <div>
                <h3 className="text-lg font-semibold mb-1">{it.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{it.description}</p>
                <span className="font-bold text-orange-500">{it.priceText}</span>
              </div>

              {/* Buttons */}
              <div className="mt-3 flex items-center justify-between">
                {qtyOf(it.id) === 0 ? (
                  <button
                    onClick={() => dispatch(addToCart(it))}
                    className="bg-orange-500 text-white px-4 py-1.5 text-sm rounded-full hover:bg-orange-600 transition"
                  >
                    Add +
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(decrement(it.id))}
                      className="bg-gray-700 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-600 text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">{qtyOf(it.id)}</span>
                    <button
                      onClick={() => dispatch(increment(it.id))}
                      className="bg-orange-500 w-7 h-7 flex items-center justify-center rounded-full hover:bg-orange-600 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





