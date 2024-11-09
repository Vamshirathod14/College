// src/components/Header.jsx
import React from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Welcome to Our College</h1>
            <Navbar />
        </header>
    );
};

export default Header;