import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../Context/Authcontext";
import './Style/login.css'
import toast from "react-hot-toast";

function Login(){
    const { state, Login } = useContext(Mycontext);

    const router=useNavigate();
    const [userdata,setuserdata]=useState({email:"",password:""})
    // console.log(userdata,"userdata")

    const handleChange = (event)=>{
        setuserdata({...userdata,[event.target.name]:event.target.value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if( userdata.email && userdata.password){
             // try {
            //     const response = await axios.post("http://localhost:8000/login", { userData })
            //     if (response.data.success) {
            //         alert("Registeration successfull");
            //     }
            // } catch (error) {
            //     alert(error.response.data.message)
            // }
         
            const LS=JSON.parse(localStorage.getItem("USER"));

            for(var i=0;i<LS.length;i++){
                if(LS[i].email===userdata.email && LS[i].password===userdata.password){
                    localStorage.setItem("Logged_In_User", JSON.stringify({ email: LS[i].email }))
                    Login({name:LS[i].name,email: LS[i].email});
                    setuserdata({ email: "", password: "" })
                    router("/")
                    return toast.success("Login Successfull.")

                }
            }
            return toast.error("Please check you creds.")
    }else {
        toast.error("Please fill the all values.")
    }
    }
    useEffect(() => {
        if (state?.user?.name) {
            router('/')
        }
    }, [state])
    
    return(
        <div className="baground">
        <div className="jc-c">
           <div className="login">LOGIN</div>
           <form className="borderforlogin" onSubmit={handleSubmit}>
           <label className="font">Email</label><br />
            <input type="email" required onChange={handleChange} name="email" value={userdata.email}/><br/>
            <label  className="font">Password</label><br/>
            <input type="password"  required onChange={handleChange} name="password"value={userdata.password}/><br/>
            <input  type="submit" value="Login"/>
           </form>
        </div>
        </div>
    )
}

export default Login;