import { useContext } from "react";
import { Mycontext } from "../Context/Authcontext";


function HomePage (){
    const { state} = useContext(Mycontext)
    console.log(state,"state")
   


    return(
        <div>
            <h1>Home Page user : {state?.user?.name}</h1>
       
        </div>
        )


}

export default HomePage;