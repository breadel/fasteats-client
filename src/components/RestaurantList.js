import React, {useContext} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import RestaurantItem from "./RestaurantItem";
import '../assets/css/RestaurantList.css'

const RestaurantList = observer(() => {
    const {restaurant} = useContext(Context)
    return(
        <div className="restaurants__cards">
            {restaurant.restaurants.map(restaurant =>
                <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
            )}
        </div>
    )
})

export default RestaurantList;