import { useContext } from "react";
import { Mycontext } from "../Context/Authcontext";

function HomePage (){
    const { state } = useContext(Mycontext)
    console.log(state,"state")

    return(
        <div>Home Page user : {state?.user?.name}</div>
    )


}

export default HomePage;