import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData}=props;
    
    const {name,areaName,cuisines,costForTwo,avgRating,cloudinaryImageId} =resData?.info;

    const Stylecard= {
        backgroundColor:"#f0f0f0",
    }
    
    
        return (
            <div className="res-card" style={Stylecard}>
                 <img className="res-logo" 
                 src={CDN_URL+cloudinaryImageId} 
                 />
                <h4>{name}</h4>
                <h4>{areaName}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating}</h4>
               
    
            </div>
        )
    }

    export default RestaurantCard;