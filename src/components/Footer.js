import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import '../assets/css/Footer.css'

const Footer = observer(() => {
    return(
        <footer className="footer">
        <div className="wrapper">
            <div className="footer__logo">
                <img src="img/footer-logo.png" alt="" className="footer__logo-img" />
            </div>
            <p className="footer__line"></p>
            <div className="footer__menu">
                <div className="footer__column">
                    <p className="footer__hashtag"><span className="green">#</span>FastEats</p>
                    <div className="footer__socials">
                        <Link to="#!" className="footer__socials-link"><img src="img/facebook.svg" alt="" className="footer__socials-img" /></Link>
                        <Link to="#!" className="footer__socials-link"><img src="img/twitter.svg" alt="" className="footer__socials-img" /></Link>
                        <Link to="#!" className="footer__socials-link"><img src="img/instagram.svg" alt="" className="footer__socials-img" /></Link>
                    </div>
                </div>
                {/* <div className="footer__column">
                    <Link to="#!" className="footer__menu-nav">Об FastEats</Link>
                    <Link to="#!" className="footer__menu-nav">Станьте партнёром по доставке</Link>
                    <Link to="#!" className="footer__menu-nav">Станьте партнёром-рестораном</Link>
                </div>
                <div className="footer__column">
                    <Link to="#!" className="footer__menu-nav">Все города</Link>
                    <Link to="#!" className="footer__menu-nav">Цены</Link>
                    <Link to="#!" className="footer__menu-nav">Помощь</Link>
                    <Link to="#!" className="footer__menu-nav">FAQs</Link>
                </div> */}
            </div>
            {/* <p className="footer__line"></p>
            <div className="footer__mobile">
                <Link to="#!" className="footer__mobile-link"><img src="img/app-store.svg" alt="" className="footer__mobile-appstore" /></Link>
                <Link to="#!" className="footer__mobile-link"><img src="img/google-play.svg" alt="" className="footer__mobile-googleplay" /></Link>
            </div> */}
            {/* <p className="footer__line"></p> */}
            <div className="footer__copyright">
                <p className="footer__copyright-text">© 2022 FastEats Inc.</p>
                <Link to="#!" className="footer__copyright-text">Обработка персональных данных</Link>
                <Link to="#!" className="footer__copyright-text">Пользовательское соглашение</Link>
            </div>
        </div>
    </footer>
    )
})

export default Footer;