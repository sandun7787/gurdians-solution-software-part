import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CalendarDaysIcon, 
  ChartBarIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  ServerIcon, 
  UserCircleIcon 
} from "@heroicons/react/24/solid";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      {/* Hero Section with Image & Buttons */}
      <header className="relative w-full h-screen flex items-center justify-center bg-black mt-0"> {/* Set mt-0 to remove the gap */}
        <Image
          src="/assets/hris4.jpeg" // Ensure this image exists in /public/assets/
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute text-center text-white px-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Cirrus HRIS  - Your Ultimate Solution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl mb-6"
          >
            Automate, Optimize, and Elevate Your Business Operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex space-x-6 justify-center"
          >
            <Link href="/get-started">
              <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-gray-800">
                Get Started
              </button>
            </Link>
            <Link href="/demo">
              <button className="bg-white text-black px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-gray-300">
                Watch Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold text-black mb-10"
          >
            Our Features
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 px-6">
            {[ 
              { 
                title: "Automated Scheduling", 
                desc: "Manage appointments efficiently.",
                icon: <CalendarDaysIcon className="w-14 h-14 text-blue-500 mx-auto mb-4" /> 
              },
              { 
                title: "Advanced Analytics", 
                desc: "Get real-time business insights.", 
                icon: <ChartBarIcon className="w-14 h-14 text-green-500 mx-auto mb-4" /> 
              },
              { 
                title: "Seamless Integration", 
                desc: "Connect with third-party tools.", 
                icon: <CloudIcon className="w-14 h-14 text-purple-500 mx-auto mb-4" /> 
              },
              { 
                title: "Security & Compliance", 
                desc: "Enterprise-grade security.", 
                icon: <ShieldCheckIcon className="w-14 h-14 text-red-500 mx-auto mb-4" /> 
              },
              { 
                title: "Cloud-Based Access", 
                desc: "Work from anywhere, anytime.", 
                icon: <ServerIcon className="w-14 h-14 text-yellow-500 mx-auto mb-4" /> 
              },
              { 
                title: "User-Friendly UI", 
                desc: "Easy to navigate and modern UI.", 
                icon: <UserCircleIcon className="w-14 h-14 text-gray-700 mx-auto mb-4" /> 
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center"
              >
                {feature.icon}
                <h3 className="text-2xl font-semibold text-black">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-black text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-6"
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex space-x-6 justify-center"
        >
          <Link href="/get-started">
            <button className="bg-white text-black font-bold px-8 py-4 rounded-lg shadow-md transition transform hover:scale-110 hover:bg-gray-300">
              Get Started Now
            </button>
          </Link>
          <Link href="/demo">
            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg shadow-md transition transform hover:scale-110 hover:bg-gray-600">
              Watch Demo
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
