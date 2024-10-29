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
            console.log(data);
            setLoading(false);
        });
    }, [productId]);

    if (loading) return <Loading />;
    if (!product) return <div className="error-message">Producto no encontrado</div>;

    return (
        <div className="item-detail-container">
            <div className="item-detail-grid">
                <div className="item-detail-image">
                    <img src={product.img} alt="Imagen del producto" />
                </div>
                <div className="item-detail-info">
                    <h1>{product.name}</h1>
                    <p className="description">{product.description}</p>
                    <p className="price">Precio: ${product.price}</p>
                    <p className="stock">Stock: {product.stock}</p>
                </div>
            </div>
        </div>
    );
}