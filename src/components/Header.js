import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg"
export const Title=()=>{
    return(
        <a href="/" >
            <img className="h-16 py-1 mt-3 mix-blend-darken" src={Logo} alt="Logo"/>
        </a>
    )
};

const Header=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (
    
        <div className="flex justify-between bg-indigo-50">
            <Title/>
            <div>
                <ul className="flex py-10">
                   <Link to="/"> <li className="px-5">Home</li></Link>
                   <Link to="/about"> <li className="px-5">ABout us</li></Link>
                   <Link to="/contact"> <li className="px-5">Contact</li></Link>
                   <li className="px-5">Cart</li>
                   <Link to="/instamart"> <li className="px-5">Instamart</li></Link>
                </ul>
            </div>
            {
                isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>
            }
        </div>
    
    )
}

export default Header;