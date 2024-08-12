import { useContext} from "react";
import { Datacontext } from "../ContextComponent/Context";

//Review form
const NewReview = ()=>{

    const {handleReview, setLname, setProf, setBodyy} = useContext(Datacontext)
    return(
        <div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e)=>setLname(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="prof">Profession</label>
                    <input type="text" name="prof" id="prof" onChange={(e)=>setProf(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="review">Review</label>
                    <input type="text" name="review" id="review" onChange={(e)=>setBodyy(e.target.value)}></input>
                </div>
                <div>
                    <button type="submit" onClick={handleReview}>ADD REVIEW</button>
                </div>
            </form>
        </div>
    )
};

export default NewReview;