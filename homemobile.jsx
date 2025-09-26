import { useState } from "react";
import { Contact } from "./Contact";

export const HomeMobile = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
        Welcome to My Portfolio
      </h1>
      <div className="mt-6 flex justify-center">
        <img
          className="w-3/4 h-auto"
          src="https://cdn-res.keymedia.com/cdn-cgi/image/f=auto/https://cdn-res.keymedia.com/cms/images/us/069/0270_638342863652718785.jpg"
          alt="home image, person with laptop, coding"
        />
      </div>
      <p className="mt-20 text-base text-center">
        I'm a passionate developer. Motivated and detail-oriented engineering graduate seeking
        a challenging entry-level position in software development where I can utilize my skills in
        HTML, CSS, JavaScript, Java, Python, SQL, and Git.
      </p>
       
      <div className="mt-6 flex flex-col gap-4 w-full items-center">
        <a
          href="public\\resume.pdf"
          download="Dinesh_Resume.pdf"
          type="application/pdf"
          className="bg-sky-500 px-6 py-2 text-center rounded-lg hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all w-full"
        >
          Resume
        </a>
        <button
          onClick={() => setIsContactOpen(true)}
          className="border border-blue-500/50 text-blue-500 px-6 py-2 text-center rounded-lg transition-all w-full"
        >
          Contact me
        </button>
      </div>

      

      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};
