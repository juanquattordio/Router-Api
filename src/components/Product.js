import { Carousel } from "bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'


function Product(props) {
    const product = props.product;
    // const index = props.index;
    return (
        <div>
            <Row>
                <p>El nombre es: {product.name}</p>
                {product.images.map((image, index) =>
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image.url} fluid />
                        <Card.Body>
                            <Card.Title>{image.title}</Card.Title>
                            <Card.Text>
                                {image.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    // <Col key={index} className="col-4">
                    //     <Image src={image.url} fluid />
                    //     <p>{image.title}</p>
                    //     <p>{image.description}</p>
                    // </Col>
                )}
            </Row>

        </div>
    )
}
export default Product