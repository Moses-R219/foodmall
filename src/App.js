import React from "react";
import  ReactDOM  from "react-dom/client";
import Header,{Title} from "./components/Header"
import Footer from "./components/Footer";
import Body from "./components/Body";


const AppLayout=()=>{
    return (
        <>
        <Header/>
        <Body/>
        <Footer />
        </>
    )
}






const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)