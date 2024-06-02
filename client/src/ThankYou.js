import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function ThankYou() {
    return (
        <div className="container">
            <h1>Thank You for Registering!</h1>
            <p>Your registration was successful.</p>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}

export default ThankYou;
