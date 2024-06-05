import React, { useCallback, useEffect, useState } from 'react'
import "./style.css";
function LoadMore() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [productsLimit, setProductsLimit] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    const loadProducts = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            if (data?.products?.length > 0) {
                setProducts((prevData) => [...prevData, ...data.products]);
            }
            if (data?.total !== productsLimit) {
                setProductsLimit(data.total)
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, [count]);

    useEffect(() => {
        setDisableButton(products?.length >= productsLimit);

    }, [products, productsLimit]);

    useEffect(() => {
        loadProducts();
    }, [count, loadProducts]);

    if (loading) {
        return <div>Loading Please wait</div>
    }
    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length
                    ? products.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null}
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>
                    Load More Products
                </button>
                {disableButton ? <p>You have reached to {productsLimit} products</p> : null}
            </div>
        </div>
    );
}

export default LoadMore
