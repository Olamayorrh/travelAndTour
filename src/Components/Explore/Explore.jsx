import { offer } from "../BestOffer/BestOffer"
import { GoArrowUpRight } from "react-icons/go";
const Explore = ()=>{
    return(
        <div className="w-full">
            <div className="flex flex-col justify-center items-center p-3">
                <h1 className="p-3 font-semibold text-[30px]">Gallery Explore Top Places</h1>
                <p className="text-[20px] text-center">Visitors to Gallery Explore Top Place are created by an atmosphere that stimulates the senses and ignites imagination</p>
                
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-items-center p-10 w-full gap-3 lg:gap-20 grid-cols-1">
                {
                    offer.map((item)=>(
                        <div key={item.id} className="md:w-[320px] md:h-[320px] lg:w-[320px] lg:h-[320px] bg-cover rounded-2xl" style={{backgroundImage: `url(${item.image})`}}>
                            <div className="flex justify-between p-5 items-center mt-[360px] md:mt-[225px]">

                                <div>
                                    <p className="text-white text-[20px] font-semibold">Thailand</p>
                                    <p className="text-white">Stunning Places</p>
                                </div>

                                <div>
                                    <button className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center "><GoArrowUpRight color="blue"/></button>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div className="w-full flex justify-center items-center  lg:justify-center  ">
                    <button className="w-full rounded-full p-2 text-white bg-blue-500">View All</button>
                </div>
            </div>
        </div>
    )
};

export default Explore;