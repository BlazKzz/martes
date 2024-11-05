import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from "../../data/asyncMock"; 
import './Item.css'; 

const Itemcard = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} className="card"> 
            <img alt={product.name} src={product.img} />
            <div className="badge">{product.category}</div>
            <div className="title">{product.name}</div>
            <div className="price">${product.price.toFixed(2)}</div>
            <div className="description">{product.despcription}</div>
            <div className="stock">Stock: {product.stock}</div>
        </Link>
    );
};

const Item = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            console.log(productsData); 
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    return (
        <div className="container">
            {products.map(product => (
                <Itemcard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Item;