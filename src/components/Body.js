import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterrestaurant = (search, restaurants) => {
  const fi = restaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(search?.toLowerCase()));
  // console.log(fi,search);
  return fi;
};

const Body = () => {
  const [allRestaurants, setallRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFoods();
  }, []);

  async function getFoods() {
    const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING"    );
    const json = await data.json();
    //data.length === 12 cards
// console.log(json);
//     console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle);

    setallRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
