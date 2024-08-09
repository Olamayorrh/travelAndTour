import { MdOutlineArrowOutward } from "react-icons/md";
const Button1 = (props)=>{
    return(
        <div>
            <button className={`text-2xl font-semibold w-60 flex justify-center align-center  gap-1 p-3 rounded-full hover:bg-slate-800 focus:outline-none duration-300 ease-in-out ${ "bg-blue-500 text-white" || props.color}`}>{props.word}<MdOutlineArrowOutward size='20px'/></button>
        </div>
    )
}

export default Button1;

