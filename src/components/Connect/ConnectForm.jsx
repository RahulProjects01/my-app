import React, { useState } from 'react';
import './connect.css'; // Ensure this path matches where your CSS file is located

const ContactForm = () => {
    // State to handle form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        meetingPerson: '',
        message: ''
    });

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(formData); // Print form data to the console

    };

    return (
        <div className="container">
            <div className="text">Connect to Person</div>
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
                        <select
                            name="meetingPerson"
                            value={formData.meetingPerson}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Person</option>
                            <option value="john">John Doe</option>
                            <option value="jane">Jane Smith</option>
                            <option value="mike">Mike Johnson</option>
                            <option value="emily">Emily Brown</option>
                            <option value="david">David Wilson</option>
                        </select>
                        <div className="underline"></div>
                        <label>Meeting Person</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data textarea">
                        <textarea
                            rows="8"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <div className="underline"></div>
                        <label>Write your message</label>
                    </div>
                </div>
                <div className="form-row submit-btn">
                    <div className="input-data">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
