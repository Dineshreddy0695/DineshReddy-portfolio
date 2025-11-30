export const About=()=>{
    const frontend=["HTML","CSS","JavaScript","React","TailwindCSS"]
    const backend=["Node.js","Python","SQL",]
     return (
    <section id="extra-data" className="min-h-screen bg-black">
      <div className="container mx-auto  mt-20 max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-10">
          ABOUT ME  
        </h1>

       
        <div className="bg-gray-900 shadow-md rounded-2xl mb-8">
          <div className="p-6">
            <h2 className="text-2xl text-blue-400 font-semibold mb-4">
              Hobbies & Interests
            </h2>
            <p className="text-gray-300 mb-4">
              Outside of coding, I keep myself engaged with activities that
              inspire creativity and balance. These interests shape the way I
              approach problem-solving and teamwork.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Reading tech blogs & exploring new tools</li>
              <li>Playing strategy and puzzle video games</li>
              <li>Photography & editing</li>
              <li>Playing cricket and outdoor sports</li>
              <li>Listening to music for focus and relaxation</li>
            </ul>
          </div>
        </div>

       
        <div className="bg-gray-900 shadow-md rounded-2xl mb-8">
          <div className="p-6">
            <h2 className="text-2xl text-blue-400 font-semibold mb-4">
              Soft Skills
            </h2>
            <p className="text-gray-300 mb-4">
              I believe soft skills are just as important as technical expertise.
              These qualities help me communicate, adapt, and collaborate
              effectively in team environments.
            </p>
            <ul className="grid grid-cols-2 gap-3 text-gray-300">
              <li>Teamwork</li>
              <li>Problem-Solving</li>
              <li>Communication</li>
              <li>Time Management</li>
              <li>Quick Learner</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>

  
        <div className="bg-gray-900 shadow-md rounded-2xl mb-8">
          <div className="p-6">
            <h2 className="text-2xl text-blue-400 font-semibold mb-4">
              Certifications & Training
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Web Development Bootcamp – Udemy</li>
              <li>Python for Everybody – Coursera</li>
              <li>SQL and Databases – HackerRank Certificate</li>
              <li>Introduction to Cloud Computing – IBM Skills Network</li>
            </ul>
          </div>
        </div>

       
        <div className="bg-gray-900 shadow-md rounded-2xl mb-8">
          <div className="p-6">
            <h2 className="text-2xl text-blue-400 font-semibold mb-4">
              Volunteer Work & Activities
            </h2>
            <p className="text-gray-300 mb-4">
              I actively participate in community and extracurricular activities
              that enhance my leadership and teamwork skills.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Volunteered at university hackathons</li>
              <li>Assisted peers with coding practice sessions</li>
              <li>Member of college coding club</li>
              <li>Organized seminars on new technologies</li>
            </ul>
          </div>
        </div>

       
        <div className="bg-gray-900 shadow-md rounded-2xl">
          <div className="p-6">
            <h2 className="text-2xl text-blue-400 font-semibold mb-4">
              Future Learning Goals
            </h2>
            <p className="text-gray-300 mb-4">
              As a beginner, I am eager to keep expanding my knowledge and
              strengthening my technical expertise in new areas.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Advanced React.js & Next.js</li>
              <li>Cloud Platforms (AWS, Azure, GCP)</li>
              <li>Mobile App Development (React Native/Flutter)</li>
              <li>Introduction to AI & Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};