import MenuItems from "./MenuItems";
import { useState } from "react";

const RestaurantCategory = ({items}) => {
  // console.log(items);
  const [showItems, setShowItems] = useState(false);
  const handleclick = () => {
    setShowItems(!showItems);
  }
  return (
    <>
    <div className="flex justify-between bg-zinc-200 p-3 cursor-pointer " >
      <h1  className="font-bold text-lg p-2 ">{items.title}({items.itemCards.length})</h1>
      <p onClick={handleclick}>🔽</p>  
    </div>
   {showItems && <MenuItems key={items.title} menus={items.itemCards} />}
    </>
  );
};

export default RestaurantCategory;
