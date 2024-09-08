import axios from 'axios';
import React, { useState } from 'react';
import './login.css'; // Ensure this path matches where your CSS file is located

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ email, password }); // Print form data to console
        try {
            const response = await axios.post('http://your-api-url/login', {
                email,
                password
            });
            // Handle successful login (e.g., store token, redirect)
            console.log(response.data);
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="container">
            <div className="text">Login</div>
            <form onSubmit={handleSubmit}>
                <div className="input-data">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="underline"></div>
                    <label>Email</label>
                </div>
                <div className="input-data">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="underline"></div>
                    <label>Password</label>
                </div>
                {error && <p className="error">{error}</p>}
                <div className="submit-btn">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
