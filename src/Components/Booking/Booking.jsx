import { useContext } from "react";
import { Datacontext } from "../ContextComponent/Context";
import { Link, useNavigate } from "react-router-dom";


const BookNow = ()=>{
    const navigate = useNavigate()
    const {setName,setEmail,setDate,setDeparture,setDestination, handleForm,openForm,closeForm,getStorageState} = useContext(Datacontext);

   

    return(

        <>
            {
                openForm &&  <div className="py-[10px] w-full flex flex-col justify-center items-center">
                <div className="border-2 rounded-3xl p-3 md:w-[800px] pb-6">
                <button className="flex justify-end w-full text-[20px]" onClick={()=>navigate(-1)}>X</button>
                <h1 className="font-semibold text-[20px] text-center">Book Your Trip</h1>
                <form onSubmit={(e)=>e.preventDefault()} className="border-2 p-3 rounded-3xl w-full">
                    
                    <div className="border rounded-full mb-3 p-1 hover:border-blue-600 outline-none flex justify-center items-center md:justify-start gap-2">
                        <label htmlFor="name" className=" ">Name:</label>
                        <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} className="outline-none hover:rounded-full  p-2 text-[18px]"></input>
                    </div>
                    
                    <div  className="border rounded-full mb-3 p-1 hover:border-blue-600 outline-none flex justify-center items-center md:justify-start gap-2 ">
                        <label htmlFor="email" className="">Email:</label>
                        <input type="email" id="email" name="email"  onChange={(e)=>setEmail(e.target.value)} className="outline-none hover:rounded-full  p-2 text-[18px]"></input>
                    </div>
                    
                    <div  className="border rounded-full mb-3 p-1 hover:border-blue-600 outline-none flex justify-center items-center md:justify-start gap-2">
                        <label htmlFor="departure" className="">Departure:</label>
                        <input type="text" id="departure" name="departure"  onChange={(e)=>setDeparture(e.target.value)} className="outline-none hover:rounded-full  p-2 text-[18px]"></input>
                    </div>
                    
                    <div  className="border rounded-full mb-3 p-1 hover:border-blue-600 outline-none flex justify-center items-center md:justify-start gap-2">
                        <label htmlFor="date" className=" p-2">Departure Date:</label>
                        <input type="date" id="date" name="date"  onChange={(e)=>setDate(e.target.value)} className="outline-none hover:rounded-full  p-2 text-[18px]"></input>
                    </div>
                   
                    <div  className="border rounded-full mb-3 p-1 hover:border-blue-600 outline-none flex justify-center items-center md:justify-start gap-2">
                        <label htmlFor="destination" className="  p-2">Destination:</label>
                        <input type="text" id="destination" name="destination"  onChange={(e)=>setDestination(e.target.value)} className="outline-none hover:rounded-full  p-2 text-[18px]"></input>
                    </div>
                    
                    <div className="flex justify-around">
                        <button type="reset" className="border bg-red-600 w-[100px] rounded-full p-2 text-white" onClick={closeForm}>Reset</button>
                        <button type="submit"  className="border bg-blue-600 w-[100px] rounded-full p-2 text-white" onClick={handleForm}>Submit</button>
                    </div>
                </form>
                </div>
    
                
            </div>
            }
        </>
       
    )
};

export default BookNow;