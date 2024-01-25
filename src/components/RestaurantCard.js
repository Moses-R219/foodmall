import { ImageUrl } from "../../config";

const RestaurantCard=({name,cloudinaryImageId,cuisines})=>{
    return(
        <div className="card">
            <img className="size" src={ImageUrl+cloudinaryImageId} alt="restaurant"/>
            <h4>{name}</h4>
            <span className="wrap">{cuisines.join(",")}</span>
        </div>
    )
}
export default RestaurantCard;