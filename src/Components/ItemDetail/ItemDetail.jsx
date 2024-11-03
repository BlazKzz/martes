import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock';
import Loading from '../Loading/Loading';
import './ItemDetail.css';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
<<<<<<< HEAD
            console.log(data);
=======
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
            setLoading(false);
        });
    }, [productId]);

    if (loading) return <Loading />;
    if (!product) return <div className="error-message">Producto no encontrado</div>;

    return (
        <div className="item-detail-container">
            <div className="item-detail-grid">
                <div className="item-detail-image">
<<<<<<< HEAD
                    <img src={product.img} alt="Imagen del producto" />
=======
                    <img src={product.img} alt={product.name} />
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
                </div>
                <div className="item-detail-info">
                    <h1>{product.name}</h1>
                    <p className="description">{product.description}</p>
                    <p className="price">Precio: ${product.price}</p>
                    <p className="stock">Stock: {product.stock}</p>
<<<<<<< HEAD
=======
                    
                    <div className="sizes">
                        <h3>Tallas disponibles:</h3>
                        <ul>
                            {product.sizes.map((size, index) => (
                                <li key={index}>{size}</li>
                            ))}
                        </ul>
                    </div>
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
                </div>
            </div>
        </div>
    );
}