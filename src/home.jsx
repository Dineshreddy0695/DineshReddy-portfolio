import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div id="home" className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg flex max-w-[600px] text-center">I'm a passionate developer.Motivated and detail-oriented engineering graduate seeking 
          a challenging entry-level position in software development where I can utilize my skills in HTML, CSS, JavaScript, Java, Python,SQL, and Git .</p>
        <div className="mt-6 space-x-10 flex">
          <a href="src/DINESH RESUME.pdf" download className="mt-4 bg-sky-500  hover:bg-gradient-to-r from-blue-500 to-purple-500  px-[20px] py-[10px]  text-center rounded-lg hover:-translate-y-1 transition-all"> Resume</a>
          <a className=" mt-4 border border-blue-500/50  text-blue-500 px-[10px] py-[10px]  text-center rounded-lg hover:-translate-y-1 transition-all" href="#contact"> Contact me</a>
        </div>
      </div>
    </div>
  );
};
