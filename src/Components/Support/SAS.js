import React, { useState, useEffect } from 'react';
import './SAS.css';
import logo from '../../assets/logoo.png';

function SupportAndStrength() {
  const [affirmation, setAffirmation] = useState('');
  const [savedAffirmations, setSavedAffirmations] = useState([]);

  useEffect(() => {
    const storedAffirmations = JSON.parse(localStorage.getItem('affirmations')) || [];
    setSavedAffirmations(storedAffirmations);
  }, []);

  const handleSaveAffirmation = () => {
    if (affirmation.trim()) {
      const updatedAffirmations = [...savedAffirmations, { text: affirmation, date: new Date().toLocaleDateString() }];
      setSavedAffirmations(updatedAffirmations);
      localStorage.setItem('affirmations', JSON.stringify(updatedAffirmations));
      setAffirmation('');
    }
  };

  const handleResetAffirmations = () => {
    setSavedAffirmations([]);
    localStorage.removeItem('affirmations');
  };

  return (
    <div className="page">
      <div className="header1">SUPPORT AND STRENGTH</div>

      {/* Daily Affirmations Section */}
      <div className="section">
        <h2>Daily Affirmations</h2>
        <textarea
          className="affirmations"
          rows="5"
          placeholder="Enter your daily affirmations here..."
          value={affirmation}
          onChange={(e) => setAffirmation(e.target.value)}
        ></textarea>
        <button className="save-button" onClick={handleSaveAffirmation}>Save Affirmation</button>
        <button className="reset-button" onClick={handleResetAffirmations}>Reset All Affirmations</button>
      </div>

      {/* Display Saved Affirmations */}
      <div className="section">
        <h2>Saved Affirmations</h2>
        <div className="saved-affirmations">
          {savedAffirmations.length > 0 ? (
            savedAffirmations.map((entry, index) => (
              <div key={index} className="affirmation-entry">
                <p><strong>{entry.date}</strong>: {entry.text}</p>
              </div>
            ))
          ) : (
            <p>No affirmations saved yet.</p>
          )}
        </div>
      </div>

      {/* Uplifting Videos Section */}
      <div className="section">
        <h2>Uplifting Videos</h2>
        <div className="videos">
          <div className="video">
            <a href="https://www.youtube.com/watch?v=efZFARmGyMs" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/efZFARmGyMs/hqdefault.jpg"
                alt="Positive Affirmations to Change Your Life"
                className="video-thumbnail"
              />
            </a>
            <p className="video-title">Change Your Life</p>
          </div>
          <div className="video">
            <a href="https://www.youtube.com/watch?v=uT6ASPy2Dbs" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/uT6ASPy2Dbs/hqdefault.jpg"
                alt="Powerful Morning Affirmations ☀️"
                className="video-thumbnail"
              />
            </a>
            <p className="video-title">Powerful Morning☀️</p>
          </div>
          <div className="video">
            <a href="https://www.youtube.com/watch?v=5CtiouwHOxw" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/5CtiouwHOxw/hqdefault.jpg"
                alt="Manifest Your Dream Life 🌟"
                className="video-thumbnail"
              />
            </a>
            <p className="video-title">Manifest Your Dream Life 🌟</p>
          </div>
          <div className="video">
            <a href="https://www.youtube.com/watch?v=RhuhLc69hF0" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/RhuhLc69hF0/hqdefault.jpg"
                alt="Gratitude Affirmations ✨"
                className="video-thumbnail"
              />
            </a>
            <p className="video-title">Gratitude Affirmations ✨</p>
          </div>
        </div>
      </div>

      {/* Helpline Numbers Section */}
      <div className="section">
        <h2>Helpline Numbers</h2>
        <p>If you or someone you know needs support, please reach out:</p>
        <ul>
          <li><strong>National Helpline:</strong>1800-11-4000</li>
          <li><strong>Local Support:</strong>1902</li>
          <li><strong>Emergency:</strong> 112</li>
        </ul>
      </div>

      {/* Mood Journal Contact Information */}
      <div className="section">
        <h2>About Mood Journal</h2>
        <p>Contact us for any inquiries or support:</p>
        <p><strong>Email:</strong> support@moodjournal.com</p>
        <p><strong>Contact:</strong> +123-456-7890</p>
        { <div className="logoo">
          <img src={logo} alt="Mood Journal Logo" />
        </div> }
      </div>
    </div>
  );
}

export default SupportAndStrength;
