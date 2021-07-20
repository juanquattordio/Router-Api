import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap"

function Navigation() {
    return (
        <>
            <Navbar expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Book-Caffe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="container justify-content-between">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/books">Books</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                    </Nav>
                    <Form className="d-flex ">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )

}
export default Navigation