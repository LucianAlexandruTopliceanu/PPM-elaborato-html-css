import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="MainHeader">
            <div className="language-switcher">
                <a href="" className="language-switcher-lan language-switcher-lan-active">Italiano</a>
                <span className="language-switcher-separator"></span>
                <a href="" className="language-switcher-lan">English</a>
            </div>
            <div className="header-container">
                <div className="left-section">
                    <a href="" className="paper-link">
                        <img className="paper-link-img" alt="giornale" src="https://placehold.co/80x54"/>
                        <p className="paper-link-text">Leggi<br/>giornale</p>
                    </a>
                </div>
                <div className="center-section">
                    <div className="center-logo">
                        <img className="center-section-img" alt="logo" src="https://placehold.co/290x60"/>
                    </div>
                </div>
                <div className="right-section">
                    <a href="#" className="login-link">
                        <span className="login-icon"></span>
                        <span className="login-text">Accedi</span>
                    </a>

                    <a href="#" className="subscribe-button">Abbonati</a>
                </div>
            </div>
        </div>
    );
};

export default Header;