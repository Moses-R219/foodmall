import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterrestaurant } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";


const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const allRestaurants=useRestaurant({setFilteredRestaurants})
  const status=useOnline();

  if(!status){
    return(<div>
      <h1>No Internet🛜</h1>
      <Shimmer/></div>)
  }
  if(!allRestaurants) return null;

  // if(filteredRestaurants?.length===0) return <h1>No Foods</h1>;


  return(allRestaurants?.length===0)?<Shimmer/>: (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            const filtered = filterrestaurant(search, allRestaurants);
            setFilteredRestaurants(filtered);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          return (
          <Link to={"/restaurant/"+restaurant.info.name+"/"+restaurant.info.id}  key={restaurant.info.id}>
            <RestaurantCard {...restaurant.info}  />
          </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
