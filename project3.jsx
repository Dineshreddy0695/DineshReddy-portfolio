import React from "react";

export const VirtualAssistant = () => {
  return (
    <section id="virtual-assistant" className="min-h-screen mt-16  bg-gray-50 py-12 px-6 md:px-20">
      <div className="container mx-auto max-w-5xl m-20">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          AI Virtual Assistant
        </h1>

        {/* Introduction */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
          <h2 className="text-2xl  text-blue-600  font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            AI-powered virtual assistants have become essential tools in daily life.
            They help automate tasks, answer queries, set reminders, and even control
            smart devices.
          </p>
          <p className="text-gray-700 mb-2 font-semibold">Problem Statement:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Lack of personalized assistance in traditional apps.</li>
            <li>Time wasted in repetitive tasks.</li>
            <li>Difficulty in managing schedules efficiently.</li>
          </ul>
        </div>

        {/* System Design */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold   text-blue-600  mb-4">System Design & Working</h2>
          <p className="text-gray-700 mb-4">
            The AI Virtual Assistant combines Natural Language Processing (NLP),
            Speech Recognition, and Task Automation to provide real-time assistance.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Voice and text-based interaction</li>
            <li>Weather, news, and knowledge queries</li>
            <li>Task scheduling and reminders</li>
            <li>Smart device integration</li>
            <li>Personalized responses using ML</li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold  text-blue-600  mb-4">Results & Conclusion</h2>
          <p className="text-gray-700 mb-4">
            The assistant performs daily tasks through voice/text commands and provides
            personalized assistance with learning ability.
          </p>
          <p className="text-gray-700 mb-2 font-semibold">Advantages:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Saves time in routine activities</li>
            <li>User-friendly and interactive</li>
            <li>Scalable for smart homes and enterprises</li>
          </ul>
          <p className="text-gray-700 mt-4">
            The AI Virtual Assistant project demonstrates the power of artificial
            intelligence in providing real-time, intelligent, and personalized support.
          </p>
        </div>
      </div>
    </section>
  );
};
