
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white shadow-lg fixed w-full top-0 left-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 text-lg font-bold hover:underline">
        <span>Inventory App</span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex space-x-4">
        <li>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:underline">
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/suppliers" className="hover:underline">
            Suppliers
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
