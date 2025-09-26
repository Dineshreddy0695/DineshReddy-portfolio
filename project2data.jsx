import React from "react";

export const Internship = () => {
  return (
    <section id="internship" className="min-h-screen bg-gray-50 mt-16 py-12 px-6 md:px-20">
      <div className="container mx-auto max-w-5xl space-y-10">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Internship Management System
        </h1>

        {/* Introduction */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Many universities and organizations struggle to manage student internships manually. 
            Handling applications, approvals, reports, and evaluations through paperwork or emails 
            often leads to inefficiency, delays, and loss of data.
          </p>
          <p className="text-gray-700">
            This project focuses on building a web-based Internship Management System (IMS) that 
            streamlines the entire process — from application submission to feedback and certification.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Problem Statement</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Difficulties in managing large volumes of internship applications.</li>
            <li>Lack of centralized communication between students, mentors, and administrators.</li>
            <li>No proper tracking of student progress and evaluations.</li>
            <li>Manual handling delays approvals and report submissions.</li>
          </ul>
        </div>

        {/* Literature Review */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Existing Systems / Literature Review</h2>
          <p className="text-gray-700 mb-4">
            Currently, many institutions rely on offline/manual methods or basic spreadsheets 
            to track internships. These approaches have the following limitations:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Paperwork can be lost or misfiled.</li>
            <li>Spreadsheets do not provide real-time collaboration.</li>
            <li>Email-based communication leads to scattered information.</li>
            <li>Students find it difficult to get timely feedback from mentors.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Research suggests that digitalizing internship workflows increases transparency, 
            efficiency, and student satisfaction.
          </p>
        </div>

        {/* System Design */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">System Design & Working</h2>
          <p className="text-gray-700 mb-4">
            The Internship Management System is designed as a three-tier architecture:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold">Frontend:</span> Student dashboard, mentor feedback forms, admin panel (React.js).</li>
            <li><span className="font-semibold">Backend:</span> REST APIs handling applications, approvals, and tracking (Node.js/Express).</li>
            <li><span className="font-semibold">Database:</span> Stores student data, internship details, reports, and feedback (MySQL/MongoDB).</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Workflow:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Students register and create profiles.</li>
            <li>Students apply for internships through the portal.</li>
            <li>Mentors approve/reject applications.</li>
            <li>Students submit progress reports periodically.</li>
            <li>Mentors evaluate performance and submit feedback.</li>
            <li>Admins monitor overall activity and generate certificates.</li>
          </ol>
        </div>

        {/* Implementation */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Implementation</h2>
          <p className="text-gray-700 mb-4">
            The system was implemented using modern web technologies:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold">Frontend:</span> React.js with Tailwind CSS for responsive UI.</li>
            <li><span className="font-semibold">Backend:</span> Node.js and Express.js for handling API requests.</li>
            <li><span className="font-semibold">Database:</span> MySQL for structured storage of users, internships, and reports.</li>
            <li><span className="font-semibold">Authentication:</span> JWT-based login for students, mentors, and admins.</li>
            <li><span className="font-semibold">File Upload:</span> Students can upload PDF reports; mentors review them online.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            The system was tested with dummy student and mentor accounts to ensure correctness of workflows.
          </p>
        </div>

        {/* Results & Conclusion */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Results & Conclusion</h2>
          <p className="text-gray-700 mb-4">
            The system provides a centralized platform for students, mentors, and administrators, 
            ensuring smooth communication and progress tracking.
          </p>
          <p className="text-gray-700 font-semibold mb-2">Advantages:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Saves time and reduces paperwork.</li>
            <li>Provides transparency in internship evaluations.</li>
            <li>Easy tracking of student progress and report submissions.</li>
            <li>Facilitates digital certification after successful completion.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            In conclusion, the Internship Management System enhances efficiency, accuracy, and 
            communication, making internship processes more effective.
          </p>
        </div>

      </div>
    </section>
  );
};
