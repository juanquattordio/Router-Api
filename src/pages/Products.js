import { useState, useEffect } from "react"

function Products() {
    let [apiProducts, setApiProducts] = useState("");

    useEffect(() => {
        let axios = require("axios");
        let productsApi = axios("https://fakerapi.it/api/v1/products?")
            .then(res => {
                console.log("OK")
                setApiProducts(res.data)
            })
            .catch(err => {	// catch siempre recibe un error, por si falla la API.
                console.log("Mensaje Error:")
                console.log(err.response.statusText)
            })
        console.log(apiProducts)
    }, [])

    let listProducts = apiProducts.data;

    console.log(listProducts)
    return (
        <div>
            <h1>{apiProducts.code}</h1>
            {listProducts.map((prod) => <p>{prod.name}</p>)}
        </div>
    )
}
export default Products