import React from "react";

export const Terms = () => {
  return (
    <section
      id="terms"
      className="min-h-screen mt-16 bg-gray-50 py-12 px-6 md:px-20"
    >
      <div className="container mx-auto max-w-4xl bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-4">
          Welcome to my personal portfolio website. By accessing and using this
          site, you agree to the following terms and conditions.
        </p>

        <h2 className="text-xl   text-blue-600  font-semibold mb-2">1. Use of Content</h2>
        <p className="text-gray-700 mb-4">
          All content, including text, images, projects, and code snippets,
          presented on this website is created by me unless otherwise stated.
          You may view, share, and reference my work for personal or
          educational purposes, but reproduction or redistribution without
          permission is not allowed.
        </p>

        <h2 className="text-xl  text-blue-600   font-semibold mb-2">2. Accuracy of Information</h2>
        <p className="text-gray-700 mb-4">
          I strive to ensure all information provided is accurate and
          up-to-date. However, I make no warranties regarding the completeness
          or reliability of any content on this site.
        </p>

        <h2 className="text-xl  text-blue-600   font-semibold mb-2">3. External Links</h2>
        <p className="text-gray-700 mb-4">
          This site may include links to external websites (e.g., LinkedIn,
          GitHub). I am not responsible for the content, policies, or practices
          of third-party websites.
        </p>

        <h2 className="text-xl  text-blue-600   font-semibold mb-2">4. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All work displayed here is protected under copyright laws. Unauthorized
          use, modification, or distribution of my work without prior consent is
          strictly prohibited.
        </p>

        <h2 className="text-xl   text-blue-600  font-semibold mb-2">5. Contact</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms & Conditions, feel free to
          contact me via the <a href="#contact" className="text-blue-600 hover:underline">Contact</a> section.
        </p>

        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Dinesh Reddy . All rights reserved.
        </p>
      </div>
    </section>
  );
};
