import { FaGlobe,FaInstagram,FaWhatsapp  } from "react-icons/fa6";
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = ()=>{
    return(
        <div className="bg-black text-white py-[20px] w-full">
            <div className="flex justify-around md:gap-0 items-center p-[30px]">
               <div className="flex items-center min-w-[100px] gap-2 md:w-[400px]">
                    <FaGlobe color="blue" size={40}/>
                    <p className="">Wanderlust</p>
                </div>
                
                <div className="flex justify-center items-center md:gap-6 gap-3 md:flex-row flex-col text-[12px] mx-3">
                    <Link to="/" className="">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about" className="w-[50px]">About Us</Link>
                    <Link to="/contact">Contacts</Link>
                </div>
                <div className="flex gap-4 md:flex-row flex-col">
                    <div className="bg-blue-600 md:w-[40px] md:h-[40px] rounded-full flex justify-center items-center w-[30px] h-[30px]"><FaLinkedinIn /></div>
                    <div className="bg-blue-700 md:w-[40px] md:h-[40px] rounded-full flex justify-center items-center w-[30px] h-[30px]"><FaFacebookF /></div>
                    <div className="bg-gradient-to-b from-purple-600 via-red-600 to-yellow-500 md:w-[40px] md:h-[40px] rounded-full flex justify-center items-center w-[30px] h-[30px]"><FaInstagram /></div>
                    <div className="bg-green-500 md:w-[40px] md:h-[40px] rounded-full flex justify-center items-center w-[30px] h-[30px]"><FaWhatsapp /></div>
                </div>
            </div>

            <div className="flex justify-between md:px-36 px-10 py-20 border-t border-slate-500 w-full">

                <div className="w-full">
                        <p className="text-[12px]">&copy;2024 powered by mayowa</p>
                </div>

                <div className="flex gap-5 w-full text-[14px]">
                    <a href="#">Terms</a>
                    <a href="#">Cookies</a>
                    <a href="#">Privacy</a>
                    <a href="#">policy</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;