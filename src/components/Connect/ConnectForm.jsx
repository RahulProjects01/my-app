import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './connect.css';

const ConnectForm = () => {
    const [user, setUser] = useState({});
    const [formData, setFormData] = useState({});
    const [admins, setAdmins] = useState([]);
    let da = localStorage.getItem("user");
    da = JSON.parse(da);
    useEffect(() => {

        if (da != null) {
            setUser(da);
            setFormData({
                firstName: da.firstName,
                lastName: da.lastName,
                email: da.emailAddress,
                meetingPerson: null,
                message: ''
            })
        }
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/users/allAdmin');
                console.log(response.data);
                setAdmins(response.data);
            } catch (err) {
                console.log('Registration failed');
            }
        }
        fetchData();
        console.log(da);
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.meetingPerson == null || formData.meetingPerson == '' || formData.message == '') {
            alert("please fill fields..");
            return;
        }
        const data = {
            "mailFrom": user.id,
            "mailTo": formData.meetingPerson,
            "mailDescriptions": formData.message
        }
        try {

            const response = await axios.post('http://localhost:8080/sender/EmailProcessing', data);
            console.log(response.data);
            setFormData(pre => ({
                ...pre,
                meetingPerson: null,
                message: ''
            }));
            alert("successfully send")
        } catch (err) {
            console.log('Registration failed');
        }

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
                            value={formData?.firstName}
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
                            <option value='' >Select Person</option>
                            {
                                admins.map((item, index) => (
                                    <option value={item.id} key={index}>
                                        {item.firstName} {/* Replace "John Doe" with dynamic data, e.g., item.name */}
                                    </option>
                                ))
                            }

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
    )
};

export default ConnectForm;