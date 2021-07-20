import { useState, useEffect } from "react"
import axios from "axios";
import Product from "../components/Product";

function Products(props) {
    let [apiProducts, setApiProducts] = useState([]);

    useEffect(() => {
        leerApi();
    }, [])

    const leerApi = async () => {
        const datos = await fetch("https://fakerapi.it/api/v1/products?")
        const productList = await datos.json()
        console.log(productList.data)
        setApiProducts(productList.data)
    };

    return (
        <div>
            {apiProducts.map((product, index) => <Product key={index} index={index} product={product}></Product>)}

        </div>
    )
}
export default Products