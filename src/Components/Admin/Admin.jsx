import { useContext } from "react"
import { Datacontext } from "../ContextComponent/Context"

const Admin = ()=>{
    const {getStorageState} = useContext(Datacontext)
    console.log(getStorageState);
    
    return(
        
        <div className="flex flex-col justify-center items-center p-4">
            <h1 className="font-bold text-[30px]">DETAILS OF BOOKED FLIGHT</h1>
           
            <table className=" border-2 border-separate border-spacing">
                <thead>
                    <tr className=" bg-gray-300 border-2 text-[25px]">
                        <th className="p-3 px-10">S/N</th>
                        <th className="py-3 px-28">Name</th>
                        <th className="py-3 px-28">Departure</th>
                        <th className="py-3 px-28">Destination</th>
                        <th className="py-3 px-28">Travel Date</th>
                        <th className="py-3 px-28">Email</th>
                    </tr>
                </thead>

                {
                    getStorageState.map((user)=>(

                        <tbody id={user.id} className="p-3">
                            <tr className="border-2 " >
                                <td className="text-[25px] text-center">{user.id}</td>
                                <td className="text-[25px] flex justify-center items-center">{user.name}</td>
                                <td className="text-[25px] text-center">{user.departure}</td>
                                <td className="text-[25px] text-center">{user.destination}</td>
                                <td className="text-[25px] text-center">{user.date}</td>
                                <td className="text-[25px] text-center">{user.email}</td>
                            </tr>
                        </tbody>

                    ))
                }

                
            </table>
        
           
         
            
           
        </div>
    )
};

export default Admin;