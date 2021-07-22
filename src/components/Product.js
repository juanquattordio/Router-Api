import { Carousel } from "bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'


function Product(props) {
    const product = props.product;
    // const index = props.index;
    return (
        <div>
            <Row className="justify-content-center container mt-4 d-flex">
                <Card.Title>{product.name}</Card.Title>
                {product.images.map((image, index) =>
                    <Card bg="light" text="dark" key={index} style={{ width: '18rem', margin: "0.1rem" }}>
                        <Card.Img variant="top" src={image.url} className="mt-2" />
                        <Card.Body>
                            <Card.Title>{image.title}</Card.Title>
                            <Card.Text>
                                {image.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                )}
            </Row>

        </div>
    )
}
export default Product