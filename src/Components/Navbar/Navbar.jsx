import { FaGlobe } from "react-icons/fa6";
import Button1 from "../Buttons/Button1";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <>
            <div className="flex justify-around  md:p-6 w-full  p-3 gap-1">
                <div className="md:items-center flex items-center text-[12px]">
                    <Link to="/"><FaGlobe color="blue" size={40}/></Link> 
                    <Link to="/">Wanderlust</Link>
                </div>

                <div className="md:flex md:justify-center md:items-center md:gap-6 md:rounded-full gap-1 md:p-3 md:w-[400px] md:text-xl md:font-semibold flex justify-center items-center cursor-pointer duration-300 w-[200px] text-[12px]">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/services" className="hover:text-blue-500">Services</Link>
                    <Link to="/about" className="hover:text-blue-500">AboutUs</Link>
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