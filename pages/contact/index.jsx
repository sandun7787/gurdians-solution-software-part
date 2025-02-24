import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          subscribe: false,
        });
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Error: Unable to send message.");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar /> {/* ✅ Include Navbar at the Top */}

      {/* Hero Section */}
      <section className="bg-black text-white py-20 text-center mt-20">
        <h1 className="text-5xl font-extrabold">Get in Touch</h1>
        <p className="text-lg mt-4">We'd love to hear from you. Let us know how we can help.</p>
      </section>

      {/* Contact Cards */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white text-black shadow-lg rounded-lg text-center transition hover:shadow-xl hover:scale-105 duration-300">
          <FaPhoneAlt className="text-black text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold">Call Us</h3>
          <p className="text-gray-600">+94 755 869705</p>
          <p className="text-gray-500">Mon - Sat: 8am - 5pm</p>
        </div>
        <div className="p-6 bg-white text-black shadow-lg rounded-lg text-center transition hover:shadow-xl hover:scale-105 duration-300">
          <FaEnvelope className="text-black text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold">Email Us</h3>
          <Link href="mailto:info@guardians.lk" className="text-black hover:underline">
            info@guardians.lk
          </Link>
        </div>
        <div className="p-6 bg-white text-black shadow-lg rounded-lg text-center transition hover:shadow-xl hover:scale-105 duration-300">
          <FaMapMarkerAlt className="text-black text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold">Visit Us</h3>
          <p className="text-gray-600">No:119, Wattaranthenna Road</p>
          <p className="text-gray-500">Kandy, Sri Lanka</p>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Google Map */}
        <div className="w-full h-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.800472764987!2d80.63310711458958!3d7.040492218537503!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36789dfeb3e4b%3A0x6d4c2e68541d8985!2sWattaranthenna%2C%20Kandy!5e0!3m2!1sen!2slk!4v1648947436080!5m2!1sen!2slk"
            className="w-full h-full rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-white text-black shadow-lg rounded-lg h-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 border rounded-md w-full mt-4 focus:ring-2 focus:ring-black"
              rows="4"
              required
            ></textarea>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                id="subscribe"
                className="mr-2"
              />
              <label htmlFor="subscribe" className="text-gray-600">
                Subscribe to our Newsletter
              </label>
            </div>
            <button
              type="submit"
              className="bg-black text-white font-bold px-6 py-3 rounded-md shadow-md w-full mt-4 transition hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span> <span>➡️</span>
            </button>
          </form>

          {/* Status Message */}
          {statusMessage && (
            <p className="mt-4 text-center text-sm text-gray-600">{statusMessage}</p>
          )}
        </div>
      </div>

      <Footer /> {/* ✅ Include Footer */}
    </>
  );
};

export default Contact;
