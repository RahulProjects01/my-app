import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Register.css'; 

const Register = () => {
  const [formData, setFormData] = useState({});

  const [error, setError] = useState('');

  useEffect(()=>{
    setFormData({
      "firstName": "",
      "lastName": "",
      "phoneNumber": "",
      "username": "",
      "emailAddress": "",
      "password": "",
      "userType": null
    });
  },[])

  console.log(formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); 
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', formData  , {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      console.log(response.data);
      setFormData({
        "firstName": "",
        "lastName": "",
        "phoneNumber": "",
        "username": "",
        "emailAddress": "",
        "password": "",
        "userType": null
      });
      alert("register successfully..");
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
              name="emailAddress"
              value={formData.emailAddress}
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
              type="text"
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
              <option value="1">Admin</option>
              <option value="2">User</option>
            </select>
            <div className="underline"></div>
            <label>Select Type</label>
          </div>
        </div>
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