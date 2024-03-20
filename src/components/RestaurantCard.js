import { ImageUrl } from "../../config";

const RestaurantCard=({name,cloudinaryImageId,cuisines})=>{
    return(
        <div className="w-64 h-72  shadow-md p-3 m-2 bg-slate-50">
            <img className="w-64 h-48" src={ImageUrl+cloudinaryImageId} alt="restaurant"/>
            <h4 className="font-bold">{name}</h4>
            <h4 >{cuisines.join(",")}</h4>
        </div>
    )
}


//Higher Order Component

//promotedcard component gets component as input

export const withPromoted=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard items={props}/>
            </div>
        )
    }
}
export default RestaurantCard;