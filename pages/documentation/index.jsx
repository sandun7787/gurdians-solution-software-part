import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import dynamic from "next/dynamic";

const Documentation = () => {
  
  const [selectedTopic, setSelectedTopic] = useState("/documentation/introduction");
  const topics = [
    {
      title: "1. Logging In and Dashboard ",
      path: "/documentation/logging-in",
    },
    {
      title: "2. User Guide for Master Details Module",
      path: "/documentation/master-details",
    },
    {
      title: "3. Managing Employees",
      path: "/documentation/managing-employees",
    },
    {
      title: "4. Recruiting Module - User Guide",
      path: "/documentation/recruiting-module",
    },
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