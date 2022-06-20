import React, {useContext, useState, useEffect} from "react";
import {Context} from "../../index";
import '../../assets/css/CreateCategory.css';
import {Dropdown} from "react-bootstrap"
import { deleteRestaurant } from "../../http/restaurantAPI";
import {observer} from "mobx-react-lite";
import { fetchRestaurants} from '../../http/restaurantAPI';


const DeleteRestaurant = observer(({active, setActive}) => {
    const {restaurant} = useContext(Context)

    useEffect(() => {
        fetchRestaurants().then(data => restaurant.setRestaurants(data))
    }, [])
    

    const delRestaurant = () => {
        const formData = new FormData()
        deleteRestaurant(formData).then(data => setActive(false))
    }

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1 className="modal__title">Добавить ресторан</h1>
                <form className="modal__form">
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle className="modal__food-dropdown">{restaurant.selectedRestaurant.name || "Выберите ресторан"}</Dropdown.Toggle>
                    <Dropdown.Menu className="modal__food-dropdown">
                        {restaurant.restaurants.map(rest =>
                            <Dropdown.Item
                                onClick={() => restaurant.setSelectedRestaurant(rest)}
                                key={rest.id}
                            >
                                {rest.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                </form>
                <div className="modal__buttons">
                    <button className="modal__button" onClick={() => setActive(false)}>Закрыть</button>
                    <button className="modal__button" onClick={delRestaurant}>Удалить</button>
                </div>
            </div>
        </div>
    )
});

export default DeleteRestaurant;