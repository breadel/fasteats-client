import React, { useContext } from 'react';
import { Context } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { RESTAURANTS_ROUTE } from '../utils/consts';
import { LOGIN_ROUTE } from '../utils/consts';
import { ADMIN_ROUTE } from '../utils/consts';
import { BASKET_ROUTE } from '../utils/consts'
import '../assets/css/Header.css'
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';
import jwt_decode from "jwt-decode";

const Header = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    if (user.isAuth == true){
        const userToken = jwt_decode(localStorage.getItem('token'))
        if (userToken.role === 'ADMIN'){
            runInAction(() => {
                user.setIsAdmin(true)
              })
        }
    }

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        localStorage.removeItem('token')
    }

    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__logo">
                    <Link to={RESTAURANTS_ROUTE} className="header__logo-link">
                        <img src="img/logo.png" alt="" className="header__logo-pic" />
                    </Link>
                </div>
                {user.isAuth ?
                    <div className="header__buttons">
                        {user.isAdmin ? <div className="header__admin" onClick={() => navigate(ADMIN_ROUTE)}>Админ-панель</div> : <span></span>}
                        <div className="header__login" onClick={() => logOut()}>Выйти</div>
                        <div className="header__basket">
                            <Link className="header__basket-link" to={BASKET_ROUTE}>
                                <img src="img/basket.svg" alt="" className="header__basket" />
                            </Link>
                        </div>
                    </div>
                    :
                    <div className="header__buttons">
                        <div className="header__login" onClick={() => navigate(LOGIN_ROUTE)}>Войти</div>
                        <div className="header__basket">
                            <Link to="#!" className="header__basket-link">
                                <img src="img/basket.svg" alt="" className="header__basket" />
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
})

export default Header;