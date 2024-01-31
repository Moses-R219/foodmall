import { useState } from "react";

const LoggedUser=()=>{
    return true;
}

export const Title=()=>{
    return(
        <a href="/" >
            <img className="logo" src="https://cdnb.artstation.com/p/assets/images/images/049/298/599/large/irina-biswas-crispy-logo.jpg?1652176976" alt="Logo"/>
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
                    <li>Home</li>
                    <li>ABout us</li>
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