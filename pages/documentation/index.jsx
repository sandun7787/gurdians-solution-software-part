import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  Book,
  User,
  Users,
  Calendar,
  FileText,
  DollarSign,
  Rocket,
  ClipboardList,
  MonitorCheck,
} from "lucide-react";

const Documentation = () => {
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <div className="container mx-auto px-6 py-12 mt-20">
        {/* Premium Header with Icon */}
        <motion.h1
          className="text-6xl font-extrabold text-black mb-8 flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Book size={50} className="text-gray-800" />
          Cirrus HRIS Documentation
        </motion.h1>

        {/* Rich Introduction Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Introduction</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to the **Cirrus HRIS** Documentation. Cirrus HRIS (Human Resource Information System) is a
            powerful, all-in-one platform designed to streamline **HR processes**, optimize **employee management**,
            and enhance **organizational productivity**. Whether you're managing **payroll, tracking attendance**, or
            organizing **company events**, Cirrus HRIS provides the tools and insights needed to make **data-driven 
            decisions** and ensure smooth **business operations**.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            This documentation serves as a comprehensive guide, offering **step-by-step instructions**,
            **best practices**, and **troubleshooting tips** to help you maximize the potential of Cirrus HRIS.
            Explore our detailed modules, learn how to configure settings, and find out how to integrate third-party
            tools seamlessly. Let's get started on this journey to transform your **HR management experience**.
          </p>
        </motion.section>

        {/* Table of Contents with Premium Look */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <ClipboardList size={40} /> Table of Contents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Login & Dashboard",
                icon: <User size={30} />,
                path: "/documentation/login-and-dashboard",
                description:
                  "Learn how to access the Cirrus HRIS dashboard, manage login credentials, and navigate the main interface.",
              },
              {
                title: "User Profile Module",
                icon: <Users size={30} />,
                path: "/documentation/profile-module",
                description:
                  "Manage detailed user profiles, including personal, professional, and contact information effectively.",
              },
              {
                title: "User Master Module",
                icon: <FileText size={30} />,
                path: "/documentation/user-master",
                description:
                  "Understand how to configure and manage master data including departments, roles, and employee categories.",
              },
              {
                title: "Employer Module",
                icon: <MonitorCheck size={30} />,
                path: "/documentation/employer-module",
                description:
                  "Keep track of employer information, maintain company records, and streamline employer-related processes.",
              },
              {
                title: "Event Calendar Module",
                icon: <Calendar size={30} />,
                path: "/documentation/event-calendar",
                description:
                  "Efficiently manage company events, employee schedules, and important HR milestones using the event calendar.",
              },
              {
                title: "Add/Deduct Module",
                icon: <DollarSign size={30} />,
                path: "/documentation/add-deduct",
                description:
                  "Handle financial adjustments like bonuses, deductions, and reimbursements with ease using the Add/Deduct module.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-gray-50 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl"
              >
                <Link href={item.path} className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-200 rounded-full">{item.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <Link href="/getting-started">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-blue-700"
            >
              <Rocket size={24} />
              Get Started with Cirrus HRIS
            </motion.button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Documentation;
