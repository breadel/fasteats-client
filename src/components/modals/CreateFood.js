import React, {useContext, useState, useEffect} from "react";
import {Context} from "../../index";
import {Dropdown} from "react-bootstrap"
import {observer} from "mobx-react-lite";
import { fetchCategories, fetchRestaurants, createFood } from '../../http/restaurantAPI';

const CreateFood = observer(({active, setActive}) => {
    const {restaurant} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [file, setFile] = useState(null)
    

    useEffect(() => {
        fetchCategories().then(data => restaurant.setCategories(data))
        fetchRestaurants().then(data => restaurant.setRestaurants(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addFood = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('ingredients', ingredients)
        formData.append('img', file)
        formData.append('categoryId', restaurant.selectedCategory.id)
        formData.append('restaurantId', restaurant.selectedRestaurant.id)
        createFood(formData).then(data => setActive(false))
    }

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1 className="modal__title">Добавить блюдо</h1>
                <form className="modal__form">
                    <input value={name} onChange={e => setName(e.target.value)} placeholder={"Введите название блюда"} className="modal__form-field"/>
                    <input value={price} onChange={e => setPrice(e.target.value)} placeholder={"Введите цену блюда"} className="modal__form-field"/>
                    <input value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder={"Введите ингредиенты блюда"}  className="modal__form-field"/>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle className="modal__food-dropdown">{restaurant.selectedCategory.name || "Выберите категорию"}</Dropdown.Toggle>
                            <Dropdown.Menu className="modal__food-dropdown">
                                {restaurant.categories.map(category =>
                                    <Dropdown.Item
                                        onClick={() => restaurant.setSelectedCategory(category)}
                                        key={category.id}
                                    >
                                        {category.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
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
                    <input type="file" onChange={selectFile} className="modal__form-field"/>
                </form>
                <div className="modal__buttons">
                    <button className="modal__button" onClick={() => setActive(false)}>Закрыть</button>
                    <button className="modal__button" onClick={addFood}>Добавить</button>
                </div>
            </div>
        </div>
    )
})

export default CreateFood;