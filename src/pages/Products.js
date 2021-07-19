import { useState, useEffect } from "react"

function Products() {
    let [apiProducts, setApiProducts] = useState("");

    useEffect(() => {
        let axios = require("axios");
        let productsApi = axios("https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid")
            .then(res => {
                console.log("OK")
                setApiProducts(res.data)
                // console.log(res.data.data)
            })
            .catch(err => {	// catch siempre recibe un error, por si falla la API.
                console.log("Mensaje Error:")
                console.log(err.response.statusText)
            })

        // let [apiProducts, setApiProducts] = useState(res.data.data);

        console.log(apiProducts)
    }, [])


    return (
        <h1>{apiProducts.code}</h1>
    )
}
export default Products