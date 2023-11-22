import { useContext } from "react";
import { Mycontext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";

function HomePage (){
    const { state,Logout } = useContext(Mycontext)
    console.log(state,"state")
    const router = useNavigate();

    const mylogout=()=>{
        Logout()
        alert("logout successful")
    }

    const mylogin=()=>{
        router('./login')
    }

    return(
        <div>
            <h1>Home Page user : {state?.user?.name}</h1>
        {state?.user? <button onClick={mylogout}>Logout</button>:<button onClick={mylogin}>Login</button>}
        </div>
        )


}

export default HomePage;