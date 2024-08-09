import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaStar } from "react-icons/fa";
import man1 from "../../assets/images/man1.avif"

const review = [
    {
        id: 1,
        star: <FaStar size="20px" color="orange"/>,
        name: "Arefin Shuvo",
        occup:"Bussiness Man",
        head: "I Strongly Suggest",
        body: "Amazing experiences, seamless palnning, unforgetable adventure. The best travel agency and customer-focused.",
        image: man1
    },

    {
        id: 2,
        star: <FaStar size="20px" color="orange"/>,
        name: "Rohith Mehra",
        occup:"Bussiness Man",
        head: "I Strongly Suggest",
        body: "Amazing experiences, seamless palnning, unforgetable adventure. The best travel agency and customer-focused.",
        image: man1
    },
    {
        id: 3,
        star: <FaStar size="20px" color="orange"/>,
        name: "Jone doe",
        occup:"Bussiness Man",
        head: "I Strongly Suggest",
        body: "Amazing experiences, seamless palnning, unforgetable adventure. The best travel agency and customer-focused.",
        image: man1
    },
    {
        id: 4,
        star: <FaStar size="20px" color="orange"/>,
        name: "Arefin Shuvo",
        occup:"Bussiness Man",
        head: "I Strongly Suggest",
        body: "Amazing experiences, seamless palnning, unforgetable adventure. The best travel agency and customer-focused.",
        image: man1
    },
    {
        id: 5,
        star: <FaStar size="20px" color="orange"/>,
        name: "Rohith Mehra",
        occup:"Bussiness Man",
        head: "I Strongly Suggest",
        body: "Amazing experiences, seamless palnning, unforgetable adventure. The best travel agency and customer-focused.",
        image: man1
    },

    {
        id: 6,
        star: <FaStar size="20px" color="orange"/>,
        name: "Jone doe",
        occup:"Bussiness Man",
        head: "I Strongly Suggest",
        body: "Amazing experiences, seamless palnning, unforgetable adventure. The best travel agency and customer-focused.",
        image: man1
    }
]
const Reviews = ()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

    
    return (
        <div className="flex justify-center items-center flex-col w-full border-2 p-[20px] bg-blue-200">
            <div className=" w-full flex flex-col justify-center items-center p-3 pb-8">
                <h1 className="text-center font-bold text-[25px] p-3">Check What Our Customers Say About Us</h1>
                <p>"Check what our customers say about us" is an invitation to explore the experiencesand opinions of </p>
                <p>of those who have interacted with a particular product, service or brand</p>  
                
            </div>

          
            <div className="w-3/4 pb-[80px]">
           
                <Slider {...settings}>
                    {
                        
                        review.map((item)=>(
                            
                            <div key={item.id} className="rounded-2xl bg-blue-300 p-3 w-[350px]">
                                
                                <div className="flex flex-col gap-3 rounded-2xl bg-white p-3">
                                    
                                    <div className="flex items-center gap-3 p-3 pb-0">
                                        <div className="flex">{item.star}{item.star}{item.star}{item.star}{item.star}</div>
                                        <div>(5)</div>
                                    </div>
                                    
                                    
                                    <div>
                                        <p className="new text-[25px] font-medium  mt-[-20px] ">{item.head}</p>

                                        <p className="p-2 w-[300px] text-[18px]">{item.body}</p>
                                    </div>
                                </div>

                                <div className="flex p-3 gap-3">
                                    <div >
                                        <img src={man1} className="w-[80px] h-[80px] rounded-full"></img>
                                    </div>
                                    <div className="flex flex-col justify-end ">
                                        <p>{item.name}</p>
                                        <p>{item.occup}</p>
                                    </div>
                                </div>
                            </div>

                            
                        ))
                    }
                </Slider>
            
            </div> 
        </div>
    )
};

export default Reviews;