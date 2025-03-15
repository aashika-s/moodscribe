import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className='logo'>
                <p className='title-name'>MoodScribe</p>
            </div>
            <div className='menu'>
                <a href="#home" className='home'>Home</a>
                <a href="#about" className='about-us'>About Us</a>
                <a href="#FAQ" className='FAQ'>FAQ</a>
            </div>
        </div>
    );
}

export default Header;
