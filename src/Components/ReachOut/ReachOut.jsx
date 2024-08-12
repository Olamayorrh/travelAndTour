import { Link } from "react-router-dom";

const ReachOut = ()=>{
    return(
        <div className="bg-blue-500  flex flex-col justify-center items-center p-3 my-[50px]">
            <div className="text-white flex flex-col justify-center items-center">
                <p className="font-semibold md:text-[30px] text-[35px]">Reach Out! Contact Us For Travel Assistance Today!</p>
                
            </div>

            <div className="flex md:p-2 justify-between items-center gap-3 rounded-3xl bg-white mt-[60px] border-2 p-2">
                <p className="md:text-[20px]">Book Your Favourite Place...</p>
                <Link to="/bookNow"><button className="text-white md:text-[15px]  bg-blue-500 rounded-3xl p-2">Contact Now</button></Link>
            </div>
            
        </div>
    )
};

export default ReachOut;