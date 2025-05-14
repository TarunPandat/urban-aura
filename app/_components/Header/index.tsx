'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter()

  return (
    <header className="shadow-md top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          UrbanAura
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-white text-gray-400">Home</Link>
          <Link href="/shop" className="hover:text-white text-gray-400">Shop</Link>
          <Link href="/about" className="hover:text-white text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-white text-gray-400">Contact</Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="w-6 h-6 cursor-pointer" onClick={() => router.push('/cart')} />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <nav className="flex flex-col space-y-3 text-gray-700">
            <Link href="/home" className="hover:text-blue-600">Home</Link>
            <Link href="/shop" className="hover:text-blue-600">Shop</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
