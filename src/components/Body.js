import { useEffect, useState } from "react";
import {  restaurantList } from "../../config";
import RestaurantCard from "./RestaurantCard";


const filterrestaurant=(search,restaurants)=>{
    const fi= restaurants.filter((res)=>(res.name).includes(search));
    return fi;
}

const Body=()=>{
    
    const [restaurants,setRestaurants]=useState([])
    const [search,setSearch]=useState("");

    useEffect(()=>{
        getFoods();
    },[]);

    async function getFoods(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3355423&lng=77.7143421&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        //data.length === 12 cards

        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle);
        
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
return(
    <>
    <div className="search">
        <input type="text" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>{
            const filtered=filterrestaurant(search,restaurants);
            setRestaurants(filtered)
        }}>Search</button>
    </div>
    <div className="restaurant-list">
        {
            restaurants.map((restaurant)=>{
                return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
            })  
        }
    </div>
    </>
)
}

export default Body;