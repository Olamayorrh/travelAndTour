import { useContext } from "react";
import { Datacontext } from "../ContextComponent/Context";

const BookNow = ()=>{

    const {userInput, handleForm,setOpenForm} = useContext(Datacontext)

    return(
        <div className="bg-white border-2 p-5 w-full flex flex-col justify-center items-center">
            <div className="border-2 p-5 w-[800px] rounded-3xl">
            <button className="flex justify-end w-full text-[30px]" onClick={()=>{setOpenForm(false)}}>X</button>
            <h1 className="font-semibold text-[35px]">Book Your Trip</h1>
            <form onSubmit={handleForm} className="border-2 p-3 w-full">
                <div className="border rounded-full w-full p-3 flex my-3">
                    <label htmlFor="name" className=" w-[20%] p-2 ">Name:</label>
                    <input type="text" id="name" name="name" onChange={(e)=>userInput(e)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[18px]"></input>
                </div>
                <div  className="border rounded-full w-full p-3 flex my-3">
                    <label htmlFor="email" className=" w-[20%] p-2">Email:</label>
                    <input type="email" id="email" name="email" onChange={(e)=>userInput(e)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[18px]"></input>
                </div>
                <div  className="border rounded-full w-full p-3 flex my-3">
                    <label htmlFor="departure" className=" w-[20%] p-2">Departure:</label>
                    <input type="text" id="departure" name="departure" onChange={(e)=>userInput(e)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[18px]"></input>
                </div>
                <div  className="border rounded-full w-full p-3 flex my-3">
                    <label htmlFor="date" className=" w-[20%] p-2">Departure Date:</label>
                    <input type="date" id="date" name="date" onChange={(e)=>userInput(e)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[18px]"></input>
                </div>
                <div  className="border rounded-full w-full p-3 flex my-3">
                    <label htmlFor="destination" className=" w-[20%] p-2">Destination:</label>
                    <input type="text" id="destination" name="destination" onChange={(e)=>userInput(e)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[18px]"></input>
                </div>
                <div className="flex justify-around">
                    <button type="delete" className="border bg-red-600 w-[100px] rounded-full p-2 text-white" onClick={()=>{setOpenForm(false)}}>Cancel</button>
                    <button type="submit"  className="border bg-blue-600 w-[100px] rounded-full p-2 text-white">Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
};

export default BookNow;