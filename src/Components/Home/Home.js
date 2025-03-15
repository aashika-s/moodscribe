// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import backgroundVideo from './video4.mp4';


// import angerImg from '../../assets/anger.png';
// import sadnessImg from '../../assets/sadness.png';
// import happinessImg from '../../assets/happiness.png';
// import tensedImg from '../../assets/tensed.png';
// import jealousImg from '../../assets/jealous.png';
// import loveImg from '../../assets/love.png';
// import sleepyImg from '../../assets/sleepy.png';
// import boredImg from '../../assets/bored.png';
// import embarrassedImg from '../../assets/embarrassed.png';
// import excitedImg from '../../assets/excited.png';

// const Home = () => {
//     const [selectedMood, setSelectedMood] = useState('');

//     const moods = [
//         { src: angerImg, alt: 'Anger', label: 'Anger' },
//         { src: sadnessImg, alt: 'Sadness', label: 'Sad' },
//         { src: happinessImg, alt: 'Happiness', label: 'Happy' },
//         { src: tensedImg, alt: 'Tensed', label: 'Tensed' },
//         { src: jealousImg, alt: 'Sick', label: 'Sick' },
//         { src: loveImg, alt: 'Love', label: 'Love' },
//         { src: sleepyImg, alt: 'Sleepy', label: 'Sleepy' },
//         { src: boredImg, alt: 'Bored', label: 'Bored' },
//         { src: embarrassedImg, alt: 'Tired', label: 'Tired' },
//         { src: excitedImg, alt: 'Excited', label: 'Excited' },
//     ];

//     const handleMoodClick = (mood) => {
//         setSelectedMood(mood.label);
//         localStorage.setItem('selectedMood', mood.label); // Save mood to localStorage
//     };

//     return (
        
//         <div className="home-container">
// <video className="background-video" autoPlay loop muted>
//     <source src={backgroundVideo} type="video/mp4" />
//     <source src="./video1.webm" type="video/webm" />
//     Your browser does not support the video tag.
// </video>


//             <h1 className="greeting">Hello, Username!</h1>
//             <h2>How are you feeling today?</h2>
//             <div className="mood-grid">
//                 {moods.map((mood, index) => (
//                     <div key={index} className="mood-button" onClick={() => handleMoodClick(mood)}>
//                         <img src={mood.src} alt={mood.alt} className="mood-image" />
//                         <span className="mood-label">{mood.label}</span>
//                     </div>
//                 ))}
//             </div>
//             <div className="button-grid">
//                 <Link to="/my-habits" className="nav-button">My Habits</Link>
//                 <Link to="/my-journal" className="nav-button">My Journal</Link>
//                 <Link to="/my-graphs" className="nav-button">My Graphs</Link>
//                 <Link to="/my-music" className="nav-button">My Music</Link>
//                 <Link to="/community-forum" className="nav-button">Community Forum</Link>
//                 <Link to="/support-and-strength" className="nav-button">Support and Strength</Link>
                
//             </div>
//         </div>
//     );
// };

//  export default Home;

// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//       <p>This is the page you are redirected to after signing up.</p>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundVideo from './video4.mp4';

import angerImg from '../../assets/anger.png';
import sadnessImg from '../../assets/sadness.png';
import happinessImg from '../../assets/happiness.png';
import tensedImg from '../../assets/tensed.png';
import jealousImg from '../../assets/jealous.png';
import loveImg from '../../assets/love.png';
import sleepyImg from '../../assets/sleepy.png';
import boredImg from '../../assets/bored.png';
import embarrassedImg from '../../assets/embarrassed.png';
import excitedImg from '../../assets/excited.png';

const Home = () => {
    const [selectedMood, setSelectedMood] = useState('');
    const [username, setUsername] = useState('');

    const moods = [
        { src: angerImg, alt: 'Anger', label: 'Anger' },
        { src: sadnessImg, alt: 'Sadness', label: 'Sad' },
        { src: happinessImg, alt: 'Happiness', label: 'Happy' },
        { src: tensedImg, alt: 'Tensed', label: 'Tensed' },
        { src: jealousImg, alt: 'Sick', label: 'Sick' },
        { src: loveImg, alt: 'Love', label: 'Love' },
        { src: sleepyImg, alt: 'Sleepy', label: 'Sleepy' },
        { src: boredImg, alt: 'Bored', label: 'Bored' },
        { src: embarrassedImg, alt: 'Tired', label: 'Tired' },
        { src: excitedImg, alt: 'Excited', label: 'Excited' },
    ];

    useEffect(() => {
        // Retrieve the username from localStorage (if available)
        const loggedInUsername = localStorage.getItem('username');
        if (loggedInUsername) {
            setUsername(loggedInUsername);
        }
    }, []);

    const handleMoodClick = (mood) => {
        setSelectedMood(mood.label);
        localStorage.setItem('selectedMood', mood.label); // Save mood to localStorage
    };

    return (
        <div className="home-container">
            <video className="background-video" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
                <source src="./video1.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Display the dynamic greeting message */}
            <h1 className="greeting">Hello, {username ? username : 'Guest'}!</h1>
            <h2>How are you feeling today?</h2>
            <div className="mood-grid">
                {moods.map((mood, index) => (
                    <div key={index} className="mood-button" onClick={() => handleMoodClick(mood)}>
                        <img src={mood.src} alt={mood.alt} className="mood-image" />
                        <span className="mood-label">{mood.label}</span>
                    </div>
                ))}
            </div>
            <div className="button-grid">
                <Link to="/my-habits" className="nav-button">My Habits</Link>
                <Link to="/my-journal" className="nav-button">My Journal</Link>
                <Link to="/my-graphs" className="nav-button">My Graphs</Link>
                <Link to="/my-music" className="nav-button">My Music</Link>
                <Link to="/community-forum" className="nav-button">Community Forum</Link>
                <Link to="/support-and-strength" className="nav-button">Support and Strength</Link>
            </div>
        </div>
    );
};

export default Home;


