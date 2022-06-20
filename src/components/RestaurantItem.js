import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/RestaurantItem.css'
import { RESTAURANT_ROUTE } from "../utils/consts";

const RestaurantItem = ({restaurant}) => {
    const navigate = useNavigate()
    return (
        <div className="restaurants__card" onClick={() => navigate(RESTAURANT_ROUTE + '/' + restaurant.id)}>
            <img src={process.env.REACT_APP_API_URL + restaurant.img} alt="" className="restaurants__card-img" />
            <h2 className="restaurants__card-title">{restaurant.name}</h2>
            <p className="restaurants__card-menu">{restaurant.price} • {restaurant.category}</p>
            <p className="restaurants__card-time">{restaurant.timetodelivery}</p>
        </div>
    )
}

export default RestaurantItem;