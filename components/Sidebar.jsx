import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ topics, onSelectTopic }) => {
  return (
    <aside className="w-full lg:w-1/5 bg-gray-900 text-gray-300 p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-gray-100">Documentation</h2>
      <ul className="space-y-3">
        {topics.map((topic, index) => (
          <li key={index}>
            <button
              className="font-medium text-gray-300 hover:text-gray-100 w-full text-left py-2 px-3 rounded-lg transition duration-300 hover:bg-gray-800"
              onClick={() => onSelectTopic(topic.path)}
            >
              <span className="mr-3">{topic.icon}</span>
              {topic.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
