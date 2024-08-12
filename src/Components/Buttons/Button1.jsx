import { MdOutlineArrowOutward } from "react-icons/md";
const Button1 = (props)=>{
    return(
        <div>
            <button className={`w-full text-[6px] md:text-2xl font-semibold md:text-[15px] flex justify-center items-center  gap-1 p-1 rounded-full hover:bg-slate-800 focus:outline-none duration-300 ease-in-out ${ "bg-blue-500 text-white" || props.color}`}>{props.word}<MdOutlineArrowOutward size='18px'/></button>
        </div>
    )
}

export default Button1;

