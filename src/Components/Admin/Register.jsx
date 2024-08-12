import { useContext } from "react";
import { Datacontext } from "../ContextComponent/Context";

const Register = ()=>{

    const {handleAdminForm ,setEname, setEemail, setEpassword} = useContext(Datacontext)
    return(
        <div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name"  onChange={(e)=>setEname(e.target.value)} id="name"></input>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={(e)=>setEemail(e.target.value)} id="email"></input>
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input type="text" name="password"  onChange={(e)=>setEpassword(e.target.value)} id="password"></input>
                </div>
                <div>
                    <button type="submit" onClick={handleAdminForm}>submit</button>
                </div>
            </form>
        </div>
    )
};

export default Register;