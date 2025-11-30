 import { Link } from 'react-router-dom';
    export const Projects=()=>{
    return(
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-[-100px]"> 
            <h2 className="items-center text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent px-0 py-20">Projects</h2>
            <div className=" sm:flex  gap-8 max-w-full py-10 px-4">
                <div className="p-4 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-lg font-bold mb-4 flex justify-center">E-commerce Website</h3>
                    <div>
                        <img className="rounded-lg max-h-50 w-auto " src="https://mir-s3-cdn-cf.behance.net/projects/404/f4f007178151389.Y3JvcCwxNjAwLDEyNTEsMCwxNzQ.jpg" alt="Project 1 image" />
                    </div>
                    <div>
                        <div className="flex justify-center pt-5 gap-4">
                            <a 
                                href="https://dineshsoulstore.myshopify.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-blue-500/10 flex justify-center pt-2 text-blue-500 p-10 pb-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white"
                                
                                >
                                Live Demo
                                </a>
                        </div>
                    </div>
                    
                </div>
                 <div className="p-4 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-lg font-bold mb-4 flex justify-center">Virtual Assistant</h3>
                    <div>
                        <img className="w-full rounded-lg max-h-50" src="https://aifreeimages.com/wp-content/uploads/2024/08/real-time-conversations.jpeg" alt="Project 1 image" />
                    </div>
                    <div>
                        <div className="flex justify-center pt-5 gap-4">
                            <a 
                                href="https://www.genesys.com/resources/genesys-cloud-virtual-agent-demo?utm_source=chatgpt.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-blue-500/10 flex justify-center pt-2 text-blue-500 p-10 pb-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white"
                                
                                >
                                Live Demo
                                </a>
                           <Link to="/virtual-assistant">
                                <span className="bg-blue-500/10 flex justify-center pt-2 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white">know more</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-lg font-bold mb-4 flex justify-center">Portfolio</h3>
                    <div>
                        <img className="rounded-lg max-h-50" src="https://i.etsystatic.com/20116942/r/il/ebb4be/6607106719/il_fullxfull.6607106719_ha19.jpg" alt="Project 1 image" />
                    </div>
                    <div>
                        <div className="flex justify-center pt-5 gap-4">
                            <a 
                                href="https://Dineshreddy0695.github.io/Dinesh-Portfolio-1/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-blue-500/10 flex justify-center pt-2 text-blue-500 p-10 pb-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white"
                                
                                >
                                Live Demo
                                </a> 
                            

                             <Link to="/internship">
                                <span className="bg-blue-500/10 flex justify-center pt-2 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white">know more</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
