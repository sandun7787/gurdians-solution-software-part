import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";  // "X" icon import
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* Separator to clearly distinguish footer */}
      <div className="w-full border-t border-gray-300 mt-10"></div> 

      <footer className="bg-white text-black py-12 mt-10 shadow-md">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Logo & Description */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="text-center md:text-left"
            >
              <div className="flex flex-col items-center md:items-start">
                <Image 
                  src="/assets/hris.png" 
                  alt="Cirrus HRIS Logo"
                  width={120}  
                  height={120} 
                  className="mb-4"
                />
                <p className="text-gray-600 text-center md:text-left">
                  Empowering businesses with intelligent automation and seamless integrations.
                </p>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col space-y-3 text-center md:text-left"
            >
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <Link href="/" className="text-gray-600 hover:text-black transition">Home</Link>
              <Link href="https://guardians.lk/#about" className="text-gray-600 hover:text-black transition">About</Link>
              <Link href="https://guardians.lk/#services" className="text-gray-600 hover:text-black transition">Services</Link>
              <Link href="/contact" className="text-gray-600 hover:text-black transition">Contact</Link>
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col items-center md:items-start space-y-3"
            >
              <h3 className="text-xl font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-3">
                <a href="https://web.facebook.com/Guardianslk/about/?_rdc=1&_rdr#" className="p-3 bg-gray-200 rounded-full hover:bg-blue-600 transition">
                  <FaFacebookF className="text-black hover:text-white w-5 h-5" />
                </a>
                {/* Replacing Twitter with "X" icon */}
                <a href="https://x.com/guard_solutions" className="p-3 bg-gray-200 rounded-full hover:bg-gray-800 transition">
                  <FaXmark className="text-black hover:text-white w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/guardians-solutions/posts/?feedView=all" className="p-3 bg-gray-200 rounded-full hover:bg-blue-700 transition">
                  <FaLinkedinIn className="text-black hover:text-white w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/guardian_warrior_solutions/" className="p-3 bg-gray-200 rounded-full hover:bg-pink-500 transition">
                  <FaInstagram className="text-black hover:text-white w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Cirrus HRIS. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
