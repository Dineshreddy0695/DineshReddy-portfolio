 import { Link } from 'react-router-dom';
    export const Projects=()=>{
    return(
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-[-100px]"> 
            <h2 className="items-center text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent px-0 py-20">Projects</h2>
            <div className=" sm:flex  gap-8 max-w-full py-10 px-4">
                <div className="p-4 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-lg font-bold mb-4 flex justify-center">Power Theft Detection</h3>
                    <div>
                        <img className="rounded-lg max-h-50" src="https://tse1.mm.bing.net/th/id/OIP.nOopoU38-OM2wXdqczPAlgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Project 1 image" />
                    </div>
                    <div>
                        <div className="flex justify-center pt-5 gap-4">
                            <button className="bg-blue-500/10 flex justify-center pt-2 text-blue-500 p-10 pb-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white">live demo</button>
                            <div>
                                <Link to="/project1data">
                                    <button className="bg-blue-500/10 flex justify-center pt-2 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white">know more</button>
                                </Link>
                            </div>
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
                            <button className="bg-blue-500/10 flex justify-center pt-2 text-blue-500 p-10 pb-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white">live demo</button>
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
                            <button className="bg-blue-500/10 flex justify-center pt-2 text-blue-500 p-10 pb-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white">live demo</button>
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