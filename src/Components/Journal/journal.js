// // JournalPage.js

// import React, { useState } from 'react';
// import './journal.css';
// import EmojiPicker from 'emoji-picker-react';
// import PastEntries from '../past/past';

// function JournalPage() {
//     const [currentEntry, setCurrentEntry] = useState('');
//     const [entries, setEntries] = useState([]);
//     const [selectedFont, setSelectedFont] = useState('Arial');
//     const [textColor, setTextColor] = useState('#000000');
//     const [images, setImages] = useState([]);
//     const [showPicker, setShowPicker] = useState(false);
//     const [showPastEntries, setShowPastEntries] = useState(false); 
    
//     const handleSaveEntry = () => {
//         if (currentEntry.trim() === '') return; // Prevent saving empty entries
//         setEntries([...entries, currentEntry]); // Add the current entry to past entries
//         setCurrentEntry(''); // Clear the current entry after saving
//         setShowPastEntries(true); // Ensure past entries are visible
//     };

//     const handleNewEntry = () => {
//         if (currentEntry.trim() !== '') {
//             setEntries([...entries, currentEntry]);
//         }
//         setCurrentEntry('');
//     };

//     const handleImageUpload = (e) => {
//         const files = Array.from(e.target.files);
//         setImages([...images, ...files]);
//     };

//     const handleEmojiClick = (emojiData) => {
//         setCurrentEntry(prevText => prevText + emojiData.emoji);
//         setShowPicker(false);
//     };

//     return (
//         <div className="journal-page">
//             <aside className="sidebar">
//                 <div className="sidebar-box">
//                     <h3>Current Entry</h3>
//                     <p className='preview-text'>{currentEntry.slice(0, 100)}...</p>
//                 </div>
//                 <div className="sidebar-box">
//                     <button onClick={handleNewEntry} className='new-entry'>New Entry</button>
//                 </div>
//                 <div className="sidebar-box">
//                     <button onClick={() => setShowPastEntries(prev => !prev)} className='past-entries-button'>
//                         {showPastEntries ? 'Hide Past Entries' : 'View Past Entries'}
//                     </button>
//                 </div>
//             </aside>

//             <main className="journal-content">
//                 <header>
//                     <h1 className='title-name'>Journal</h1>
//                     <p className='date'>{new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}</p>
//                 </header>
                
//                 <textarea
//                     style={{ fontFamily: selectedFont, color: textColor }}
//                     value={currentEntry}
//                     onChange={(e) => setCurrentEntry(e.target.value)}
//                     placeholder="Write your journal entry here..."
//                 />

//                 <div className="image-upload">
//                     <label className='image-label'>Add images from today</label>
//                     <input type="file" multiple onChange={handleImageUpload} />
//                     <div className="image-preview">
//                         {images.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={URL.createObjectURL(image)}
//                                 alt="Preview"
//                                 style={{ width: '100px', height: '100px' }}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="text-options">
//                     <label>Choose font:</label>
//                     <select onChange={(e) => setSelectedFont(e.target.value)}>
//                         <option value="Arial">Arial</option>
//                         <option value="Georgia">Georgia</option>
//                         <option value="Courier New">Courier New</option>
//                     </select>

//                     <label>Choose color:</label>
//                     <input type="color" onChange={(e) => setTextColor(e.target.value)} />
                    
//                     <div className="text-customization">
//                         <button onClick={() => setShowPicker(!showPicker)}>Add Emoji</button>
//                         {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
//                     </div>
//                 </div>

//                 <div className="save-button-container">
//                     <button className='save-button' onClick={handleSaveEntry}>Save Entry</button>
//                 </div>

//                 {/* PastEntries rendered only once here */}
//                 {showPastEntries && <PastEntries entries={entries} />}
//             </main>
//         </div>
//     );
// }

// export default JournalPage;


// JournalPage.js

import React, { useState } from 'react';
import './journal.css';
import EmojiPicker from 'emoji-picker-react';
import PastEntries from '../past/past';
import axios from 'axios';

function JournalPage() {
    const [currentEntry, setCurrentEntry] = useState('');
    const [entries, setEntries] = useState([]);
    const [selectedFont, setSelectedFont] = useState('Arial');
    const [textColor, setTextColor] = useState('#000000');
    const [images, setImages] = useState([]);
    const [showPicker, setShowPicker] = useState(false);
    const [showPastEntries, setShowPastEntries] = useState(false);

    const userId = 'user123'; 
    const handleSaveEntry = async () => {
        if (currentEntry.trim() === '') return; 
        
        const entryData = {
            userId,
            content: currentEntry,
            font: selectedFont,
            color: textColor,
            images: images.map(img => URL.createObjectURL(img)), 
        };

        try {
            await axios.post('http://localhost:5002/journals', entryData);
            setEntries([...entries, currentEntry]); 
            setCurrentEntry(''); 
            setShowPastEntries(true); 
        } catch (err) {
            console.error('Error saving entry:', err);
        }
    };

    const handleNewEntry = () => {
        if (currentEntry.trim() !== '') {
            setEntries([...entries, currentEntry]);
        }
        setCurrentEntry('');
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setImages([...images, ...files]);
    };

    const handleEmojiClick = (emojiData) => {
        setCurrentEntry(prevText => prevText + emojiData.emoji);
        setShowPicker(false);
    };

    return (
        <div className="journal-page">
            <aside className="sidebar">
                <div className="sidebar-box">
                    <h3>Current Entry</h3>
                    <p className='preview-text'>{currentEntry.slice(0, 100)}...</p>
                </div>
                <div className="sidebar-box">
                    <button onClick={handleNewEntry} className='new-entry'>New Entry</button>
                </div>
                <div className="sidebar-box">
                    <button onClick={() => setShowPastEntries(prev => !prev)} className='past-entries-button'>
                        {showPastEntries ? 'Hide Past Entries' : 'View Past Entries'}
                    </button>
                </div>
            </aside>

            <main className="journal-content">
                <header>
                    <h1 className='title-name'>Journal</h1>
                    <p className='date'>{new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}</p>
                </header>
                
                <textarea
                    style={{ fontFamily: selectedFont, color: textColor }}
                    value={currentEntry}
                    onChange={(e) => setCurrentEntry(e.target.value)}
                    placeholder="Write your journal entry here..."
                />

                <div className="image-upload">
                    <label className='image-label'>Add images from today</label>
                    <input type="file" multiple onChange={handleImageUpload} />
                    <div className="image-preview">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                style={{ width: '100px', height: '100px' }}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-options">
                    <label>Choose font:</label>
                    <select onChange={(e) => setSelectedFont(e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Courier New">Courier New</option>
                    </select>

                    <label>Choose color:</label>
                    <input type="color" onChange={(e) => setTextColor(e.target.value)} />
                    
                    <div className="text-customization">
                        <button onClick={() => setShowPicker(!showPicker)}>Add Emoji</button>
                        {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
                    </div>
                </div>

                <div className="save-button-container">
                    <button className='save-button' onClick={handleSaveEntry}>Save Entry</button>
                </div>

                {/* PastEntries rendered only once here */}
                {showPastEntries && <PastEntries entries={entries} />}
            </main>
        </div>
    );
}

export default JournalPage;
