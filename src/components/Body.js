import RestaurantCard  from "./RestaurantCard";
import tempData from "../utils/mockdata";

import {useState,useEffect} from "react";

const Body = ()=>{

    //super js variable or State variable
    const [listofRestuarants,setlistofRestuarants]= useState(tempData);

    //normal js variable
    let listofRestuarants1=[
        {
            "info": {
                "id": "550793",
                "name": "Bakingo",
                "cloudinaryImageId": "pzjaewtunfb5dzkqlprr",
                "locality": "Hagdur Road",
                "areaName": "Whitefield",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                ],
                "avgRating": 4.1,
                
            },
            
            
        },

        {
            "info": {
                "id": "550792",
                "name": "Dominoz",
                "cloudinaryImageId": "pzjaewtunfb5dzkqlprr",
                "locality": "Hagdur Road",
                "areaName": "Whitefield",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                ],
                "avgRating": 4.5,
                
            },
            
            
        },
        {
            "info": {
                "id": "550797",
                "name": "A2b",
                "cloudinaryImageId": "pzjaewtunfb5dzkqlprr",
                "locality": "Hagdur Road",
                "areaName": "Whitefield",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                ],
                "avgRating": 3.8,
                
            },
            
            
        },
    ];

    useEffect( ()=>{ fectchData() } , [] );
 

     const fectchData = async ()=>{

        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.006405&lng=77.7518467&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

       const json =await data.json();

       console.log(json);

     // setlistofRestuarants (json.data.cards[0].card.card.imageGridCards.info);

     }



    return(
        <div className="body">

            <div className="filter">
             
             <button className="filter-btn" onClick={()=>{

                const filterResturants =listofRestuarants.filter( (res) =>res.info.avgRating>4);
                
                setlistofRestuarants(filterResturants);
             }}
             >Top Rated Restaurants</button>

            </div>

        


            <div className="res-container">

               
            {
                listofRestuarants.map((restaurant, index) => 
                (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
         
                

                </div>

            </div>

    
    )
}

export default Body;