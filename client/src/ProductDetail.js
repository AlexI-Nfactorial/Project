import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the product!', error);
            });
    }, [id]);

    const addToCart = () => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        navigate('/cart');
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} width="200" />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
            <br />
            <Link to="/">Back to Product List</Link>
        </div>
    );
}

export default ProductDetail;
