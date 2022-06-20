import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RestaurantMenu from './menu/RestaurantMenu';
import UserMenu from "./menu/UserMenu";


export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{
    user: new UserMenu(),
    restaurant: new RestaurantMenu(),
  }}>
    <App />
    </Context.Provider>
);

