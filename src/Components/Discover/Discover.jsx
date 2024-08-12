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
        <div className="w-full md:flex md:flex-col">

            <div className=" p-5 gap-2 flex  flex-col w-full ">
                <div className=" flex flex-col justify-center items-center " >
                    <div className="">
                       <img src={image} className=""></img> 
                    </div>
                    
                    <div className=" p-2 flex flex-col justify-center items-center w-full ">
                        <h2 className="font-poppins font-medium md:text-[40px] text-[25px]">Why Choose Us</h2>
                        <p className="text-[18px] font-OpenSans py-12">Choosing us means excellence, reliability
                        and innovation. We pride ourselves on delivering
                        exceptional quality and value to our clients.
                        </p>
                        
                        <div className="md:py-12">
                           <Button2 word={"DISCOVER"} />
                        </div>
                       

                    </div>
                </div>
               
                <div className="grid grid-cols-2 w-full gap-20 p-10 justify-items-center ">
                    {
                        tour.map((item)=>(
                            <div key={item.id} className="md:w-[320px] md:p-5 p-4 flex flex-col justify-center gap-3 rounded-xl shadow-xl md:text-[20px] min-w-[150px]">
                                <h1 className="font-bold md:text-[30px] min-w-[25px]">{item.title}</h1>
                                <p className="min-w-[80px]">{item.body}</p>
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className="p-10 md:p-3 flex flex-col gap-5  justify-center items-center">
                <div className="">
                    <img src={lady} alt="island" className="rounded-2xl md-w[20px]"></img>
                </div>
                <div className="w-full flex flex-col gap-5 ">
                    <div className="w-full  p-5 pb-5 flex justify-center items-center">
                        <p className="font-poppins text-[20px] font-medium">Our philosophy is simple: Our customer are <br></br>
                            the most important part of our bussiness.Here<br></br>
                            are some of our Services.
                        </p>
                    </div>

                    <div className=" bg-white rounded-2xl flex justify-between items-center gap-3 p-3 shadow-xl w-full ">
                        <div className=" bg-blue-100 rounded-lg flex justify-center items-center  p-3 w-full">
                            <div className="flex flex-col p-3 ">
                                <label htmlFor="destination" className="md:text-[22px] text-[20px]">Destination</label>
                                <input className="placeholder:text-slate-700 cursor-pointer border-2 border-blue-600 hover:border-white hover:rounded-full bg-blue-100 text-[18px] md:text-[20px] p-1 w-full" type="text" placeholder="Where you wanna go?" id="destination" name="destination" onChange={(e)=> handleInput(e)}></input>
                            </div>
                            <div className="p-2">
                                <IoIosArrowDown size="30px"/>
                            </div>
                            
                        </div>

                        <div className="md:min-w-[100px] hover:bg-red-600 flex justify-center items-center h-full bg-blue-500 text-white md:text-[15px] rounded-xl font-bold">
                            <button className="p-2">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Discover;