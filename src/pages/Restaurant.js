import React, { useEffect, useState, useContext} from 'react';
import { Context } from '../index';
import { observer } from "mobx-react-lite";
import '../assets/css/Restaurant.css';
import { fetchOneRestaurant, fetchFoods, addToBasket } from '../http/restaurantAPI';
import {useParams} from 'react-router-dom';

const Restaurant = observer(() => {
    const [restaurant, setRestaurant] = useState([])
    const [food, setFood] = useState([])
    const {id} = useParams()
    const {user} = useContext(Context)

    useEffect(() => {
        fetchOneRestaurant(id).then(data => setRestaurant(data))
        fetchFoods(id).then(data => setFood(data))
    }, [])

    // const add = () => {
    //     console.log(card.id)
    //     const formData = new FormData()
    //     formData.append('foodId', card.id)
    //     addToBasket(formData).then(response => alert(`Товар был добавлен в вашу корзину!`))
    // }

    return(
        <div className="main">
            <section className="intro" style={{backgroundImage: `url(${process.env.REACT_APP_API_URL + restaurant.preview})`, backgroundRepeat : "no-repeat", backgroundPosition: "center" }}>
                <div className="wrapper">
                    <div className="restaurant__card">
                        <h1 className="restaurant__card-title">{restaurant.name}</h1>
                        <div className="restaurant__card-text">
                            <p className="restaurant__card-menu">{restaurant.price} </p>
                            <p className="restaurant__card-time">{restaurant.timetodelivery}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="restaurant__dishes">
                <div className="wrapper">
                    <div className="restaurant__dishes-card">
                        {food.map(card => 
                            <div className="restaurant__dish" key={card.id}>
                                <div className="restaurant__dish-text">
                                    <p className="restaurant__dish-name">{card.name}</p>
                                    <p className="restaurant__dish-ingrediens">{card.ingredients}</p>
                                    <div className="restaurant__dish-buttons">
                                        <p className="restaurant__dish-price">{card.price} рублей</p>
                                        {user.isAuth ? 
                                            <button className="restaurant__dish-button" onClick={() => {
                                                const formData = new FormData()
                                                formData.append('foodId', card.id)
                                                addToBasket(formData).then(response => alert(`Товар был добавлен в вашу корзину!`))}} 
                                            >В корзину</button> 
                                        : 
                                        <span></span>
                                        }
                                    </div>    
                                </div>
                                <img src={process.env.REACT_APP_API_URL + card.img} alt="" className="restaurant__dish-img" />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
})

export default Restaurant;