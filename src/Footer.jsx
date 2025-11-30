import { Link } from "react-router-dom"

export const Footer = () =>{
    return (
        <footer>
            <div className="w-auto h-100  bg-gradient-to-r from-blue-950 to-blue-1000  text-black flex justify-around items-center">
                <div className=" sm:flex hover: cursor-pointer sm:gap-60 gap-30 pt-0 p-4">
                    <div className="flex flex-col gap-1">
                        <Link to="/contact" rel="noopener noreferrer">
                            <button className="hover:underline cursor-pointer text-blue-500">Contact Me</button>
                        </Link>
                        <div className="flex gap-2 items-center">
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://tse3.mm.bing.net/th/id/OIP.mB7Xk7spoeDbb45s09aK5gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="LinkedIn logo, blue and white, links to LinkedIn profile" className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://tse2.mm.bing.net/th/id/OIP.Qal7sKnVJUZ2L6jO6Z-REgHaHD?w=756&h=720&rs=1&pid=ImgDetMain&o=7&rm=3" alt="GitHub logo, black and white, links to GitHub profile" className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://tse2.mm.bing.net/th/id/OIP.55DCXbXlKDgEBoZhKxpzLAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Facebook logo, blue and white, links to Facebook profile" className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.pinimg.com/originals/6a/39/8e/6a398e2bffd61024b7fa8c6eaf6a4e62.png" alt="Instagram logo, multicolor, links to Instagram profile" className="w-5 h-5" />
                            </a>
                            <span className="hover:underline cursor-pointer text-gray-500"> - social media links</span>
                        </div>
                        <span className="hover:underline cursor-pointer text-gray-500"> - dineshreddy8641@gmail.com</span>
                        <span className="hover:underline cursor-pointer text-gray-500"> - Dinesh Reddy .v </span>
                    </div>
                    <div className="flex pt-5 flex-col gap-1">
                    <span id="documents" className="hover:underline cursor-pointer text-blue-500"> Documents </span>
                    <Link to="/terms" rel="noopener noreferrer"  className="text-gray-600 hover:text-blue-600 transition-colors">
                    
                          <button>Terms & Conditions</button>
                    </Link>
                    <Link to="/privacy" rel="noopener noreferrer"  className="text-gray-600 hover:text-blue-600 transition-colors">

                            <button>Privacy Policy</button>
                    </Link>
                    
                        </div>
                </div>
            </div>
        </footer>
    )
}