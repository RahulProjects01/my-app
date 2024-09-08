import axios from 'axios';
import React, { useState } from 'react';
import './Register.css'; // Ensure this path matches where your CSS file is located

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: '',
    phoneNumber: '',
    userType: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Print form data to console
    try {
      const response = await axios.post('http://your-api-url/register', formData);
      // Handle successful registration (e.g., redirect to login)
      console.log(response.data);
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="container">
      <div className="text">Register Now</div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>First Name</label>
          </div>
          <div className="input-data">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>Last Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>Email Address</label>
          </div>
          <div className="input-data">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>Password</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>Username</label>
          </div>
          <div className="input-data">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>Phone Number</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Type</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <div className="underline"></div>
            <label>Select Type</label>
          </div>
        </div>
        {error && <p>{error}</p>}
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="Register" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
