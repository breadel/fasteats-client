import React, {useState} from "react";
import '../../assets/css/CreateCategory.css'
import { createCategory } from "../../http/restaurantAPI";
const CreateCategory = ({active, setActive}) => {
    const [value, setValue] = useState('')

    const addCategory = () => {
        createCategory({name: value}).then(data => {
            setValue('')
            setActive(false)
        })
    }
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1 className="modal__title">Добавить категорию</h1>
                <form className="modal__form">
                    <input value={value} onChange={e => setValue(e.target.value)} placeholder={"Введите название категории"} className="modal__form-field"/>
                </form>
                <div className="modal__buttons">
                    <button className="modal__button" onClick={() => setActive(false)}>Закрыть</button>
                    <button className="modal__button" onClick={addCategory}>Добавить</button>
                </div>
            </div>
        </div>
    )
};

export default CreateCategory;