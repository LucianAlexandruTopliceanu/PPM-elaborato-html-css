import React from 'react';
import "./style/style.scss";

const Header: React.FC = () => {
    return (
        <header className="header" role="banner">
    <div className="logo">LE MONDE</div>
    <nav className="navbar" aria-label="Menu principal">
    <ul>
        <li><a href="/politique">Politique</a></li>
        <li><a href="/economie">Économie</a></li>
    </ul>
    </nav>
    <button className="mobileMenuButton" aria-label="Menu mobile">☰</button>
    </header>
    );
};

export default Header;