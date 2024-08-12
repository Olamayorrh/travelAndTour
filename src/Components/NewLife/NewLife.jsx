import { FaStar } from "react-icons/fa";
import lady from "../../assets/images/wonderLady.avif"
import cam from "../../assets/images/cam.avif"
import plane from "../../assets/images/plane2.png"
import Button1 from "../Buttons/Button1";
import Button2 from "../Buttons/Button2";
import img1 from "../../assets/images/img1.avif"
import img2 from "../../assets/images/img2.avif"
import img3 from "../../assets/images/img3.avif"
import img4 from "../../assets/images/img4.avif"
import { Link } from "react-router-dom";

const NewLife = ()=>{

    const images = [
        {id:1,
         img:img1
        },

        {
            id:2,
            img:img2
        },

        {
            id:3,
            img:img3
        },

        {
            id:4,
            img:img4
        }
    ]
    return(
        <div className=" flex flex-wrap md:flex-wrap justify-center items-center bg-cover p-3 lg:flex">
            <div className="">
                <img src={cam} alt="wanderlady" className="w-full h-full md:w-[650px] bg-cover"></img>
            </div>

            <div className=" w-full">

                <div className="flex md:p-1 justify-center items-center">
                    <img src={plane} alt="airoplane" className="md:w-40 w-20"></img>
                    <p className="md:text-[100px] text-[40px] font-bold">New Life</p>
                </div>

                <div className="md:min-h[80px] md:p-2 md:pt-10 md:text-[22px] flex justify-center md:text-slate-500 p-3">
                    <p>Experience seamless booking tailored to your preferences - it's your<br></br>
                        flight, your way. Indulge in your dream journey, private and customized<br></br>
                        tours tailored just for you.
                    </p>
                </div>

                <div className="md:gap-5 md:p-[30px] flex p-3 gap-2 justify-center items-center">
                    <Link to="/bookNow"><Button2 word={"BOOK NOW"}/></Link> <Button1 color=" bg-white text-blue-500" word={"EXPLORE MORE"}/>
                </div>

                <div className="flex justify-between p-2 md:pt-[40px] w-full lg:justify-center lg:items-center">

                <div className="flex flex-col md:justify-start md:items-start justify-center p-2 lg:justify-center lg:items-centerw-full">
                    <h2 className="md:text-[22px]">Happy Customers</h2>
                    <div className="flex md:justify-start md:items-center md:w-[400px] ">
                        {
                            images.map((pic)=>(
                                <div key={pic.id}>
                                    <img src={pic.img} alt="image" className="rounded-full md:w-[60px] w-[50px]"></img>
                                </div>
                            ))
                        }
                        <p className="rounded-full md:w-[60px] md:h-[60px] w-[30px] h-[30px] border-slate-500 flex justify-center items-center font-bold text-[12px] p-3">5k+</p>
                    </div>
                </div>
                
                <div className="flex p-3 gap-2 justify-center items-center ">
                    <div >
                        <p className="md:text-[60px] font-bold text-[30px]">4.99</p>
                    </div>

                    <div className="flex justify-center items-center flex-col">

                        <div className="flex gap-1">
                            <FaStar color="orange" className="w-[10px] md:w-[20px]"/>
                            <FaStar color="orange" className="w-[10px] md:w-[20px]"/>
                            <FaStar color="orange" className="w-[10px] md:w-[20px]"/>
                            <FaStar color="orange" className="w-[10px] md:w-[20px]"/>
                            <FaStar color="orange" className="w-[10px] md:w-[20px]"/>
                        </div>

                        <div>
                            <p className="md:text-[18px] text-[12px]">Average Ratings</p>
                        </div>
                    </div>
                </div>

                </div>

            </div>
        </div>
    )
};

export default NewLife;