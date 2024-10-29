import Itemcard from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading"
import './Itemlist.css'

export default function Itemlist(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) =>{
            setProducts(data)
            setLoading(false)
        });
    }, []);

    return(
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="products-grid">
                    {products.map((prod) =>(
                        <Itemcard {...prod} key={prod.id}/>
                    ))}
                </div>
            )}
        </>
    )
}