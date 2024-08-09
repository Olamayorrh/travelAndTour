import { FaGlobe } from "react-icons/fa6";
import Button1 from "../Buttons/Button1";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <>
            <div className="flex justify-around border p-6">
                <div className="flex items-center">
                    <Link to="/"><FaGlobe color="blue" size={40}/></Link> 
                    <Link to="/">Wanderlust</Link>
                </div>

                <div className="flex justify-center items-center gap-6 border rounded-full p-3 w-[400px] text-xl font-semibold cursor-pointer duration-300 ">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/services" className="hover:text-blue-500">Services</Link>
                    <Link to="/about" className="hover:text-blue-500">About Us</Link>
                    <Link to="/contact" className="hover:text-blue-500">Contact</Link>
                </div>

                <div>
                    <Button1 word={`Get Started`} />
                   
                </div>
            </div>
            
        </>
    )
}

export default Navbar;