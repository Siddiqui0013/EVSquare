import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"


export default function Navbar() {
  return (
    <nav className="bg-black z-10 fixed w-screen p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="h-14" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">Projects</Link>
        </li>
        <li>
          <Link to="/blogs" className="text-white hover:text-gray-400">Blogs</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-400">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </li>

      </ul>
    </nav>
  )
}
