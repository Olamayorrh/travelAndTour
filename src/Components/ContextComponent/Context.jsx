import { createContext, useEffect, useState } from "react";
import { offer } from "../BestOffer/BestOffer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookNow from "../Booking/Booking";

 export const Datacontext = createContext();

const Context = ({children})=>{
    
    const [info, setInfo] = useState([{}]);

      const getInfo = (data)=>{
        setInfo(()=>[{...data}]);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (e)=>{
        setSearchTerm(e.target.value)
        
    }

    // Booknow user details

    // const getStorageState = ()=>{
        
    //     if(!items) return 
    //     else{
    //         return JSON.parse(items)
    //     }

         

    // }
    const store = ()=>{
        const items = localStorage.getItem("data")
        return items ? JSON.parse(items) : {} 

        
    }
   
    

    const [userdetails, setUserdetails] = useState(store)

    const userInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value
        setUserdetails((user)=>({
            ...user,[name]:value
        })
    )};


    const handleForm = (e)=>{
        e.preventDefault();
        console.log(userdetails);

     
    };


    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(userdetails));
 
    },[userdetails]);

   
//  close form

const [openForm, setOpenForm] = useState(false)

const showForm = ()=>{
   const navigate = useNavigate("/BookNow")
   navigate()
    setOpenForm(true)

    {openForm && <BookNow/>}

}
   

    






















    // const URL = "https://test.api.amadeus.com/v1";

    // const TokenURL = "https://test.api.amadeus.com/v1/security/oauth2/token";
   
    // const ID = `C8unZgPVDCbBWzW1RaA4H9zY9Q1eD9Dw`;
    
    // const SECRET = `as1AhPJWGMslkxUu`;

    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type' : 'application/x-www-form-urlencoded',
            
    //     },

    //     body: {
    //         'grant_type' : 'client_credentials',
    //         'client_secret' : `as1AhPJWGMslkxUu`,
    //         'client_id' : `C8unZgPVDCbBWzW1RaA4H9zY9Q1eD9Dw`
    //     }
    // };

    // fetch("https://test.api.amadeus.com/v1/security/oauth2/token",options)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error))
    
    
    
    
    
    // const AccessToken = async () => {
    //     const response = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", {grant_type: `client_credentials`, client_id: ID, client_secret: SECRET});
      
    //     console.log(response.data);
         
    //   };

    //   useEffect(()=>{
    //     AccessToken()
    //   },[])


    return(
        
        <Datacontext.Provider value={{offer, info, getInfo, searchTerm, handleInput, userInput, userdetails, handleForm, setOpenForm, showForm}}>
            {children}
        </Datacontext.Provider>
    )
};

export default Context;