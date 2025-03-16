// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Background from './Components/Background/background';
// import Header from './Components/Header/header';
// import Hero from './Components/Hero/hero';
// import About from './Components/About/About';
// import Signup from './Components/Signup/Signup';
// import FAQ from './Components/FAQ/faq';


// const App = () => {
//     let heroData = [
//         { text1: "When you feel", text2: "Express it" },
//         { text1: "Track", text2: "Your charts" },
//         { text1: "Want to Express?", text2: "Write your heart out" }
//     ];

//     const [heroCount, setHeroCount] = useState(0);

//     useEffect(() => {
//         const Id = setInterval(() => {
//             setHeroCount((count) => (count === 2 ? 0 : count + 1));
//         }, 6000);
//         return () => clearInterval(Id);
//     }, []);

//     return (
//         <div className="App">
//             <Background heroCount={heroCount} />
//             <Header />
//             <Hero heroCount={heroCount} heroData={heroData[heroCount]} setHeroCount={setHeroCount} />
//             <div id="about">
//                 <About />
//             </div>
//             <div id="signup">
//                 <Signup />
//             </div>
//             <div id="FAQ">
//                 <FAQ />
//             </div>

//         </div>
//     );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './Components/Signup/Signup'; // Adjust the import based on your file structure
// import Home from './Components/Home/Home';       // Adjust the import based on your file structure

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Route for the Signup page */}
//         <Route path="/signup" element={<Signup />} />

//         {/* Route for the Home page */}
//         <Route path="/home" element={<Home />} />
        
//         {/* Default route or redirect */}
//         <Route path="/" element={<Signup />} /> {/* Redirects to Signup page */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Background from './Components/Background/background';
// import Header from './Components/Header/header';
// import Hero from './Components/Hero/hero';
// import About from './Components/About/About';
// import Signup from './Components/Signup/Signup';
// import FAQ from './Components/FAQ/faq';
// import Home from './Components/Home/Home'; // Make sure you have a Home component

// const App = () => {
//     let heroData = [
//         { text1: "When you feel", text2: "Express it" },
//         { text1: "Track", text2: "Your charts" },
//         { text1: "Want to Express?", text2: "Write your heart out" }
//     ];

//     const [heroCount, setHeroCount] = useState(0);

//     useEffect(() => {
//         const Id = setInterval(() => {
//             setHeroCount((count) => (count === 2 ? 0 : count + 1));
//         }, 6000);
//         return () => clearInterval(Id);
//     }, []);

//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     {/* Routes for pages without shared components */}
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/home" element={<Home />} />

//                     {/* Default route - shared components for the main layout */}
//                     <Route
//                         path="/"
//                         element={
//                             <>
//                                 {/* Background, Header, and Hero components */}
//                                 <Background heroCount={heroCount} />
//                                 <Header />
//                                 <Hero heroCount={heroCount} heroData={heroData[heroCount]} setHeroCount={setHeroCount} />

//                                 {/* About and FAQ sections */}
//                                 <div id="about">
//                                     <About />
//                                 </div>
//                                 <div id="FAQ">
//                                     <FAQ />
//                                 </div>

//                                 {/* Signup form */}
//                                 <div id="signup">
//                                     <Signup />
//                                 </div>
//                             </>
//                         }
//                     />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './Components/Background/background';
import Header from './Components/Header/header';
import Hero from './Components/Hero/hero';
import About from './Components/About/About';
import Signup from './Components/Signup/Signup';
import FAQ from './Components/FAQ/faq';
import Home from './Components/Home/Home'; // Make sure you have a Home component
import MyHabits from './Components/MyHabits/MyHabits';  // Import MyHabits component
import JournalPage from './Components/Journal/journal';  // Import MyJournal component
import MoodChart from './Components/Graphs/moodchart';  // Import MyGraphs component
import MyMusic from './Components/Music/MyMusic';  // Import MyMusic component
import RequestList from './Components/Community/RequestList';  // Import CommunityForum component
import SupportAndStrength from './Components/Support/SAS'; // Correct path


const App = () => {
    let heroData = [
        { text1: "When you feel", text2: "Express it" },
        { text1: "Track", text2: "Your charts" },
        { text1: "Want to Express?", text2: "Write your heart out" }
    ];

    const [heroCount, setHeroCount] = useState(0);

    useEffect(() => {
        const Id = setInterval(() => {
            setHeroCount((count) => (count === 2 ? 0 : count + 1));
        }, 6000);
        return () => clearInterval(Id);
    }, []);

    return (
        <Router basename="/moodscribe">
            <div className="App">
                <Routes>
                    {/* Routes for pages without shared components */}
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/my-habits" element={<MyHabits />} />
                    <Route path="/my-journal" element={<JournalPage />} />
                    <Route path="/my-graphs" element={<MoodChart />} />
                    <Route path="/my-music" element={<MyMusic />} />
                    <Route path="/community-forum" element={<RequestList/>}/>
                    <Route path="/support-and-strength" element={<SupportAndStrength />} />

                    {/* Default route - shared components for the main layout */}
                    <Route
                        path="/"
                        element={
                            <>
                                {/* Background, Header, and Hero components */}
                                <Background heroCount={heroCount} />
                                <Header />
                                <Hero heroCount={heroCount} heroData={heroData[heroCount]} setHeroCount={setHeroCount} />

                                {/* About and FAQ sections */}
                                <div id="about">
                                    <About />
                                </div>
                                <div id="signup">
                                    <Signup />
                                </div>
                                <div id="FAQ">
                                    <FAQ />
                                </div>

                                {/* Signup form */}
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
