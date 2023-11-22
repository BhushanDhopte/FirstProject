import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../Context/Authcontext";

function Register(){
    const { state } = useContext(Mycontext)
    const router=useNavigate();
    const [userdata,setuserdata]=useState({name:"",email:"",password:""})
    console.log(userdata,"userdata")

    const handleChange = (event)=>{
        setuserdata({...userdata,[event.target.name]:event.target.value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(userdata.name && userdata.email && userdata.password){
            // try{
            //     const response=await axios.post("http://localhost:8000/register", { userData })
            //     if(response.data.success){
            //         alert("Registeration successfull");
            //     }
            // }catch(error){
            //     alert(error.response.data.message)
            // }

            const myUser = JSON.parse(localStorage.getItem("USER")) || [];
            myUser.push(userdata)

            localStorage.setItem("USER",JSON.stringify(myUser))

            setuserdata({name:"",email:"",password:""})
            router("/login")

            alert("Registeration Successfull.")
        }else {
            alert("Please fill the all values.")
        }
    }
    
    useEffect(() => {
        if (state?.user?.name) {
            router("/")
        }
    }, [state])

    return(
        <div>
           <h1>Register</h1>
           <form onSubmit={handleSubmit}>
            <label>Name</label><br/>
            <input type="text" required onChange={handleChange} name="name" value={userdata.name}/><br/>
            <label>Email</label><br />
            <input type="email" required onChange={handleChange} name="email" value={userdata.email}/><br/>
            <label>Password</label><br/>
            <input type="password"  required onChange={handleChange} name="password"value={userdata.password}/><br/>
            <input type="submit" value="Register"/>
           </form>
        </div>
    )
}

export default Register;