import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { offer } from "../BestOffer/BestOffer";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import BookNow from "../Booking/Booking";
// import { review } from "../Reviews/Reviews";
import Reviews from "../Reviews/Reviews";
import { RxAvatar } from "react-icons/rx";
import { FaStar } from "react-icons/fa";

 export const Datacontext = createContext();



const Context = ({children})=>{

    const navigate = useNavigate();
    // const location = useLocation();

    // console.log(location.state.previousUrl);
    

    const [info, setInfo] = useState([{}])

      const getInfo = (data)=>{
        setInfo(()=>[{...data}])
    };

    const [searchTerm, setSearchTerm] = useState("")

    const handleInput = (e)=>{
        setSearchTerm(e.target.value)
        
    };


    // state and function changing the state of the form to render and close the form
    const [openForm, setOpenForm] = useState(true)

    const closeForm = ()=>{
        setOpenForm(false);
        navigate(location.state.previousUrl)

    }

    useEffect(()=>{
        setOpenForm(true)
    },[openForm])

      // collecting and saving user info using state

      const getStorageState = JSON.parse(localStorage.getItem("data") || "[]")

     
     
      const [userInfo,setUserInfo] = useState(getStorageState)

      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [departure, setDeparture] = useState("")
      const [date, setDate] = useState("")
      const [destination, setDestination] = useState("")


      const [home, setHome] = useState(false)
  
      const handleForm = (e)=>{
        const successBooking = ()=>{
            Swal.fire({
                title: "Success!",
                text:"trip successfully booked",
                icon: 'success'
            });
        };

        const addUser = {
            id: userInfo.length + 1,
            name: name,
            email: email,
            departure: departure,
            date: date,
            destination: destination

        }

        if(name.length > 1 && email.length > 1 && departure.length > 1 && date.length > 1 && destination.length > 1){
            
            setUserInfo((prevData)=>{
                return  [...prevData, addUser]
            })

            successBooking();
            navigate("/")
        }else
        
        {
            
                alert("Kindly fill all spaces")
                navigate("/bookNow")
            
        }
    
      }
     
  
    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(userInfo))
 
    },[userInfo]);

  
    // routing back home after booking

    

   

    // admin registeration
    
    const storeAdmin = JSON.parse(localStorage.getItem("admin") || "[]")
    const [adminDetails, setAdminDetails] = useState(storeAdmin);


    // function and states handling the admin input
    const [ename, setEname] = useState("")
    const [eemail, setEemail] = useState("")
    const [epassword, setEpassword] = useState("")

    const handleAdminForm = (e)=>{
        const successRegister = ()=>{
            Swal.fire({
                title: "Registration Successful!",
                text:"You can now proceed to login",
                icon: 'success'
            });
        };

        const addAdmin = {
            id: adminDetails.length + 1,
            name: ename,
            email: eemail,
            password: epassword
          
        }

        if(ename.length > 1 && eemail.length > 1 && epassword > 1){
            
            setAdminDetails((prevData)=>{
                return  [...prevData, addAdmin]
            })

            successRegister()
        }else
        
        {
            
                alert("Kindly fill all spaces")
            
        }
    
     
      }
     
  
    useEffect(()=>{
        localStorage.setItem('admin', JSON.stringify(adminDetails))
 
    },[adminDetails]);



    //function and states handling review

    const saveReview = JSON.parse(localStorage.getItem("reviews") || "[]")

    const [revieew, setRevieew] = useState(saveReview)

    const [lname, setLname] = useState("")
    const [prof, setProf] = useState("")
    const [bodyy, setBodyy] = useState("")

    const handleReview= (e)=>{
        const reviewSubmitted = ()=>{
            Swal.fire({
                title: "Successful!",
                text:"Your review has been successfully sent",
                icon: 'success'
            });
        };

        const addReview = {
            id: revieew.length + 1,
            name: lname,
            occup: prof,
            head: "I Strongly Suggest",
            body: bodyy,
            image: <RxAvatar/>,
            star: <FaStar size="20px" color="orange"/>
          
        }

             setRevieew((prevData)=>{
                return  [...prevData, addReview]
            });

        
       
      }
       
      
      useEffect(()=>{
        localStorage.setItem('reviews', JSON.stringify(revieew))
 
    },[revieew]);

    //states for admin login

    const [userDetails, setUserDetails] = useState({});


    // function handling the input for admin login
    const targetInput =(e)=>{
  
      let name = e.target.name;
      let value = e.target.value
      
      setUserDetails((user)=>({
          ...user,[name]:value
  
      }));  
  
  
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userDetails);

       
            if(storeAdmin[0].password == userDetails.password  && storeAdmin[0].name == userDetails.name){
                alert("login successful")
                navigate("/admin")
            }else{
                alert("name or password incorrect")
            }
       

    };

    

    return(
        
        <Datacontext.Provider value={{offer,handleInput, info, getInfo,openForm,closeForm,searchTerm,getStorageState,handleForm,setName,setEmail,setDeparture,setDate,setDestination,
        home,setHome,handleAdminForm, setEname, setEemail,setEpassword, setLname,setProf,setBodyy,handleReview,saveReview,targetInput, handleSubmit, storeAdmin,userDetails,userInfo,setUserInfo}}>
            {children}
        </Datacontext.Provider>
    )
};

export default Context;