import { useState } from "react";
import { Link } from "react-router-dom";
import { Contact } from "./Contact";

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-40  bg-cyan-700-grey backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="flex justify-between items-center gap-x-50 px-4 h-16">
        {/* Logo */}
        <Link to="/" className="font-mono text-xl font-bold text-white">
          Dinesh <span className="text-blue-500">Portfolio</span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col items-center bg-gray-900 text-white py-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false) }>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <button
            onClick={() => {
              setIsContactOpen(true);
              setIsOpen(false);
            }}
          >
            Contact Me
          </button>
        </div>
      )}

      {/* Contact Popup */}
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};
