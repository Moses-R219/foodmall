import { useState,useEffect } from "react";


const useRestaurant=({setFilteredRestaurants})=>{
  const [allRestaurants, setallRestaurants] = useState([]);

  useEffect(() => {
    getFoods();
  }, []);

  async function getFoods() {
      const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING"    );
    const json = await data.json();
    //data.length === 12 cards
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle);

    setallRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return allRestaurants;
};

export default useRestaurant;