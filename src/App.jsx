import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import LayOut from "./Components/MainLayout/LayOut"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"
import Detail from "./Components/Detail/Detail"
import BookNow from "./Components/Booking/Booking"
import Admin from "./Components/Admin/Admin"
import Register from "./Components/Admin/Register"
import NewReview from "./Components/Reviews/NewReview"




const App = ()=>{
  return (
    <div className="w-full border-2 border-red-600 p-[10px]">
        <BrowserRouter>
                <Navbar/>
                <Routes>
                      <Route path="/" element={<LayOut/>}/> 
                      <Route path="/services" element={<Services/>}/> 
                      <Route path="/about" element={<About/>}/> 
                      <Route path="/contact" element={<Contact/>}/> 
                      <Route path="/bookNow" element={<BookNow/>}/>
                      <Route path='/product/:productid' element={<Detail />} />
                      <Route path="/admin" element={<Admin/>}></Route>
                      <Route path="/register" element={<Register/>}></Route>
                      <Route path="/newReview" element={<NewReview/>}></Route>
                      <Route path="*" element={<NotFound/>}/>
                      
                </Routes>
        </BrowserRouter>
    </div>
  )
}



export default App
