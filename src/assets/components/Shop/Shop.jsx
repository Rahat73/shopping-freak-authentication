import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';


const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }


    return (
        <div className="shop-container">
            <div>
                <h2>Total Products: {products.length}</h2>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="order-cart">
                <h2>Order Summery: </h2>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;