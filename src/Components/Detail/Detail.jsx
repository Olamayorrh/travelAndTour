import { useContext } from "react";

import { Datacontext } from "../ContextComponent/Context";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import BookNow from "../Booking/Booking";

const Detail = ()=>{

    const navigate = useNavigate();
   
    const {info,setShowForm, showForm} = useContext(Datacontext)
    return(
        <div className=" w-full flex justify-center items-center pt-[80px] gap-[40px]">
        {
            info.map((tour)=>(
                <div key={tour.id} className="w-[850px] bg-cover rounded-2xl " style={{backgroundImage: `url(${tour.image}) `}}>

                    <div className="flex p-3 gap-3">
                        <div className="rounded-full bg-white w-[100px] flex justify-center items-center p-2">{tour.cat}</div>
                        <div className="rounded-full bg-white w-[100px] flex justify-center items-center gap-2 p-2">{tour.icon}{tour.location}</div>
                    </div>


                    <div className="flex justify-between pr-10 pl-3 mt-[310px] pb-3">
                        <div className="rounded-full w-[250px] p-3 flex bg-white justify-center gap-3">
                            <p>{tour.rep}</p>
                            <p>{tour.each}</p>
                            <p>{tour.price}</p>
                        </div>

                        <div className="w-[100px] bg-blue-700 cursor-pointer rounded-3xl p-2 flex justify-center items-center border-2">
                            <button className="rounded-full text-white" onClick={()=> navigate("/bookNow")}>Book Now</button>
                        </div>

                       
                    </div>
                </div>
            ))
        }

              
    </div>
    )
};

export default Detail;