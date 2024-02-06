import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg"
export const Title=()=>{
    return(
        <a href="/" >
            <img className="logo" src={Logo} alt="Logo"/>
        </a>
    )
};

const Header=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (
        <>
        <div className="container">
            <Title/>
            <div className="nav-items">
                <ul>
                   <Link to="/"> <li>Home</li></Link>
                   <Link to="/about"> <li>ABout us</li></Link>
                   <Link to="/contact"> <li>Contact</li></Link>
                   <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>
            }
        </div>
    
        </>
    )
}

export default Header;