import { FaStar } from "react-icons/fa";
import lady from "../../assets/images/wonderLady.avif"
import plane from "../../assets/images/plane2.png"
import Button1 from "../Buttons/Button1";
import Button2 from "../Buttons/Button2";
import img1 from "../../assets/images/img1.avif"
import img2 from "../../assets/images/img2.avif"
import img3 from "../../assets/images/img3.avif"
import img4 from "../../assets/images/img4.avif"

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
        <div className="flex w-full p-6">
            <div className="w-full">
                <img src={lady} alt="wanderlady"></img>
            </div>

            <div className="w-full p-[20px]">

                <div className="flex border p-1 justify-left items-center">
                    <img src={plane} alt="airoplane" className="w-40"></img>
                    <p className="text-[135px] font-bold">New Life</p>
                </div>

                <div className="border min-h[80px] p-2 pt-10 text-[22px] flex justify-center text-slate-500">
                    <p>Experience seamless booking tailored to your preferences - it's your<br></br>
                        flight, your way. Indulge in your dream journey, private and customized<br></br>
                        tours tailored just for you.
                    </p>
                </div>

                <div className="flex gap-5 p-[30px] border">
                    <Button2 word={"BOOK NOW"}/> <Button1 color=" bg-white text-blue-500" word={"EXPLORE MORE"}/>
                </div>

                <div className="flex justify-between p-3 border pt-[40px] ">

                <div className="flex flex-col justify-start gap-3 p-3 border">
                    <h2 className="text-[22px]">Happy Customers</h2>
                    <div className="flex  w-[400px]">
                        {
                            images.map((pic)=>(
                                <div key={pic.id}>
                                    <img src={pic.img} alt="image" className="rounded-full w-[60px]"></img>
                                </div>
                            ))
                        }
                        <p className="rounded-full w-[60px] border-2 border-slate-500 flex justify-center items-center font-bold text-[20px] p-2">5k+</p>
                    </div>
                </div>
                
                <div className="flex border p-3 gap-2 justify-center items-center">
                    <div>
                        <p className="text-[60px] font-bold">4.99</p>
                    </div>

                    <div className="flex justify-center flex-col">

                        <div className="flex gap-1">
                            <FaStar color="orange" size="20px"/>
                            <FaStar color="orange" size="20px"/>
                            <FaStar color="orange" size="20px"/>
                            <FaStar color="orange" size="20px"/>
                            <FaStar color="orange" size="20px"/>
                        </div>

                        <div>
                            <p className="text-[18px]">Average Ratings</p>
                        </div>
                    </div>
                </div>

                </div>

            </div>
        </div>
    )
};

export default NewLife;