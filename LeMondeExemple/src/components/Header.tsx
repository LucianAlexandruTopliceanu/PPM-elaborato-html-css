import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="language-container">
                <a href="" className="language active">Italiano</a>
                <span className="separator"></span>
                <a href="" className="language">English</a>
            </div>
            <div className="header-container">
                <div className="left">
                    <button className="burger-mobile" role="Navigation">
                        <img alt="burger menu" src="https://placehold.co/24x24" />
                    </button>
                    <a href="" className="link">
                        <img alt="giornale" src="https://placehold.co/80x54"/>
                        <p className="text">Leggi<br/>giornale</p>
                    </a>
                </div>
                <div className="center">
                    <div className="logo-container">
                        <img alt="logo" src="https://placehold.co/290x60"/>
                    </div>
                </div>
                <div className="right">
                    <a href="" className="login-container">
                        <img alt="login icon" className="icon" src="https://placehold.co/24x24"/>
                        <p className="text">Accedi</p>
                    </a>
                    <span className="separator"></span>
                    <button className="subscribe-button">Abbonati</button>
                </div>
            </div>
            <div className="nav-container">
                <nav className="nav-bar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="">
                                <img alt="icona home" className="nav-icon-home" src="https://placehold.co/24x24"/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                Attualità
                                <img alt="navbar attualità" className="nav-icon-arrow" src="https://placehold.co/7x12" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                Economia
                                <img alt="navbar economia" className="nav-icon-arrow" src="https://placehold.co/7x12" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                Video
                                <img alt="navbar video" className="nav-icon-arrow" src="https://placehold.co/7x12" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                Dibattiti
                                <img alt="navbar dibattiti" className="nav-icon-arrow" src="https://placehold.co/7x12" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                Cultura
                                <img alt="navbar cultura" className="nav-icon-arrow" src="https://placehold.co/7x12" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                Mondo
                                <img alt="navbar la bocca del mondo" className="nav-icon-arrow" src="https://placehold.co/7x12" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                Servizi
                                <img alt="navbar servizi" className="nav-icon-arrow" src="https://placehold.co/7x12" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                <img  alt="icona ricerca" className="nav-icon-search" src="https://placehold.co/24x24"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;