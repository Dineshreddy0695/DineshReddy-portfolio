import { Link } from "react-router-dom";
import { useState } from 'react';
import { Contact } from './Contact';


export const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  return (
    <div>
      <div className=" flex flex-row h-screen min-w-full  mt-20 px-9 py-0 items-center justify-center  sm:flex sm:flex-row sm:items-center sm:justify-center sm:min-h-screen sm:gap-10 sm:p-6">
        <div id="home" className="sm:flex flex flex-col gap-5  sm:flex-col sm:items-center sm:justify-center sm:min-h-screen">
          <h1 className=" mb-15 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent sm:text-4xl sm:font-bold sm:bg-gradient-to-r sm:from-blue-500 sm:to-purple-500 sm:bg-clip-text sm:text-transparent">
            Welcome to My Portfolio
          </h1>
          <p className="sm:mt-4 sm:text-lg sm:flex sm:max-w-[600px] sm:text-center">
            I'm a passionate developer. Motivated and detail-oriented engineering graduate seeking 
            a challenging entry-level position in software development where I can utilize my skills in HTML, CSS, JavaScript, Java, Python, SQL, and Git.
          </p>
          <div className="sm:mt-6 sm:space-x-10 sm:flex">
            <a  
              href="public\resume.pdf"
              download="Dinesh_Resume.pdf"
              type="application/pdf"
              className="sm:mt-4 sm:bg-sky-500 sm:hover:bg-gradient-to-r sm:from-blue-500 sm:to-purple-500 sm:px-[20px] sm:py-[10px] sm:text-center sm:rounded-lg sm:hover:-translate-y-1 sm:transition-all"
            > 
              Resume
            </a>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="sm:mt-4 sm:border sm:border-blue-500/50 sm:text-blue-500 sm:px-[10px] sm:py-[10px] sm:text-center sm:rounded-lg sm:hover:-translate-y-1 sm:transition-all"
            >
              Contact me
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 sm:h-1/2 sm:flex sm:items-center sm:justify-center">
          <img 
            className="sm:w-full sm:h-auto" 
            src="https://cdn-res.keymedia.com/cdn-cgi/image/f=auto/https://cdn-res.keymedia.com/cms/images/us/069/0270_638342863652718785.jpg" 
            alt="home image, person with laptop, coding"
          />
        </div>
      </div> 
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div> 
  );
};
