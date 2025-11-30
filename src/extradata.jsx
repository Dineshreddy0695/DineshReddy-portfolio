import React from "react";

export const ExtraData = () => {
  const frontend=["HTML","CSS","JavaScript","React","TailwindCSS"]
    const backend=["Node.js","Python","SQL",]
    return(
        <section id= "about" className="min-h-screen flex items-center justify-center py-20">
             <div className="  max-w-3xl mx-auto px-4 flex flex-col items-center justify-center  ">
            <h2 className="  text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent px-0  pt-0 py-10" >About me</h2>
            <div className= "   rounded-xl p-9 border-white/10 border hover:-translate-y-1 transition-all              ">
                <p className="text-grey-300 mb-6">I am a passionate developer.Motivated and detail-oriented engineering graduate seeking</p>
                    <div className=" flex gap-16"> 
                        <div className="rounded-xl py-4 ">
                           <h3 className="text-xl font-bold mb-4 ">Frontend </h3> 
                           <div className="flex flex-wrap gap-2">
                            {frontend.map((tech)=>(<span key={tech} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white ">{tech}</span>))}
                           </div>
                        </div>
                        <div className="rounded-xl py-4 ">
                            <h3 className="text-xl font-bold mb-4 ">Backend </h3> 
                            <div className="flex flex-wrap gap-2">
                            {backend.map((tech)=>(<span key={tech} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm  hover:bg-blue-500 hover:text-white">{tech}</span>))}
                           </div>
                        </div>
                    </div>
                
                
            </div>
            <div className="grid grid-cols md:grid-cols-2 gap-4 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
               <h3 className="text-xl font-bold"> Education </h3>
               <li>
                <strong className="text-sm">Bachelor of Technology in Computer Science</strong><p className="text-xs"> -Anantha Lakshmi Institute of Technology and Sciences  (2022-2026)</p>
               </li>
               </div>
               <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold"> Experience </h3>
               <p className="text-sm"> Software Engineer at XYZ Company </p>
               </div>

            </div>
            </div>
        </section>
                   
       
    )
}