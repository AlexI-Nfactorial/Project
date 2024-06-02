import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Cart() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    return (
        <div className="container">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-details">
                            <h2>{item.title}</h2>
                            
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
            <br />
            <Link to="/">Back to Product List</Link>
        </div>
    );
}

export default Cart;
