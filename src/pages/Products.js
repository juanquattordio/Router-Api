import { useState, useEffect } from "react"
import axios from "axios";
import Product from "../components/Product";

function Products(props) {

    let pageSize = 3;
    let [apiProducts, setApiProducts] = useState([]);
    let [apiProductsPartial, setApiProductsPartial] = useState([]);
    const [limit, setLimit] = useState(pageSize); // defino que tenga 3 productos por pagina
    const [initial, setInitial] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    const leerApi = async () => {
        axios.get(`https://fakerapi.it/api/v1/products?_locale=en_EN&_seed=12456`)
            .then(res => {
                const productList = res.data;
                setApiProducts(productList.data);
                console.log(productList.data)
                //cantidadPaginas = Math.ceil(productList.total / limit)
                // console.log("cantidadPaginas: " + cantidadPaginas)
                let productListPartial = productList.data;
                // if (currentPage < (cantidadPaginas))
                productListPartial = productListPartial.slice(initial, limit) // esta es la línea que quiero ejecutar desupés del fetch. Estoy buscando cómo trabajar ocn fetch o axios.
                console.log(productListPartial)
                setApiProductsPartial(productListPartial)
            })
    };

    const cantidadPaginas = Math.ceil(apiProducts.length / pageSize);
    console.log("cantidadPaginas: " + cantidadPaginas)

    useEffect(() => {
        leerApi();
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
        if ((cantidadPaginas - currentPage) > 0) {
            setInitial(initial + limit)
            setLimit(limit + limit)
            setCurrentPage(currentPage + 1)
        } else return
    }

    const previousPage = () => {
        alert("previous")
        if ({ currentPage } > 1) {
            setInitial(initial - limit)
        } else return
    }

    return (
        <div className="container">
            {apiProductsPartial.map((product, index) => <Product key={index} index={index} product={product}></Product>)}
            <div onClick={previousPage}> Previous Page </div>
            <div onClick={nextPage}> Next Page </div>
        </div>

    )
}
export default Products