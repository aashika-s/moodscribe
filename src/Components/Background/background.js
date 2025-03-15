import './background.css'
import React from 'react'
import emotions from '../emo.gif'
import charts from '../graphs.gif'
import journal from '../journalling.gif'

const Background = ({ heroCount }) => {
    const images = [
        { src: emotions, alt: 'emotions' },
        { src: charts, alt: 'charts' },
        { src: journal, alt: 'journal' }
    ];

    return (
        <img
            key={heroCount} // Change key with each heroCount update to trigger re-render
            src={images[heroCount].src}
            alt={images[heroCount].alt}
            className='background fadeIn'
        />
    );
}

export default Background;