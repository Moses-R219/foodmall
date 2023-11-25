import {  restaurantList } from "../../config";
import RestaurantCard from "./RestaurantCard";


const Body=()=>{
return(
    <>
    <div className="search">
        <input type="text" placeholder="search" value={""} onChange={onchange()}/>
        <button>Search</button>
    </div>
    <div className="restaurant-list">
        {
            restaurantList.map((restaurant)=>{
                return <RestaurantCard {...restaurant} key={restaurant.id}/>
            })  
        }
    </div>
    </>
)
}

export default Body;