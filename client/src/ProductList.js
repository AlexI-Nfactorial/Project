import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('title');

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products?search=${search}&sort=${sort}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, [search, sort]);

    return (
        <div className="container">
            <h1>Product List</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="title">Name</option>
                <option value="price">Price</option>
            </select>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <Link to={`/products/${product._id}`}>
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>${product.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
