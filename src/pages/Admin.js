import React,{ useState } from 'react';
import '../assets/css/Admin.css'
import CreateCategory from '../components/modals/CreateCategory';
import CreateRestaurant from '../components/modals/CreateRestaurant';
import CreateFood from '../components/modals/CreateFood'
import DeleteRestaurant from '../components/modals/DeleteRestaurant';

const Admin = () => { 
    const [categoryActive, setCategoryActive] = useState(false);
    const [restaurantActive, setRestaurantActive] = useState(false);
    const [restaurantDelActive, setRestaurantDelActive] = useState(false);
    const [foodActive, setFoodActive] = useState(false);

    return(
        <div className="admin">
            <div className="admin__buttons">
                <h1 className="admin__title">Добро пожаловать в админ-панель!</h1>
                <button className="admin__button" onClick={() => setRestaurantActive(true)}>Добавить ресторан</button>
                {/* <button className="admin__button" onClick={() => setRestaurantDelActive(true)}>Удалить ресторан</button> */}
                <button className="admin__button" onClick={() => setCategoryActive(true)}>Добавить категорию</button>
                <button className="admin__button" onClick={() => setFoodActive(true)}>Добавить блюдо</button>
            </div>
            <CreateCategory active={categoryActive} setActive={setCategoryActive}/>
            <CreateRestaurant active={restaurantActive} setActive={setRestaurantActive}/>
            {/* <DeleteRestaurant active={restaurantDelActive} setActive={setRestaurantDelActive}/> */}
            <CreateFood active={foodActive} setActive={setFoodActive}/>
        </div>
    )
}

export default Admin;