// import React, { useState } from 'react';
// import axios from 'axios';
// import './Signup.css';
// import username_icon from '../username.png';
// import password_icon from '../password1.png';
// import email_icon from '../email.png'; // Assuming you have an email icon

// const Signup = () => {
//     // States for Signup form fields
//     const [isLogin, setIsLogin] = useState(false); // to toggle between Signup and Login
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false); // State for loading indicator

//     // Handle Signup
//     const handleSignup = async (e) => {
//         e.preventDefault();

//         // Simple client-side validation
//         if (!email || !username || !password) {
//             setMessage("Please fill in all fields.");
//             return;
//         }

//         setLoading(true);
//         const userData = { email, username, password };

//         try {
//             const response = await axios.post('http://localhost:5001/api/auth/signup', userData);
//             setMessage(response.data.message); // Display success message from server
//             if (response.data.success) {
//                 // Clear form fields after successful signup
//                 setEmail('');
//                 setUsername('');
//                 setPassword('');
//             }
//             setLoading(false);
//         } catch (error) {
//             console.error('Signup Error:', error);
//             setLoading(false);
//             if (error.response) {
//                 setMessage(error.response.data.message); // Show error message from server
//             } else {
//                 setMessage('Internal server error');
//             }
//         }
//     };

//     // Handle Login
//     const handleLogin = async (e) => {
//         e.preventDefault();

//         // Validate input fields
//         if (!username && !email) {
//             setMessage("Please provide a username or email.");
//             return;
//         }

//         if (!password) {
//             setMessage("Please enter your password.");
//             return;
//         }

//         setLoading(true);
//         const userData = { email, username, password };

//         try {
//             const response = await axios.post('http://localhost:5001/api/auth/login', userData);
//             setMessage(response.data.message); // Show success message from server
//             setLoading(false);

//             if (response.status === 200) {
//                 // Redirect to the homepage after successful login
//                 // You can use React Router to navigate
//                 console.log(`${response.data.username} logged in successfully.`); // Correct string interpolation
//                 window.location.href = `/home?username=${response.data.username}`; // Correct path with template literal
//             }
            
//         } catch (error) {
//             console.error('Login Error:', error);
//             setLoading(false);
//             if (error.response) {
//                 setMessage(error.response.data.message); // Show error message from server
//             } else {
//                 setMessage('Internal server error.');
//             }
//         }
//     };

//     return (
//         <div className='head'>
//             <div className='signup-form'>
//                 <div className='form'>
//                     <div className='login-heading'>
//                         <h2 className='login-name'>{isLogin ? 'LOGIN' : 'SIGN UP'}</h2>
//                         <button
//                             className='signup-button'
//                             onClick={() => {
//                                 setIsLogin(!isLogin); 
//                                 setEmail(''); // Reset email field
//                                 setUsername(''); // Reset username field
//                                 setPassword(''); // Reset password field
//                                 setMessage(''); // Clear messages
//                             }}
//                         >
//                             {isLogin ? 'SIGN UP' : 'LOGIN'}
//                         </button>
//                     </div>

//                     {/* Conditional Rendering: Signup Form */}
//                     {!isLogin && (
//                         <>
//                             <div className='forms'>
//                                 <img src={email_icon} alt="Email" />
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder="Email"
//                                 />
//                             </div>

//                             <div className='forms'>
//                                 <img src={username_icon} alt="Username" />
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     placeholder="Username"
//                                 />
//                             </div>
//                         </>
//                     )}

//                     {/* Login Form: Always Show Username and Password Fields */}
//                     {isLogin && (
//                         <>
//                             <div className='forms'>
//                                 <img src={username_icon} alt="Username" />
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     placeholder="Username"
//                                 />
//                             </div>
//                         </>
//                     )}

//                     <div className='forms'>
//                         <img src={password_icon} alt="Password" />
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Password"
//                         />
//                     </div>

//                     {/* Displaying message */}
//                     {message && <div className="message">{message}</div>}

//                     <div className='forgot-pass'>Forgot Password?</div>

//                     <div className='button-container'>
//                         {/* Show different buttons based on login/signup state */}
//                         <button
//                             className='login-button'
//                             onClick={isLogin ? handleLogin : handleSignup}
//                             disabled={loading}
//                         >
//                             {isLogin ? (loading ? 'Logging in...' : 'LOGIN') : (loading ? 'Creating account...' : 'CREATE')}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './Signup.css';
// import username_icon from '../username.png';
// import password_icon from '../password1.png';
// import email_icon from '../email.png'; // Assuming you have an email icon

// const Signup = () => {
//     // States for Signup form fields
//     const [isLogin, setIsLogin] = useState(false); // to toggle between Signup and Login
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false); // State for loading indicator

//     // Handle Signup
//     const handleSignup = async (e) => {
//         e.preventDefault();

//         // Simple client-side validation
//         if (!email || !username || !password) {
//             setMessage("Please fill in all fields.");
//             return;
//         }

//         setLoading(true);
//         const userData = { email, username, password };

//         try {
//             const response = await axios.post('http://localhost:5001/api/auth/signup', userData);
//             setMessage(response.data.message); // Display success message from server
//             if (response.data.success) {
//                 // Clear form fields after successful signup
//                 setEmail('');
//                 setUsername('');
//                 setPassword('');
//             }
//             setLoading(false);
//         } catch (error) {
//             console.error('Signup Error:', error);
//             setLoading(false);
//             if (error.response) {
//                 setMessage(error.response.data.message); // Show error message from server
//             } else {
//                 setMessage('Internal server error');
//             }
//         }
//     };

//     // Handle Login
//     const handleLogin = async (e) => {
//         e.preventDefault();

//         // Validate input fields for login
//         if (!username && !email) {
//             setMessage("Please provide a username or email.");
//             return;
//         }

//         if (!password) {
//             setMessage("Please enter your password.");
//             return;
//         }

//         setLoading(true);
//         const userData = { email, username, password };

//         try {
//             const response = await axios.post('http://localhost:5001/api/auth/login', userData);
//             setMessage(response.data.message); // Show success message from server
//             setLoading(false);

//             if (response.status === 200) {
//                 // Redirect to the homepage after successful login
//                 console.log(`${response.data.username} logged in successfully.`);
//                 window.location.href = `/home?username=${response.data.username}`; // Correct path with template literal
//             }

//         } catch (error) {
//             console.error('Login Error:', error);
//             setLoading(false);
//             if (error.response) {
//                 setMessage(error.response.data.message); // Show error message from server
//             } else {
//                 setMessage('Internal server error.');
//             }
//         }
//     };

//     return (
//         <div className='head'>
//             <div className='signup-form'>
//                 <div className='form'>
//                     <div className='login-heading'>
//                         <h2 className='login-name'>{isLogin ? 'LOGIN' : 'SIGN UP'}</h2>
//                         <button
//                             className='signup-button'
//                             onClick={() => {
//                                 setIsLogin(!isLogin); 
//                                 setEmail(''); // Reset email field
//                                 setUsername(''); // Reset username field
//                                 setPassword(''); // Reset password field
//                                 setMessage(''); // Clear messages
//                             }}
//                         >
//                             {isLogin ? 'SIGN UP' : 'LOGIN'}
//                         </button>
//                     </div>

//                     {/* Conditional Rendering: Signup Form */}
//                     {!isLogin && (
//                         <>
//                             <div className='forms'>
//                                 <img src={email_icon} alt="Email" />
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder="Email"
//                                 />
//                             </div>

//                             <div className='forms'>
//                                 <img src={username_icon} alt="Username" />
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     placeholder="Username"
//                                 />
//                             </div>
//                         </>
//                     )}

//                     {/* Login Form: Always Show Username and Password Fields */}
//                     {isLogin && (
//                         <>
//                             <div className='forms'>
//                                 <img src={username_icon} alt="Username" />
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     placeholder="Username"
//                                 />
//                             </div>

//                             <div className='forms'>
//                                 <img src={email_icon} alt="Email" />
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder="Email (optional for login)"
//                                 />
//                             </div>
//                         </>
//                     )}

//                     <div className='forms'>
//                         <img src={password_icon} alt="Password" />
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Password"
//                         />
//                     </div>

//                     {/* Displaying message */}
//                     {message && <div className="message">{message}</div>}

//                     <div className='forgot-pass'>Forgot Password?</div>

//                     <div className='button-container'>
//                         {/* Show different buttons based on login/signup state */}
//                         <button
//                             className='login-button'
//                             onClick={isLogin ? handleLogin : handleSignup}
//                             disabled={loading}
//                         >
//                             {isLogin ? (loading ? 'Logging in...' : 'LOGIN') : (loading ? 'Creating account...' : 'CREATE')}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import username_icon from '../username.png';
import password_icon from '../password1.png';
import email_icon from '../email.png'; // Assuming you have an email icon

const Signup = () => {
    // States for Signup form fields
    const [isLogin, setIsLogin] = useState(false); // to toggle between Signup and Login
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // State for loading indicator

    // Handle Signup
    const handleSignup = async (e) => {
        e.preventDefault();

        // Simple client-side validation
        if (!email || !username || !password) {
            setMessage("Please fill in all fields.");
            return;
        }

        setLoading(true);
        const userData = { email, username, password };

        try {
            const response = await axios.post('http://localhost:5001/api/auth/signup', userData);
            setMessage(response.data.message); // Display success message from server
            if (response.data.success) {
                // Clear form fields after successful signup
                setEmail('');
                setUsername('');
                setPassword('');
            }
            setLoading(false);
        } catch (error) {
            console.error('Signup Error:', error);
            setLoading(false);
            if (error.response) {
                setMessage(error.response.data.message); // Show error message from server
            } else {
                setMessage('Internal server error');
            }
        }
    };

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (!username && !email) {
            setMessage("Please provide a username or email.");
            return;
        }
    
        if (!password) {
            setMessage("Please enter your password.");
            return;
        }
    
        setLoading(true);
        const userData = { email, username, password };
    
        try {
            const response = await axios.post('http://localhost:5001/api/auth/login', userData);
            setMessage(response.data.message); // Show success message from server
            setLoading(false);
    
            if (response.status === 200) {
                console.log(`${response.data.username} logged in successfully.`);
    
                // Save the username in localStorage
                localStorage.setItem('username', response.data.username);
    
                // Redirect to the homepage with the username
                window.location.href = `/home`;
            }
    
        } catch (error) {
            console.error('Login Error:', error);
            setLoading(false);
            if (error.response) {
                setMessage(error.response.data.message); // Show error message from server
            } else {
                setMessage('Internal server error.');
            }
        }
    };
    
    return (
        <div className='head'>
            <div className='signup-form'>
                <div className='form'>
                    <div className='login-heading'>
                        <h2 className='login-name'>{isLogin ? 'LOGIN' : 'SIGN UP'}</h2>
                        <button
                            className='signup-button'
                            onClick={() => {
                                setIsLogin(!isLogin); 
                                setEmail(''); // Reset email field
                                setUsername(''); // Reset username field
                                setPassword(''); // Reset password field
                                setMessage(''); // Clear messages
                            }}
                        >
                            {isLogin ? 'SIGN UP' : 'LOGIN'}
                        </button>
                    </div>

                    {/* Conditional Rendering: Signup Form */}
                    {!isLogin && (
                        <>
                            <div className='forms'>
                                <img src={email_icon} alt="Email" />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>

                            <div className='forms'>
                                <img src={username_icon} alt="Username" />
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                />
                            </div>
                        </>
                    )}

                    {/* Login Form: Always Show Username and Password Fields */}
                    {isLogin && (
                        <>
                            <div className='forms'>
                                <img src={username_icon} alt="Username" />
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                />
                            </div>
                        </>
                    )}

                    <div className='forms'>
                        <img src={password_icon} alt="Password" />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>

                    {/* Displaying message */}
                    {message && <div className="message">{message}</div>}


                    <div className='button-container'>
                        {/* Show different buttons based on login/signup state */}
                        <button
                            className='login-button'
                            onClick={isLogin ? handleLogin : handleSignup}
                            disabled={loading}
                        >
                            {isLogin ? (loading ? 'Logging in...' : 'LOGIN') : (loading ? 'Creating account...' : 'CREATE')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
