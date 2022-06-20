import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import {Context} from "../index";
import '../assets/css/CategoryBar.css'

const CategoryBar = observer(() => {
    const {restaurant} = useContext(Context)
    return (
        <nav className="search-form__filters-list">
            {restaurant.categories.map(category => 
                <li className="search-form__filters-item" key={category.id} onClick={() => restaurant.setSelectedCategory(category)}>
                    <p className="search-form__filters-link">
                        {category.name}
                    </p>
                </li>
            )}
        </nav>
    )
})

export default CategoryBar;