export const Title=()=>{
    return(
        <a href="/" >
            <img className="logo" src="https://cdnb.artstation.com/p/assets/images/images/049/298/599/large/irina-biswas-crispy-logo.jpg?1652176976" alt="Logo"/>
        </a>
    )
};

const Header=()=>{
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
        </div>
    
        </>
    )
}

export default Header;