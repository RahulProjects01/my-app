import axios from 'axios';
import React, { useState } from 'react';
import './login.css'; 

const Login = () => {
    const [emailAddress, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "emailAddress": emailAddress,
            "password": password
        }
       
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', data);
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            setEmail('');
            setPassword('');
            alert("login successfully..");
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
                        name="emailAddress"
                        value={emailAddress}
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