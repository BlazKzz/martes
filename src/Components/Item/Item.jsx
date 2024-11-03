import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'; // Importa Link
=======
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
import { getProducts } from "../../data/asyncMock"; 
import './Item.css'; 

const Itemcard = ({ product }) => {
    return (
<<<<<<< HEAD
        <Link to={`/products/${product.id}`} className="card"> 
=======
        <div className="card">
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
            <img alt={product.name} src={product.img} />
            <div className="badge">{product.category}</div>
            <div className="title">{product.name}</div>
            <div className="price">${product.price.toFixed(2)}</div>
            <div className="description">{product.despcription}</div>
            <div className="stock">Stock: {product.stock}</div>
<<<<<<< HEAD
        </Link>
=======
        </div>
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
    );
};

const Item = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
<<<<<<< HEAD
=======
            console.log(productsData); 
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
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