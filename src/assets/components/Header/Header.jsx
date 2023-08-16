// import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h1>Shopping freak</h1>
            <div>
                <a href="1">Shop</a>
                <a href="2">Order</a>
                <a href="3">Inventory</a>
                <a href="4">Login</a>
            </div>
        </nav>
    );
};

export default Header;