import { useState } from 'react';
import { Container, Col, Row, Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import useCartContext from '../../context/CartContext'

const Cart = () => {
    // const { items, removeItem, totalItemsPrice, clean } = useCartContext()
    const [active, setActive] = useState(false);

    return (
        <Container>
            <h1>Carrito de Compra</h1>
            <Row>
                <Col sm={8}>
                    <Row>
                        {active ?
                        <h3>Lleno</h3>
                        :
                        <h1>Carrito Vacio</h1>}
                    </Row>
                </Col>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Subtotal de Carrito</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                        <Card.Body>
                            <Card.Title>Total $: </Card.Title>
                            <Button>Checkout</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart;