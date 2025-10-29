"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            NewsPortal
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-blue-600 font-medium">
            <Link href="/" className="hover:underline hover:text-blue-700">
              Home
            </Link>
            <Link
              href="/category/business"
              className="hover:underline hover:text-blue-700"
            >
              Business
            </Link>
            <Link
              href="/category/technology"
              className="hover:underline hover:text-blue-700"
            >
              Technology
            </Link>
            <Link
              href="/category/sports"
              className="hover:underline hover:text-blue-700"
            >
              Sports
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-3 px-4 py-3 text-blue-600 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:underline">
              Home
            </Link>
            <Link
              href="/category/business"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Business
            </Link>
            <Link
              href="/category/technology"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Technology
            </Link>
            <Link
              href="/category/sports"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Sports
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
