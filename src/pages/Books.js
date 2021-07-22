import { useState, useEffect } from "react"
import axios from "axios";
import { Container, Table, Image } from "react-bootstrap";

function Books(props) {

    let [apiProducts, setApiProducts] = useState([]);

    const leerApi = async () => {
        axios.get(`https://fakerapi.it/api/v1/books?_locale=en_EN&_seed=12456`)
            .then(res => {
                const productList = res.data;
                setApiProducts(productList.data);
                console.log(productList.data)
                // let productListPartial = productList.data;
                // console.log("Initial: " + initial + " Limit: " + limit)
                // productListPartial = productListPartial.slice(initial, limit)
                // console.log(productListPartial)
                // setApiProductsPartial(productListPartial)
            })
    };

    useEffect(() => {
        leerApi();
    }, [])

    return (
        <Container className="pt-5">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th id="tableDescrip">Description</th>
                        <th>ISBN</th>
                        {/* <th>Image</th> */}
                        <th>Published</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {apiProducts.map((product, index) =>
                        <tr key={index}>
                            <td>
                                <div className="d-flex flex-column text-center">
                                    <div>
                                        <img src={product.image} className="p-1"></img>
                                    </div>
                                    <td>{product.title}</td>
                                </div>
                            </td>
                            <td>{product.author}</td>
                            <td>{product.genre}</td>
                            <td>{product.description}</td>
                            <td>{product.isbn}</td>

                            <td>{product.published}</td>
                            <td>{product.publisher}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container >
    )
}
export default Books