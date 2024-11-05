import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock';
import Loading from '../Loading/Loading';
import './ItemDetail.css';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            console.log(data);
            setLoading(false);
        });
    }, [productId]);

    // Funciones para control de cantidad
    const decrementQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if(product && quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    // Cálculo del precio total
    const calculateTotalPrice = () => {
        return product ? product.price * quantity : 0;
    };
    if (loading) return <Loading />;
    if (!product) return <div className="error-message">Producto no encontrado</div>;

    return (
        <div className="item-detail-container">
            <div className="item-detail-grid">
                <div className="item-detail-image">
                    <img src={product.img} alt="Imagen del producto" />
                    <img src={product.img} alt={product.name} />
                    <img src={product.img} alt="Imagen del producto" />
                </div>
                <div className="item-detail-info">
                    <h1>{product.name}</h1>
                    <p className="description">{product.description}</p>
                    <p className="price">Precio: ${product.price}</p>
                    <p className="stock">Stock: {product.stock}</p>
                    <div className="sizes">
                        <h3>Tallas disponibles:</h3>
                        <ul>
                            {product.sizes.map((size, index) => (
                                <li key={index}>{size}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="stock">Stock disponible: {product.stock}</p>
                    {/* Control de cantidad */}
                    <div className="quantity-controls">
                        <button onClick={decrementQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={incrementQuantity}>+</button>
                    </div>

                    {/* Precio total */}
                    <p className="total-price">Precio Total: ${calculateTotalPrice()}</p>

                    {/* Botón de compra */}
                    <button className="buy-button">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}