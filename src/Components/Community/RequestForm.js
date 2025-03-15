// src/components/RequestForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './RequestForm.css'; 
import Navbar from './Navbar'; // Import Navbar component
import About from './About'; //

const RequestForm = ({ onAddRequest }) => {
	const [residentName, setResidentName] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response =
				await axios.post('http://localhost:5003/requests', {
					residentName,
					content,
				});

			onAddRequest(response.data);
			setResidentName('');
			setContent('');
		} catch (error) {
			console.error('Error creating request:', error);
		}
	};

	return (
        <>
        {/* Include Navbar */}
		<Navbar />

{/* Include the About section */}
<About />
		<div className="request-form-container">
			<h2>Write a thought you would like to share....💭</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="residentName">
						Name:
					</label>
					<input
						id="residentName"
						type="text"
						value={residentName}
						onChange={
							(e) =>
								setResidentName(e.target.value)
						}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="content">
						Thought:
					</label>
					<textarea
						id="content"
						value={content}
						onChange={
							(e) =>
								setContent(e.target.value)
						}
					/>
				</div>
				<button type="submit"
					className="submit-button">
					Submit Request
				</button>
			</form>
		</div>
        </>
	);
};

export default RequestForm;