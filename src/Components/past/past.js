// past.js

import React from 'react';
import './past.css';

function PastEntries({ entries = [] }) {
    return (
        <div className="past-entries">
            <h3>Past Entries</h3>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
}

export default PastEntries;
