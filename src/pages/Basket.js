import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { delFromBasket, getBasket } from '../http/restaurantAPI';
import { Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import '../assets/css/Basket.css';

const Basket = observer(() => {
    const {restaurant} = useContext(Context)

    const [price, setPrice] = useState(0)

    const mybskt = () => {
        getBasket().then(data => { 
            let prices = 0;
            data.map(price =>
                prices += Number(price.food.price)
            );
            setPrice(prices);
            restaurant.setBaskets(data);
            })
    }
        
    useEffect(() => {
        mybskt()
        }, [])
    // ----- Считаем общую сумму, которую юзер набрал в корзину ------- //

    return(
        <div className="main">
            <section className="basket">
                <div className="wrapper">
                    {/* ------- Считаем общую сумму ------- */}
                    <h1 className="basket__title">Корзина</h1>
                    {restaurant.basket.map(product =>
                        <div className="basket__cards" key={product.id}>
                            <div className="basket__card">
                                        <div className="basket__card-image">
                                            <img src={process.env.REACT_APP_API_URL + product.food.img} width={200} />
                                        </div>
                                        <div className="basket__card-text">
                                            <p className="">{product.food.name}</p>
                                            <p className="">{product.food.ingredients}</p>
                                            <p className="">{product.food.price} рублей</p>
                                        </div>
                                        <div className="basket__card-price">
                                                <button className="basket__card-del"onClick={() => {
                                                    delFromBasket(product.id).then(data => {
                                                        mybskt()
                                                    })
                                                }}>Удалить</button>
                                            </div>
                            </div>
                        </div>
                    )}
            
                    <Card style={{marginTop: 40 + "px"}} className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
                        <h1 className="pr-2">Итого:</h1>
                        <h3 className="pl-2">{price}<span className="font-weight-light pl-2">рублей</span></h3>
                    </Card>
                </div>
            </section>                   
        </div>
    );
});


export default Basket;