import { useState, useEffect } from "react"
import axios from "axios";
import Product from "../components/Product";

function Products(props) {
    let [apiProducts, setApiProducts] = useState([]);
    let [apiProductsPartial, setApiProductsPartial] = useState([]);
    const [limit, setLimit] = useState(3); // defino que tenga 3 productos por pagina
    const [initial, setInitial] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const leerApi = async () => {
        const datos = await fetch(`https://fakerapi.it/api/v1/products?_locale=en_EN&_seed=12456`)
        const productList = await datos.json()
        console.log(productList.data)
        let cantidadPaginas = Math.ceil(productList.total / limit)
        console.log("cantidadPaginas: " + cantidadPaginas)
        let productListPartial = apiProducts.slice(initial, limit) // esta es la línea que quiero ejecutar desupés del fetch. Estoy buscando cómo trabajar ocn fetch o axios.
        setApiProducts(productList.data)
        setApiProductsPartial(productListPartial)
    };

    useEffect(() => {
        leerApi();
        console.log("initial: " + initial)
        console.log("Limit: " + limit)
        let productListPartial = apiProducts.slice(initial, limit)
        console.log("Lista parcial ")
        console.log(productListPartial)
        setApiProductsPartial(productListPartial)
    }, [initial, limit])

    // Probando con props, recibe bien la props pero creo que sigue el problema de async
    // useEffect(() => {
    //     console.log("Se vuelve a leer api")
    //     console.log("initial: " + initial)
    //     console.log("Limit: " + limit)
    //     console.log("Lista parcial ")
    //     setApiProductsPartial(props.apiResult.slice(initial, limit))
    // }, [initial, limit])

    const nextPage = () => {
        setInitial(initial + limit)
        setCurrentPage(currentPage + 1)
        // if ((cantidadPaginas - currentPage) > 0) {
        //     setInitial(initial + limit)
        //     setCurrentPage(currentPage + 1)
        // } else return
    }

    const previousPage = () => {
        if (currentPage > 1) {
            setInitial(initial - limit)
        } else return
    }

    return (
        <div className="container">
            {apiProductsPartial.map((product, index) => <Product key={index} index={index} product={product}></Product>)}

            <div>
                <div onClick={nextPage}> Previous Page </div>
                <div onClick={previousPage}> Next Page </div>
            </div>
        </div>

    )
}
export default Products