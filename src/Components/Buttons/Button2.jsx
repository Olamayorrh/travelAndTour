const Button2 = (props)=>{
    return(
        <>
            
            <button className="bg-blue-500 text-white text- text-lg font-semibold w-40 flex justify-center align-center p-3 rounded-full hover:bg-slate-800 focus:outline-none duration-300 ease-in-out">{props.word}</button>
       
        </>
    )
}

export default Button2;
