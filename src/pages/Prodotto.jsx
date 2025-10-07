// importo l'hook per poter leggere il parametro
import { useParams } from "react-router-dom";

const Prodotto = () => {

    // recupero il parametro dinamico id
    const { id } = useParams();

    return (
        <>
            <h2>Sezione dettaglio Prodotto</h2>
            <h3>ID prodotto: {id}</h3>
        </>
    )
}

export default Prodotto