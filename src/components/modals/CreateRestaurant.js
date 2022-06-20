import React, {useState} from "react";
import '../../assets/css/CreateCategory.css';
import { createRestaurant } from "../../http/restaurantAPI";
import {observer} from "mobx-react-lite";


const CreateRestaurant = observer(({active, setActive}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [timetodelivery, setTime] = useState('')
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const selectPreview = e => {
        setPreview(e.target.files[0])
    }

    const addRestaurant = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('img', file)
        formData.append('preview', preview)
        formData.append('timetodelivery', timetodelivery)
        createRestaurant(formData).then(data => setActive(false))
    }

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1 className="modal__title">Добавить ресторан</h1>
                <form className="modal__form">
                    <input value={name} onChange={e => setName(e.target.value)} placeholder={"Введите название ресторана"} className="modal__form-field"/>
                    <select value= {price} className="modal__dropdown" onChange={e => setPrice(e.target.value)}>
                        <option hidden>{"Выберите ценовую категорию"}</option>
                        <option>
                            ₽
                        </option>
                        <option>
                            ₽₽
                        </option>
                        <option>
                            ₽₽₽
                        </option>
                    </select>
                    <input value={timetodelivery} onChange={e => setTime(e.target.value)} placeholder={"Введите примерное время доставки"} className="modal__form-field"/>
                    <p className="modal__hint">Добавьте фотографию ресторана (Максимальный размер 970x800 пикселей)</p>
                    <input type="file" onChange={selectFile} className="modal__form-field"/>
                    <p className="modal__hint">Добавьте превью для страницы ресторана (Размер не менее 1000x800 и не более 1200x900 пикселей)</p>
                    <input type="file" onChange={selectPreview} className="modal__form-field"/>
                </form>
                <div className="modal__buttons">
                    <button className="modal__button" onClick={() => setActive(false)}>Закрыть</button>
                    <button className="modal__button" onClick={addRestaurant}>Добавить</button>
                </div>
            </div>
        </div>
    )
});

export default CreateRestaurant;