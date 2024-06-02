import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './App.css';

function Header() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="header">
            <div className="header-left">
                <Link to="/">Home</Link>
            </div>
            <div className="header-right">
                <Link to="/cart">Cart</Link>
                {user ? (
                    <>
                        <span>Welcome, {user.username}</span>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
