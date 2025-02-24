import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/hris.png" // Ensure your logo is inside /public/assets/fms.jpg
            alt="Cirrus FMS Logo"
            width={90}  
            height={90}
            className="cursor-pointer transition transform hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-black font-semibold text-lg">
          <li className="relative group">
            <Link href="/" className="transition duration-300 hover:text-gray-700">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full duration-300"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/documentation" className="transition duration-300 hover:text-gray-700">
              Documentation
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full duration-300"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="/contact" className="transition duration-300 hover:text-gray-700">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full duration-300"></span>
            </Link>
          </li>
        </ul>

        {/* Get Started Button */}
        <Link href="/get-started">
          <button className="hidden md:block bg-black text-white font-bold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-110 hover:bg-gray-800 animate-pulse">
            Get Started
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-8 w-8 text-black transition transform hover:scale-110" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-black transition transform hover:scale-110" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white text-black shadow-lg transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 font-semibold text-lg">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/documentation" onClick={() => setIsOpen(false)} className="hover:text-gray-600 transition">
              Documentation {/* ✅ Corrected Link */}
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-600 transition">
              Contact
            </Link>
          </li>
          <Link href="/get-started">
            <button className="bg-black text-white font-bold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-110 hover:bg-gray-800 animate-pulse">
              Get Started
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
