// import React, { useState, useEffect } from 'react';
// import './MyHabits.css';
// import lightExercise from '../assets/th.jpeg';
// import modExer from '../assets/moderate.png';
// import heavy from '../assets/heavy.png';
// import calm from '../assets/calm.jpeg';
// import distracted from '../assets/distracted.jpeg';
// import focus from '../assets/focused.jpeg';
// import article from '../assets/article.jpeg';
// import book from '../assets/book.jpeg';
// import blog from '../assets/blog.jpeg';
// import poor from '../assets/poor.jpeg';
// import avg from '../assets/average.jpeg';
// import exc from '../assets/excllent.jpeg';
// import less from '../assets/less.jpeg';
// import mod from '../assets/modwater.jpeg';
// import full from '../assets/full.jpeg';

// const QuoteSlideshow = () => {
//   const quotes = [
//     "Believe you can and you're halfway there.",
//     "The only way to do great work is to love what you do.",
//     "Success is not final, failure is not fatal: it is the courage to continue that counts."
//   ];

//   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="quote-slideshow">
//       <h3>{quotes[currentQuoteIndex]}</h3>
//     </div>
//   );
// };

// const BottomQuoteSlideshow = () => {
//   const bottomQuotes = [
//     "Small steps every day lead to big changes.",
//     "Consistency is key to growth.",
//     "Push yourself, because no one else is going to do it for you."
//   ];

//   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % bottomQuotes.length);
//     }, 3000); // Change quote every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bottom-quote-slideshow">
//       <h3>{bottomQuotes[currentQuoteIndex]}</h3>
//     </div>
//   );
// };

// function Website() {
//   const questions = [
//     { id: 'exercise', text: "How much physical activity did you get today?", options: [
//       { value: "light", label: "Light", image: lightExercise },
//       { value: "moderate", label: "Moderate", image: modExer },
//       { value: "intense", label: "Intense", image: heavy },
//     ]},
//     { id: 'meditation', text: "How did you feel during meditation today?", options: [
//       { value: "calm", label: "Calm", image: calm },
//       { value: "focused", label: "Focused", image: focus },
//       { value: "distracted", label: "Distracted", image: distracted },
//     ]},
//     { id: 'reading', text: "What did you read today?", options: [
//       { value: "article", label: "Article", image: article },
//       { value: "book", label: "Book", image: book },
//       { value: "blog", label: "Blog", image: blog },
//     ]},
//     { id: 'sleep', text: "How would you rate your sleep quality?", options: [
//       { value: "poor", label: "Poor", image: poor },
//       { value: "average", label: "Average", image: avg },
//       { value: "excellent", label: "Excellent", image: exc },
//     ]},
//     { id: 'hydration', text: "How much water did you drink today?", options: [
//       { value: "low", label: "Low", image: less },
//       { value: "moderate", label: "Moderate", image: mod },
//       { value: "high", label: "High", image: full },
//     ]}
//   ];

//   const [habits, setHabits] = useState({});
//   const [streak, setStreak] = useState(0);
//   const [stickyNotes, setStickyNotes] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   useEffect(() => {
//     const savedStreak = localStorage.getItem('streak');
//     const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    
//     if (savedStreak) setStreak(Number(savedStreak));
//     setStickyNotes(savedNotes);
//   }, []);

//   const handleOptionSelect = (habitId, value) => {
//     setHabits((prevHabits) => ({
//       ...prevHabits,
//       [habitId]: value
//     }));

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   const handleSave = () => {
//     const newNote = { ...habits, date: new Date().toLocaleDateString() };
    
//     const updatedNotes = [newNote, ...stickyNotes];
//     setStickyNotes(updatedNotes);
//     localStorage.setItem('stickyNotes', JSON.stringify(updatedNotes));

//     // Update streak immediately when a note is created
//     setStreak((prevStreak) => {
//       const newStreak = prevStreak + 1;
//       localStorage.setItem('streak', newStreak);
//       return newStreak;
//     });

//     // Reset for next entry
//     setHabits({});
//     setCurrentQuestionIndex(0);
//   };

//   const handleReset = () => {
//     setStreak(0);
//     localStorage.setItem('streak', 0);
//     localStorage.removeItem('stickyNotes'); // Clear all sticky notes
//     setStickyNotes([]); // Reset sticky notes state
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="container">
//       <QuoteSlideshow />

//       <div className="content">
//         <div className="sticky-notes">
//           <h3>Previous Entries: </h3>
//           {stickyNotes.map((note, index) => (
//             <div className="sticky-note" key={index}>
//               <p><strong>Date:</strong> {note.date}</p>
//               {Object.keys(note).filter((key) => key !== 'date').map((habit) => (
//                 <p key={habit}><strong>{habit}:</strong> {note[habit]}</p>
//               ))}
//             </div>
//           ))}
//           <button className="reset-button" onClick={handleReset}>Reset Sticky Notes</button>
//         </div>

//         <div className="habits-section">
//           <div className="streak-section">
//             <h3>Daily Streak</h3>
//             <div className="streak-circle">
//             <div className="streak-progress" style={{ clipPath: `inset(0 ${100 - streak * 10}% 0 0)` }}>

//               </div>
//               <span className="streak-text">{streak} Days</span>
//             </div>
//             <button className="reset-button" onClick={handleReset}>Reset Streak</button>
//           </div>

//           <h2>My habits:</h2>
//           <p className="daily-question"><strong>{currentQuestion.text}</strong></p>
          
//           <div className="habit-options">
//             {currentQuestion.options.map((option) => (
//               <div
//                 className="habit-option"
//                 key={option.value}
//                 onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
//               >
//                 <img src={option.image} alt={option.label} />
//                 <span>{option.label}</span>
//               </div>
//             ))}
//           </div>
          
//           {currentQuestionIndex === questions.length - 1 && (
//             <button className="save-button" onClick={handleSave}>
//               Save Entry
//             </button>
//           )}
//         </div>
//       </div>

//       <BottomQuoteSlideshow /> {/* New Bottom Quote Slideshow */}
//     </div>
//   );
// }

// export default Website;
























import React, { useState, useEffect } from 'react';
import './MyHabits.css';
import lightExercise from '../../assets/th.jpeg';
import modExer from '../../assets/moderate.png';
import heavy from '../../assets/heavy.png';
import calm from '../../assets/calm.jpeg';
import distracted from '../../assets/distracted.jpeg';
import focus from '../../assets/focused.jpeg';
import article from '../../assets/article.jpeg';
import book from '../../assets/book.jpeg';
import blog from '../../assets/blog.jpeg';
import poor from '../../assets/poor.jpeg';
import avg from '../../assets/average.jpeg';
import exc from '../../assets/excellent.jpeg';
import less from '../../assets/less.jpeg';
import mod from '../../assets/modwater.jpeg';
import full from '../../assets/full.jpeg';

const QuoteSlideshow = () => {
  const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-slideshow">
      <h3>{quotes[currentQuoteIndex]}</h3>
    </div>
  );
};

const BottomQuoteSlideshow = () => {
  const bottomQuotes = [
    "Small steps every day lead to big changes.",
    "Consistency is key to growth.",
    "Push yourself, because no one else is going to do it for you."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % bottomQuotes.length);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bottom-quote-slideshow">
      <h3>{bottomQuotes[currentQuoteIndex]}</h3>
    </div>
  );
};

function Website() {
  const questions = [
    { id: 'exercise', text: "How much physical activity did you get today?", options: [
      { value: "light", label: "Light", image: lightExercise },
      { value: "moderate", label: "Moderate", image: modExer },
      { value: "intense", label: "Intense", image: heavy },
    ]},
    { id: 'meditation', text: "How did you feel during meditation today?", options: [
      { value: "calm", label: "Calm", image: calm },
      { value: "focused", label: "Focused", image: focus },
      { value: "distracted", label: "Distracted", image: distracted },
    ]},
    { id: 'reading', text: "What did you read today?", options: [
      { value: "article", label: "Article", image: article },
      { value: "book", label: "Book", image: book },
      { value: "blog", label: "Blog", image: blog },
    ]},
    { id: 'sleep', text: "How would you rate your sleep quality?", options: [
      { value: "poor", label: "Poor", image: poor },
      { value: "average", label: "Average", image: avg },
      { value: "excellent", label: "Excellent", image: exc },
    ]},
    { id: 'hydration', text: "How much water did you drink today?", options: [
      { value: "low", label: "Low", image: less },
      { value: "moderate", label: "Moderate", image: mod },
      { value: "high", label: "High", image: full },
    ]}
  ];

  const [habits, setHabits] = useState({});
  const [streak, setStreak] = useState(0);
  const [stickyNotes, setStickyNotes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const savedStreak = localStorage.getItem('streak');
    const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    
    if (savedStreak) setStreak(Number(savedStreak));
    setStickyNotes(savedNotes);
  }, []);

  const handleOptionSelect = (habitId, value) => {
    setHabits((prevHabits) => ({
      ...prevHabits,
      [habitId]: value
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSave = () => {
    const newNote = { ...habits, date: new Date().toLocaleDateString() };
    
    const updatedNotes = [newNote, ...stickyNotes];
    setStickyNotes(updatedNotes);
    localStorage.setItem('stickyNotes', JSON.stringify(updatedNotes));

    // Update streak immediately when a note is created
    setStreak((prevStreak) => {
      const newStreak = prevStreak + 1;
      localStorage.setItem('streak', newStreak);
      return newStreak;
    });

    // Reset for next entry
    setHabits({});
    setCurrentQuestionIndex(0);
  };

  const handleReset = () => {
    setStreak(0);
    localStorage.setItem('streak', 0);
    localStorage.removeItem('stickyNotes'); // Clear all sticky notes
    setStickyNotes([]); // Reset sticky notes state
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container">
      <QuoteSlideshow />

      <div className="content">
        <div className="sticky-notes">
          <h3>Previous Entries: </h3>
          {stickyNotes.map((note, index) => (
            <div className="sticky-note" key={index}>
              <p><strong>Date:</strong> {note.date}</p>
              {Object.keys(note).filter((key) => key !== 'date').map((habit) => (
                <p key={habit}><strong>{habit}:</strong> {note[habit]}</p>
              ))}
            </div>
          ))}
          <button className="reset-button" onClick={handleReset}>Reset Sticky Notes</button>
        </div>

        <div className="habits-section">
          <div className="streak-section">
            <h3>Daily Streak</h3>
            <div className="streak-circle">
            <div className="streak-progress" style={{ clipPath: `inset(0 ${100 - streak * 10}% 0 0)` }}>

              </div>
              <span className="streak-text">{streak} Days</span>
            </div>
            <button className="reset-button" onClick={handleReset}>Reset Streak</button>
          </div>

          <h2>My habits:</h2>
          <p className="daily-question"><strong>{currentQuestion.text}</strong></p>
          
          <div className="habit-options">
            {currentQuestion.options.map((option) => (
              <div
                className="habit-option"
                key={option.value}
                onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
              >
                <img src={option.image} alt={option.label} />
                <span>{option.label}</span>
              </div>
            ))}
          </div>
          
          {currentQuestionIndex === questions.length - 1 && (
            <button className="save-button" onClick={handleSave}>
              Save Entry
            </button>
          )}
        </div>
      </div>

      <BottomQuoteSlideshow /> {/* New Bottom Quote Slideshow */}
    </div>
  );
}

export default Website;
