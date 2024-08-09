import { FaGlobe,FaInstagram,FaWhatsapp  } from "react-icons/fa6";
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = ()=>{
    return(
        <div className="bg-black text-white py-[20px]">
            <div className="flex justify-around items-center p-[30px]">
               <div className="flex items-center">
                    <FaGlobe color="blue" size={40}/>
                    <p >Wanderlust</p>
                </div>
                
                <div className="flex gap-6">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contacts</Link>
                </div>
                <div className="flex gap-4">
                    <div className="bg-blue-600 w-[40px] h-[40px] rounded-full flex justify-center items-center"><FaLinkedinIn /></div>
                    <div className="bg-blue-700 w-[40px] h-[40px] rounded-full flex justify-center items-center"><FaFacebookF /></div>
                    <div className="bg-gradient-to-b from-purple-600 via-red-600 to-yellow-500 w-[40px] h-[40px] rounded-full flex justify-center items-center"><FaInstagram /></div>
                    <div className="bg-green-500 w-[40px] h-[40px] rounded-full flex justify-center items-center"><FaWhatsapp /></div>
                </div>
            </div>

            <div className="flex justify-between px-36 py-20 border-t border-slate-500">

                <div>
                        <p>&copy;2024 powered by mayowa</p>
                </div>

                <div className="flex gap-5">
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