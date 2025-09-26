import React from "react";

export const Project1Data = () => {
    return (
    <section
      id="project1data"
      className="min-h-screen bg-gray-50 py-12 px-6 md:px-20"
    >
      <div className="container mx-auto max-w-5xl p-20 ">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Power Theft Detection Using IoT
        </h1>

        {/* Introduction */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold  text-blue-600  mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Electricity theft is one of the major issues faced by power
            distribution companies worldwide. It results in significant revenue
            losses and can lead to instability in the power supply system.
          </p>
          <p className="text-gray-700 mb-2  font-semibold">Problem Statement:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Unauthorized tapping of electricity lines.</li>
            <li>Bypassing energy meters to reduce billing.</li>
            <li>Overloading of distribution transformers due to theft.</li>
            <li>Increased financial losses for electricity boards.</li>
          </ul>
        </div>

        {/* System Design */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
          <h2 className="text-2xl  text-blue-600 font-semibold mb-4">System Design & Working</h2>
          <p className="text-gray-700 mb-4">
            The project uses IoT sensors, smart energy meters, and cloud
            monitoring to track power usage in real time. When discrepancies
            between supply and consumption are detected, the system flags it as
            potential theft.
          </p>
          <p className="text-gray-700 mb-2 font-semibold">Components Used:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Smart Energy Meter (current & voltage sensors)</li>
            <li>Microcontroller (Arduino / NodeMCU / ESP32)</li>
            <li>IoT Cloud (Firebase / Thingspeak / AWS IoT)</li>
            <li>GSM/Wi-Fi Module for communication</li>
            <li>Web Dashboard for monitoring</li>
          </ul>
          <p className="text-gray-700 mt-4">
            The system compares supply-side data with user-side data. If
            irregularities are detected, theft is flagged and alerts are sent to
            authorities instantly.
          </p>
        </div>

        {/* Results & Conclusion */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl   text-blue-600 font-semibold mb-4">Results & Conclusion</h2>
          <p className="text-gray-700 mb-4">
            The system successfully detects power theft through real-time
            monitoring and generates instant alerts in case of tampering or
            illegal tapping.
          </p>
          <p className="text-gray-700 mb-2 font-semibold">Advantages:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Real-time theft detection</li>
            <li>Low-cost IoT solution</li>
            <li>Easy integration with existing systems</li>
            <li>Enhances transparency in billing</li>
          </ul>
          <p className="text-gray-700 mt-4">
            The IoT-based Power Theft Detection System provides an effective,
            scalable, and cost-efficient solution to minimize electricity theft
            and improve power distribution efficiency.
          </p>
        </div>
      </div>
    </section>

        
    );
};
