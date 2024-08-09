import logo from "../../assets/images/location.png"
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import lady from '../../assets/images/maldive1.jpeg';
import img1 from '../../assets/images/paris.jpeg';
import img2 from '../../assets/images/maldiv4.jpeg';
import img3 from '../../assets/images/dubai1.jpeg';
import img4 from '../../assets/images/egypt1.jpeg';


import FlightDetail from "../FlightDetails/FlightDetail";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Datacontext } from "../ContextComponent/Context";



export const offer = [
    {
        id: 1,
        cat: "economy",
        image: lady,
        rep: "price",
        Name: "Moscow",
        location: "Russia",
        price: "$600",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 2,
        cat: "business",
        image: lady,
        rep: "price",
        Name: "Moscow",
        location: "Russia",
        price: "$10000",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 3,
        image: lady,
        cat: "firstclass",
        rep: "price",
        Name: "Moscow",
        location: "Russia",
        price: "$15000",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 4,
        image: img1,
        cat: "economy",
        rep: "price",
        Name: "paris",
        location: "France",
        price: "$600",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 5,
        image: img1,
        cat: "business",
        rep: "price",
        Name: "Paris",
        location: "France",
        price: "$10000",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 6,
        image: img1,
        cat: "firstclass",
        rep: "price",
        Name: "Paris",
        location: "France",
        price: "$20000",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 7,
        image: img2,
        cat: "economy",
        rep: "price",
        Name: "Maldive",
        location: "Maldives",
        price: "$15000",
        each: "per person",
        icon: <FaTruckArrowRight />
    },

    {
        id: 8,
        image: img2,
        cat: "business",
        rep: "price",
        Name: "Maldives",
        location: "Maldives",
        price: "$20000",
        each: "per person",
        icon: <FaTruckArrowRight />
    },
    {
        id: 9,
        image: img2,
        cat: "firstclass",
        rep: "price",
        Name: "Maldives",
        location: "Maldives",
        price: "$3000",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 10,
        image: img3,
        cat: "economy",
        rep: "price",
        Name: "UAE",
        location: "Dubai",
        price: "$10000",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 11,
        image: img3,
        cat: "business",
        rep: "price",
        Name: "UAE",
        location: "Dubai",
        price: "$20000",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 12,
        image: img3,
        cat: "firstclass",
        rep: "price",
        Name: "UAE",
        location: "Dubai",
        price: "$30000",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 13,
        image: img4,
        cat: "economy",
        rep: "price",
        Name: "Giza",
        location: "Egypt",
        price: "$500",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 14,
        image: img4,
        cat: "business",
        rep: "price",
        Name: "Giza",
        location: "Egypt",
        price: "$800",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    {
        id: 15,
        image: img4,
        cat: "firstclass",
        rep: "price",
        Name: "Giza",
        location: "Egypt",
        price: "$1000",
        each: "per person",
        icon: <FaTruckArrowRight />

    },

    
]

console.log(FlightDetail);



const BestOffer = (props)=>{

    const {offer, getInfo,searchTerm} = useContext(Datacontext)

   const buttonn =[
        {
            id:1,
            icon:<FaTruckArrowRight />,
            label: 'location'
        },

        {
            id:2,
            icon:<FaTruckArrowRight />,
            label: 'location'
        },

        {
            id:3,
            icon:<FaTruckArrowRight />,
            label: 'location'
        },

        {
            id:4,
            icon:<FaTruckArrowRight />,
            label: 'location'
        },
    ]


   
    return(
        <div >
            <div className="flex w-full border-2 justify-between p-10">
                <div className="border-2 w-full">
                    <h1 className="font-bold text-[25px] pb-10">Best Offers</h1>
                    <p>Looking for the best offers around? Look no further!<br></br> 
                        Our company is dedicated to bringing you the most<br></br>
                        competitive deals in the market.
                    </p>
                </div>
            
            
                <div className="flex gap-2 border-2 w-full items-end">
                    {
                        buttonn.map((item)=>(
                            <div key={item.id} >
                                <button className="flex justify-center items-center gap-1 w-[120px] p-2 border-2 rounded-full">{item.icon}{item.label}</button>
                            </div>
                        ))
                    }
                
                </div>
            </div>

            <div className="grid grid-cols-3 border-2 justify-items-center p-10 w-full gap-3 ">

                    {
                        offer
                        .filter((elem)=>{
                            if(searchTerm == ""){
                                return  elem;

                            }else if((elem.location.toLowerCase()).includes(searchTerm.toLowerCase()) || (elem.cat.toLowerCase()).includes(searchTerm.toLowerCase()) || (elem.price).includes(`$${searchTerm}`)){
                                return elem;
                            }
                            
                        })

                        .map((elem)=>(
                            <div key={elem.id} className="w-[450px] h-[450px] bg-cover rounded-2xl " style={{backgroundImage: `url(${elem.image})`}}>

                            <div className="flex p-3 gap-3">
                                <div className="rounded-full bg-white w-[100px] flex justify-center items-center p-2">{elem.cat}</div>
                                <div className="rounded-full bg-white w-[100px] flex justify-center items-center gap-2 p-2">{elem.icon}{elem.location}</div>
                            </div>


                            <div className="flex justify-between pr-10 pl-3 mt-[310px]">
                                <div className="rounded-full w-[250px] p-3 flex bg-white justify-center gap-3">
                                    <p>{elem.rep}</p>
                                    <p>{elem.each}</p>
                                    <p>{elem.price}</p>
                                </div>

                                <div className="w-[50px] h-[50px] bg-blue-600 rounded-full flex justify-center items-center">
                                    <Link to={`product/${elem.id}`}><button className="rounded-full" onClick={()=>getInfo(elem)}><MdOutlineArrowOutward /></button></Link>
                                </div>
                            </div>
                        </div>
                        ))
                    }
               
            </div>


        </div>
    )
};

export default BestOffer;