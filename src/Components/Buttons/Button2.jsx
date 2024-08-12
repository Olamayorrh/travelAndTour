const Button2 = (props)=>{
    return(
        <>
            
            <button className="bg-blue-500 text-white md:text-lg text-[10px] font-semibold md:w-40 flex justify-center items-center md:p-3 p-1 rounded-full hover:bg-slate-800 focus:outline-none duration-300 ease-in-out">{props.word}</button>
       
        </>
    )
}

export default Button2;
