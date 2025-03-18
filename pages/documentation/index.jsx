import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import dynamic from "next/dynamic";

const Documentation = () => {
  
  const [selectedTopic, setSelectedTopic] = useState("/documentation/introduction");
  const topics = [
    {
      title: "Logging In and Dashboard",
      path: "/documentation/logging-in",
      icon: "🔑"
    },
    {
      title: "User Guide for Master Details Module",
      path: "/documentation/master-details",
      icon: "📋"
    },
    {
      title: "Managing Employees",
      path: "/documentation/managing-employees",
      icon: "👥"
    },
    {
      title: "Recruiting Module - User Guide",
      path: "/documentation/recruiting-module",
      icon: "🧑‍💼"
    },
    {
      title: "Add/Deduct Module - User Guide",
      path: "/documentation/deduct-module",
      icon: "➕➖"
    },
    {
      title: "Event Calendar Module - User Guide",
      path: "/documentation/EventCalendarModule",
      icon: "📅"
    },
    {
      title: "User Profile Module - User Guide",
      path: "/documentation/ProfileModule",
      icon: "👤"
    }
  ];

  const handleTopicSelection = (path) => {
    setSelectedTopic(path);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row container mx-auto px-6 py-12 mt-20">
        <Sidebar topics={topics} onSelectTopic={handleTopicSelection} />
        <section className="flex-1 bg-white p-10 rounded-lg shadow-md ml-0 lg:ml-8">
          <iframe
            src={selectedTopic}
            className="w-full h-[900px] border-none"
            title="Documentation Content"
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default Documentation;
