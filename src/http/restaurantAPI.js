import { $authHost, $host } from "./index";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createRestaurant = async (restaurant) => {
    const {data} = await $authHost.post('api/restaurant', restaurant)
    return data
}

export const deleteRestaurant = async (restaurant) => {
    const {data} = await $authHost.post('api/restaurant', restaurant)
    return data
}

export const fetchRestaurants = async () => {
    const {data} = await $host.get('api/restaurant')
    return data
}

export const fetchOneRestaurant = async (id) => {
    const {data} = await $host.get('api/restaurant/' + id)
    return data
}

export const createFood = async (food) => {
    const {data} = await $authHost.post('api/food', food)
    return data
}

export const fetchFoods= async (restaurantId) => {
    const {data} = await $host.get('api/food', {params: {restaurantId}})
    return data
}

export const addToBasket = async (foodId) => {
    const {response} = await $authHost.post('api/basket', foodId)
    return response
}

export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}

export const delFromBasket = async (id) => {
    const {response} = await $authHost.post('api/basket/delete', {id})
    return response
}