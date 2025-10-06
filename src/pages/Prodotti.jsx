import { useState, useEffect } from 'react'
import axios from "axios"
import Product from '../components/product';

const Prodotti = () => {

    const [products, setProducts] = useState([]);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) =>
                setProducts(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container">
            {products.map(product =>
                <div key={product.id} className="card">
                    <Product
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                    />
                </div>
            )}
        </div>
    )
}

export default Prodotti 