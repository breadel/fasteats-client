import React, { useState, useContext } from 'react';
import { Context } from "../index"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import '../assets/css/Auth.css'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, RESTAURANTS_ROUTE } from '../utils/consts';
import {login, registration} from "../http/userAPI"

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(RESTAURANTS_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return(
        <section className="login">
            <div className="login__form-page">
                <Link to={RESTAURANTS_ROUTE} className="logo__link"><img src="img/logo_login.png" alt="" className="logo__login" /></Link>
                <h2 className="login__page-header">{isLogin ? 'С возвращением!' : 'Регистрация'}</h2>
                <p className="login__page-text">{isLogin ? 'Войдите с помощью адреса вашей электронной почты.' : 'Введите необходимые данные для регистрации.'}</p>
                <form className="login__form">
                    <input className="login__form-field" placeholder="Эл. почта" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" className="login__form-field" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div onClick={click} className="login__form-submit" >
                        <p>Далее</p>
                    </div>
                </form>
                {isLogin ? 
                <p className="login__page-reg-text">Еще не пользовались FastEats? <Link to={REGISTRATION_ROUTE} className="login__page-reg-link">Создать аккаунт</Link></p> 
                : 
                <p className="login__page-reg-text">Уже использовали FastEats ранее? <Link to={LOGIN_ROUTE} className="login__page-reg-link">Авторизоваться</Link></p> 
                }
                
            </div>
        </section>
    )
})

export default Auth;