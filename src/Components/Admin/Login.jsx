import { useContext } from "react";
import { Datacontext } from "../ContextComponent/Context";

const Login = ()=>{
    
    const {targetInput, handleSubmit} = useContext(Datacontext)
    return(
        <div className="border-2 w-full flex flex-col justify-center p-3 rounded-3xl" >
            <h1 className="text-center">REGISTER FORM</h1>
            <form onSubmit={handleSubmit} className="p-3">
               
                <div className="border-2 p-2 mb-3 flex">
                    <label htmlFor="email" className="w-[30%] p-2">Name:</label>
                    <input type="text" name="name" onChange={targetInput} id="email" className="w-[80%] border-2 border-blue-300 p-2 outline-none rounded-2xl hover:border-blue-600"></input>
                </div>
                <div className="border-2 p-2 mb-3 flex">
                    <label htmlFor="password" className="w-[30%] p-2">password:</label>
                    <input type="password" name="password"  onChange={targetInput} id="password" className="w-[80%] border-2 border-blue-300 p-2 outline-none rounded-2xl hover:border-blue-600"></input>
                </div>
                <div className="border-2 p-2 rounded-3xl text-center bg-blue-500 text-white">
                    <button type="submit" >submit</button>
                </div>
            </form>
        </div>
    )
};

export default Login;