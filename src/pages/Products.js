import { useState, useEffect } from "react"
import axios from "axios";
import Product from "../components/Product";
import { Button } from "react-bootstrap";

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
                let productListPartial = productList.data;
                console.log("Initial: " + initial + " Limit: " + limit)
                productListPartial = productListPartial.slice(initial, limit)
                console.log(productListPartial)
                setApiProductsPartial(productListPartial)
            })
    };

    const cantidadPaginas = Math.ceil(apiProducts.length / pageSize);
    console.log("cantidadPaginas: " + cantidadPaginas)

    useEffect(() => {
        leerApi();
    }, [initial, limit])

    const nextPage = () => {
        if (cantidadPaginas > currentPage) {
            let newInitial = initial + pageSize
            setInitial(newInitial)
            setLimit(newInitial + pageSize)
            setCurrentPage(currentPage + 1)
        } else {
            setInitial(limit)
            setLimit(apiProducts.length)
        }
    }
    const previousPage = () => {
        if (currentPage > 1) {
            setLimit(initial)
            let newInitial = initial - pageSize
            setInitial(newInitial)
            setCurrentPage(currentPage - 1)
        } else return
    }

    return (
        <div className="container ">
            {apiProductsPartial.map((product, index) => <Product key={index} index={index} product={product}></Product>)}

            <div className="Pagination">
                <Button variant="primary" onClick={previousPage}>previous page</Button>
                <span>page {currentPage} of {cantidadPaginas}</span>
                <Button variant="primary" onClick={nextPage} >next page</Button>
            </div>
        </div>

    )
}
export default Products