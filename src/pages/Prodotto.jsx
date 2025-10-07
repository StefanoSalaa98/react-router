import { useState, useEffect } from "react";
// importo l'hook per poter leggere il parametro
import { useParams } from "react-router-dom";
import axios from "axios"
import { Link } from "react-router-dom";


const Prodotto = () => {

    // recupero il parametro dinamico id
    const { id } = useParams();

    // stato del componente (prodotto che è stato cliccato)
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err)
            )
    }, [])

    return (
        <div>
            {product ? (
                <div className="prodotto" >
                    <h2>{product.title}</h2>
                    <strong>{product.price} €</strong>
                    <span>CATEGORY: {product.category}</span>
                    <div className="container">
                        <div className="image">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="descrizione">
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            )
                :
                (<p>Loading...</p>)
            }
        </div>
    )
}

export default Prodotto