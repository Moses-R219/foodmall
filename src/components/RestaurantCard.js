import { ImageUrl } from "../../config";

const RestaurantCard=({name,cloudinaryImageId,cuisines})=>{
    return(
        <div className="card">
            <img src={ImageUrl+cloudinaryImageId} alt="restaurant"/>
            <h4>{name}</h4>
            <h4>{cuisines.join(",")}</h4>
        </div>
    )
}
export default RestaurantCard;