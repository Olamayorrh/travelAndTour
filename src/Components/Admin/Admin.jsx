import { useContext } from "react"
import { Datacontext } from "../ContextComponent/Context"

const Admin = ()=>{
    const {getStorageState,setUserInfo} = useContext(Datacontext)
    console.log(getStorageState);

    const doDelete = (storeid)=>{
        console.log(storeid);
        
      const newStore = getStorageState.filter((item)=> item.id !== storeid);
      setUserInfo(newStore)

    }
    
    
    return(
        
        <div className="flex flex-col justify-center items-center p-4 w-full">
            <h1 className="font-bold ">DETAILS OF BOOKED FLIGHT</h1>
           
            <table className=" border-2 border-separate border-spacing w-full">
                <thead>
                    <tr className=" bg-gray-300 border-2 ">
                        <th className="p-2">S/N</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Departure</th>
                        <th className="p-2">Destination</th>
                        <th className="p-2">Travel Date</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Terminate</th>
                    </tr>
                </thead>

                {
                    getStorageState.map((user)=>(
                        
                        
                        <tbody id={user.id} className="p-3">
                            <tr className="border-2 " >
                                <td className="text-center">{user.id}</td>
                                <td className="text-center">{user.name}</td>
                                <td className="text-center">{user.departure}</td>
                                <td className="text-center">{user.destination}</td>
                                <td className="text-center">{user.date}</td>
                                <td className="text-center">{user.email}</td>
                                <td className="text-center" onClick={()=>doDelete(user.id)}><button  className="bg-red-500 p-2 text-white">cancel</button></td> 
                                
                                
                            </tr>
                        </tbody>
                       

                    ))
                }

                
            </table>
        
           
         
            
           
        </div>
    )
};

export default Admin;