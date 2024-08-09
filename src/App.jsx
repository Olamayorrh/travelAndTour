import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import LayOut from "./Components/MainLayout/LayOut"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"
import Detail from "./Components/Detail/Detail"
import BookNow from "./Components/Booking/Booking"




const App = ()=>{
  return (
    <div >
        <BrowserRouter>
                <Navbar/>
                <Routes>
                      <Route path="/" element={<LayOut/>}/> 
                      <Route path="/services" element={<Services/>}/> 
                      <Route path="/about" element={<About/>}/> 
                      <Route path="/contact" element={<Contact/>}/> 
                      <Route path="/bookNow" element={<BookNow/>}/>
                      <Route path='/product/:productid' element={<Detail />} />
                      <Route path="*" element={<NotFound/>}/> 
                </Routes>
        </BrowserRouter>
    </div>
  )
}



export default App
