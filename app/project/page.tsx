"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [projectName, setProjectName] = useState("");
  const [technology, setTechnology] = useState("React");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Optionally you can send this data to backend here
    router.push("/ide"); // Navigate to IDE
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">Start New Project</h2>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Project Name
          </label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Technology
          </label>
          <select
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option>React</option>
            <option>JavaScript</option>
            <option>Java</option>
            <option>Python</option>
          </select>
        </div>

        <a
          href='/ide'
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Launch IDE
        </a>
      </form>
    </div>
  );
};

export default Page;
