import { ImageUrl } from "../../config";

const MenuItems = ({ menus }) => {
  console.log(menus);
return (
    <div >
        {menus?.map((item) => 
        <div  key={item?.card?.info?.id} className="flex justify-between p-5  bg-zinc-200 border-gray-300 border-b-2">
            <div className="text-left">
            <p >{item?.card?.info?.name}</p>
            <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div>
            <img className="w-24" src={ImageUrl+(item?.card?.info?.imageId)}/>
            <button className="bg-green-400 h-8 w-20">+</button>
            </div>
        </div>
        )}
    </div>
);
};

export default MenuItems;
