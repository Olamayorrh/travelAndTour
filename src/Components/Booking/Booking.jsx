import { useContext } from "react";
import { Datacontext } from "../ContextComponent/Context";
import { Link } from "react-router-dom";


const BookNow = ()=>{

    const {setName,setEmail,setDate,setDeparture,setDestination, handleForm,openForm,closeForm,getStorageState} = useContext(Datacontext);

   

    return(

        <>
            {
                openForm &&  <div className="bg-white border-2 p-5 w-full flex flex-col justify-center items-center">
                <div className="border-2 p-5 w-[800px] rounded-3xl">
                <Link to="/"><button className="flex justify-end w-full text-[30px]" onClick={closeForm}>X</button></Link>
                <h1 className="font-semibold text-[35px]">Book Your Trip</h1>
                <form onSubmit={(e)=>e.preventDefault()} className="border-2 p-3 w-full">
                    
                    <div className="border rounded-full w-full p-3 flex my-3">
                        <label htmlFor="name" className=" w-[20%] p-2 ">Name:</label>
                        <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[18px]"></input>
                    </div>
                    
                    <div  className="border rounded-full w-full p-3 flex my-3">
                        <label htmlFor="email" className=" w-[20%] p-2">Email:</label>
                        <input type="email" id="email" name="email"  onChange={(e)=>setEmail(e.target.value)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[18px]"></input>
                    </div>
                    
                    <div  className="border rounded-full w-full p-3 flex my-3">
                        <label htmlFor="departure" className=" w-[20%] p-2">Departure:</label>
                        <input type="text" id="departure" name="departure"  onChange={(e)=>setDeparture(e.target.value)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[18px]"></input>
                    </div>
                    
                    <div  className="border rounded-full w-full p-3 flex my-3">
                        <label htmlFor="date" className=" w-[20%] p-2">Departure Date:</label>
                        <input type="date" id="date" name="date"  onChange={(e)=>setDate(e.target.value)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[20px]"></input>
                    </div>
                   
                    <div  className="border rounded-full w-full p-3 flex my-3">
                        <label htmlFor="destination" className=" w-[20%] p-2">Destination:</label>
                        <input type="text" id="destination" name="destination"  onChange={(e)=>setDestination(e.target.value)} className="hover:border-black hover:rounded-full w-[70%] p-2 text-[18px]"></input>
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