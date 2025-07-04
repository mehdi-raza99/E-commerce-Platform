import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from "../context/Cart.context";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cartItems} = useContext(CartContext)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 min-h-[60px]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          <Link to={"/"}>ShopSphere</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <div style={{ position: 'relative' }}>
          <Link to={'checkout'}><FaShoppingCart size={24} />
          <span style={{
            position: 'absolute', top: -8, right: -8, background: 'red',
            color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px'
          }}>
            {cartItems.length}
          </span>
          </Link>
        </div>


        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
        >
          <svg 
            className="w-6 h-6 text-gray-700" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <div style={{ position: 'relative' }}>
            <FaShoppingCart size={24} />
            <span style={{
              position: 'absolute', top: -8, right: -8, background: 'red',
              color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px'
            }}>
              3
            </span>
          </div>


          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
