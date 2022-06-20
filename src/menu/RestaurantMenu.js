import {makeAutoObservable} from "mobx";

export default class RestaurantMenu {
    constructor() {
        this._categories = []
        this._restaurants = []
        this._food = []
        this._baskets = []
        this._selectedCategory = {}
        this._selectedRestaurant = {}
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setRestaurants(restaurants) {
        this._restaurants = restaurants
    }
    setFood(food) {
        this._food = food
    }
    setBaskets(basket) {
        this._baskets = basket
    }
    setSelectedCategory(category) {
        this._selectedCategory = category
    }
    setSelectedRestaurant(restaurant) {
        this._selectedRestaurant = restaurant
    }
 
    get categories() {
        return this._categories
    }
    get restaurants() {
        return this._restaurants
    }
    get food() {
        return this._food
    }
    get basket() {
        return this._baskets
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedRestaurant() {
        return this._selectedRestaurant
    }
}