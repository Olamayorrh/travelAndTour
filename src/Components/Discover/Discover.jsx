import { IoIosArrowDown } from "react-icons/io";

import image from "../../assets/images/girl.avif"
import lady from "../../assets/images/girl2.avif"
import Button2 from "../Buttons/Button2";
import { useContext } from "react";
import { Datacontext } from "../ContextComponent/Context";
const Discover = ()=>{
    const {handleInput} = useContext(Datacontext)
    const tour = [
        {
            id:1,
            title: "We Make Our Process Easy",
            body: `Your flight made easy,simplyfying travel from start to finishing point.`
        },
        {
            id:2,
            title: "Private & Customized Tour",
            body: `indulge in your dream journey, private and customized tours tailored just for you.`
        },
        {
            id:3,
            title: "Low Price Tour Budget",
            body: `indulge in your dream journey,private and customized tours tailored just for you.`
        },
        
        {
            id:4,
            title: "Immigration and Passport Help",
            body: `Your gateway to the world expert immigration passport assistance at your reach`
        }
    ]
    return(
        <div className="w-full flex">

            <div className="w-full p-5 gap-2">
                <div className="flex" >
                    <div>
                       <img src={image}></img> 
                    </div>
                    
                    <div className=" p-2 ">
                        <h2 className="font-poppins font-medium text-[40px]">Why Choose Us</h2>
                        <p className="text-[18px] font-OpenSans py-12">Choosing us means excellence, reliability<br></br>
                        and innovation. We pride ourselves on delivering<br></br>
                        exceptional quality and value to our clients.
                        </p>
                        
                        <div className="py-12">
                           <Button2 word={"DISCOVER"} />
                        </div>
                       

                    </div>
                </div>
               
                <div className="grid grid-cols-2 w-full gap-10 p-10 text-center">
                    {
                        tour.map((item)=>(
                            <div key={item.id} className="w-[320px] p-5 flex flex-col justify-center rounded-xl shadow-xl text-[20px]">
                                <h1 className="font-bold text-[30px]">{item.title}</h1>
                                <p>{item.body}</p>
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className="p-10  flex flex-col gap-5">
                <div className=" pb-5">
                    <img src={lady} alt="island" className="border rounded-2xl"></img>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full  p-5 pb-5">
                        <p className="font-poppins text-[20px] font-medium">Our philosophy is simple: Our customer are <br></br>
                            the most important part of our bussiness.Here<br></br>
                            are some of our Services.
                        </p>
                    </div>

                    <div className=" bg-white rounded-2xl flex justify-between gap-3 p-3 shadow-xl">
                        <div className=" bg-blue-100 rounded-lg flex justify-center items-center w-full p-2">
                            <div className="flex flex-col p-3 ">
                                <label htmlFor="destination" className="text-[22px]">Destination</label>
                                <input className="placeholder:text-slate-700 cursor-pointer border-2 hover:border-white hover:rounded-full bg-blue-100 text-[20px] p-1" type="text" placeholder="Where you wanna go?" id="destination" name="destination" onChange={(e)=> handleInput(e)}></input>
                            </div>
                            <div className="p-2">
                                <IoIosArrowDown size="30px"/>
                            </div>
                            
                        </div>

                        <div className="w-full border-2 flex justify-center bg-blue-500 text-white text-[25px] rounded-xl font-bold">
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Discover;