import React from 'react';
import './hero.css';

const Hero = ({ heroCount, heroData, setHeroCount }) => {
    return (
        <div className='hero'>
            <div className='text'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className='login'>
                <button
                    className='login-button'
                    onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}
                >
                    LOGIN
                </button>
            </div>
            <div className='dots'>
                <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? 'dot pink' : 'dot'}></li>
                <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? 'dot pink' : 'dot'}></li>
                <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? 'dot pink' : 'dot'}></li>
            </div>
        </div>
    );
}

export default Hero;
