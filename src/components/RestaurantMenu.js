import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { ImageUrl } from "../../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const params = useParams();
  const { resid } = params;

  const menu = useRestaurantMenu(resid);

  if(menu===null) return<Shimmer/>

  const Categories =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return(
    <>
    <div className="w-6/12 mx-auto flex justify-start p-2 m-3 bg-zinc-200">
      <img className="w-36 h-36 " src={ImageUrl + menu?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
      <div className="p-10">
        <p  className="font-extrabold text-3xl">{menu?.cards[0]?.card?.card?.info?.name}</p>
        <p className="font-semibold text-xl">
          <b >{menu?.cards[0]?.card?.card?.info?.avgRating}⭐</b>
        </p>
      </div>
    </div>
      <div className="w-6/12 text-center mx-auto">
        {
          Categories?.map((category)=>
            <RestaurantCategory key={category.card.card.name} items={category.card.card} /> 
            // console.log(category);
          )
        }
      </div>
    
    </>
  );
};

export default RestaurantMenu;
