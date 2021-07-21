import { useState, useEffect } from "react"
import axios from "axios";
import Product from "../components/Product";

function Products(props) {
    let [apiProducts, setApiProducts] = useState([]);
    let [apiProductsPartial, setApiProductsPartial] = useState([]);
    const [limit, setLimit] = useState(3);
    const [initial, setInitial] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        leerApi();
    }, [initial, limit])

    const leerApi = async () => {
        const datos = await fetch(`https://fakerapi.it/api/v1/products?_locale=en_EN&_seed=12456`)
        const productList = await datos.json()
        console.log(productList.data)
        let cantidadPaginas = Math.ceil(productList.total / limit)
        console.log("cantidadPaginas: " + cantidadPaginas)
        let productListPartial = productList.data.slice(initial, limit)
        console.log("Lista parcial " + productListPartial[0].name)
        setApiProducts(productList.data)
        setApiProductsPartial(productListPartial)

    };
    const nextPage = () => {
        setInitial(initial + limit)
    }

    const previousPage = () => {
        setInitial(initial - limit)
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