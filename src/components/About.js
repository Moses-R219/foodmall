import { Outlet } from "react-router-dom";

const About=()=>{
    return(
        <div>
            <h1>About Food-Crsipy</h1>
            <p>Eat and enjou!y</p>
            <Outlet/>
        </div>
    )
}

export default About;