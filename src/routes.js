import Restaurants from "./pages/Restaurants"
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, RESTAURANTS_ROUTE, RESTAURANT_ROUTE } from "./utils/consts"
import Basket from "./pages/Basket"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Restaurant from "./pages/Restaurant"


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: RESTAURANTS_ROUTE,
        Component: Restaurants
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: RESTAURANT_ROUTE + '/:id',
        Component: Restaurant
    }
]