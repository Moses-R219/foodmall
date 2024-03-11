import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { ImageUrl } from "../../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  
  const menu=useRestaurantMenu(id);
  return !menu ? (
    <Shimmer />
  ) : (
    <div className="menus">
      <div>
        <h1>Restaurant Id:{menu.cards[0].card?.card?.info?.id}</h1>
        <p>Restaurant Name:{menu.cards[0].card?.card?.info?.name}</p>
        <p>
          Restaurant Rating:<b>{menu.cards[0].card?.card?.info?.avgRating}⭐</b>
        </p>
        <img
          className="menuImg"
          src={ImageUrl + menu.cards[0].card?.card?.info?.cloudinaryImageId}
        />
      </div>
      <div>
        <h1>Menu</h1>
        {(menu?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards).map(
          (menus) => (
            <div key={menus.card.info.id} className="menu-list">
              <li>{menus.card.info.name}-₹{(menus.card.info.price)/100}</li>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
