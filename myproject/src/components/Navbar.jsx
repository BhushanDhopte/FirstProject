import { useNavigate } from 'react-router-dom';
import './Style/Navbar.css'
import { useContext } from 'react';
import { Mycontext } from '../Context/Authcontext';
function Navbar(){

    const {Logout,state} =useContext(Mycontext)
    const router=useNavigate();


    return(
        <div id="nav-div">
            <div onClick={()=>router('/')}>Home</div>
            <div className='section'>
                <div onClick={()=>router('/mens')}>Mens</div>
                <div onClick={()=>router('/mens')}>Women</div>
                <div onClick={()=>router('/mens')} >Kids</div>
                <div onClick={()=>router('/mens')}>Electronics</div>
            </div>
            <div className='right-section jc-sb'>
                {state?.user?.name?
                <div className='profile'> 
                    <div className='c-p'>Profile </div>
                    <div className='c-p'>Cart</div>
                    <div className='c-p'>Logout</div>
                </div>
            :   <div className='profile'>
                <div className='c-p' onClick={()=>router('/login')}>Login</div>
                <div className='c-p'>Cart</div>
                </div>}
                
            </div>
        </div>
    )
}

export default Navbar;