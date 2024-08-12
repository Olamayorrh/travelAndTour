import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaStar } from "react-icons/fa";
import man1 from "../../assets/images/man1.avif"
import { useContext } from "react";
import { Datacontext } from "../ContextComponent/Context";

export const review = [
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

    const {saveReview} = useContext(Datacontext)

    console.log(saveReview);
    

    const settings = {
    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 640,
                settings: {
                  
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
      };

    
    return (
        <div className="flex justify-center items-center flex-col w-full border-2 p-[20px] bg-blue-200">
            <div className=" w-full flex flex-col justify-center items-center p-3 pb-8">
                <h1 className="text-center font-bold md:text-[25px] text-[20px] p-3">Check What Our Customers Say About Us</h1>
                <p className="text-[20px]">"Check what our customers say about us" is an invitation to explore the experiencesand opinions of those who have interacted with a particular product, service or brand</p>  
                
            </div>

          
            <div className="md:w-3/4  w-full pb-[80px]">
           
                <Slider {...settings}  >
                    {
                        
                        review.map((item)=>(
                            
                            <div id={item.id} className="rounded-2xl bg-blue-300 p-3 md:w-[250px] w-[100px]">
                                
                                <div className="flex justify-center flex-col gap-3 rounded-2xl bg-white p-3">
                                    
                                    <div className="flex items-center gap-3 p-3 pb-0">
                                        <div className="flex">{item.star}{item.star}{item.star}{item.star}{item.star}</div>
                                        <div>(5)</div>
                                    </div>
                                    
                                    
                                    <div>
                                        <p className="new text-[25px] md:text-[18px] font-medium  mt-[-20px] ">{item.head}</p>

                                        <p className="p-2 w-[300px] md:w-[200px] text-[18px]">{item.body}</p>
                                    </div>
                                </div>

                                <div className="flex p-3 gap-3">
                                    <div >
                                        <img src={item.image} className="w-[80px] h-[80px] rounded-full"></img>
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