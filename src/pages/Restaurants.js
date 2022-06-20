import React, { useContext, useEffect } from 'react';
import CategoryBar from '../components/CategoryBar';
import RestaurantList from '../components/RestaurantList';
import { observer } from 'mobx-react-lite';
import '../assets/css/Restaurants.css';
import { Context } from '../index';
import { fetchCategories, fetchRestaurants } from '../http/restaurantAPI';

const Restaurants = observer(() => {

    const {restaurant} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => restaurant.setCategories(data))
        fetchRestaurants().then(data => restaurant.setRestaurants(data))
    }, [])

    return(
        <section className="restaurants">
            <div className="wrapper">
                {/* <div className="search-form__filters">
                    <CategoryBar />
                </div> */}
                <h1 className="restaurants__title">Рестораны в Омске</h1>
                <RestaurantList/>
            </div>
        </section>
    )
})

export default Restaurants;