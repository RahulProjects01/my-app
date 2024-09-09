import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/RegisterForm/RegisterForm';
import ConnectForm from './components/Connect/ConnectForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/connect">Connect to person</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/connect" element={<ConnectForm />} />
          <Route path="/" element={<h1>Welcome to My App</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
