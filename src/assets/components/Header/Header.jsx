// import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <h1>Shopping freak</h1>
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </nav>
  );
};

export default Header;
