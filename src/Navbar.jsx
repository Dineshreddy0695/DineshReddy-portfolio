import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 z-40 w-full bg-cyan-700-grey backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 flex justify-between">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="font-mono text-xl font-bold text-white">
                        Dinesh <span className="text-blue-500">Portfolio</span>
                    </Link>
                </div>
                <div className="flex items-center space-4">
                    <Link to="/">
                        <button className="text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            Home
                        </button>
                    </Link>
                    <Link to="/about">
                        <button className="text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            About
                        </button>
                    </Link>
                    <Link to="/projects">
                        <button className="text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            Projects
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            Contact Me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
