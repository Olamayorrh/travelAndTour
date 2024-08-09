import BestOffer from "../BestOffer/BestOffer";
import Discover from "../Discover/Discover";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import NewLife from "../NewLife/NewLife";
import ReachOut from "../ReachOut/ReachOut";
import Reviews from "../Reviews/Reviews";
import Travel from "../Travel/Travel";



const LayOut = ()=>{
    return (
        <div>
            <Travel/>
            <NewLife/>
            <Discover/>
            <BestOffer/>
            <Reviews/>
            <Explore/>
            <ReachOut/>
            <Footer/>
        </div>
    )
};

export default LayOut;