import { NavLink } from 'react-router-dom';
import { Home, ShoppingCart, User } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function BottomNav() {
  const cartCount = useSelector(s => s.cart.items.reduce((a, c) => a + c.qty, 0));

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 shadow-md z-50 md:relative md:bottom-auto md:flex md:flex-col md:items-center">
      {/* Navigation icons */}
      <div className="flex justify-around py-3 md:gap-10 md:py-4 max-w-2xl w-full mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm font-medium ${
              isActive ? 'text-orange-500' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          <Home size={24} />
          <span className="mt-1 hidden md:inline">Home</span>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-sm font-medium ${
              isActive ? 'text-orange-500' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 rounded-full font-semibold">
              {cartCount}
            </span>
          )}
          <span className="mt-1 hidden md:inline">Cart</span>
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm font-medium ${
              isActive ? 'text-orange-500' : 'text-gray-400 hover:text-white'
            }`
          }
        >
          <User size={24} />
          <span className="mt-1 hidden md:inline">Account</span>
        </NavLink>
      </div>

      {/* Footer text */}
      <div className="w-full text-center text-gray-500 text-xs py-1 md:py-2">
        © 2025. All rights reserved
      </div>
    </nav>
  );
}
