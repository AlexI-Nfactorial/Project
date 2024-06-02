import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Register from './Register';
import Login from './Login';
import ThankYou from './ThankYou';
import Header from './Header';
import { AuthProvider } from './AuthContext';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
