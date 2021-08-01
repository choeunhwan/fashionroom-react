import { useContext } from 'react';
import { Container, Col, Row, Card, ListGroup, Button, Alert } from 'react-bootstrap';
import CartList from '../../components/CartList/CartList';
import itemContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';

const Cart = () => {
    const addOrEdit = () => {
        console.log('nuevo ORDER agregado');
    }

    const { items, totalitemsPrice } = useContext(itemContext);

    return (
        <Container>
            <h1 className='mt-4'>Carrito de Compra</h1>
            <Container>
                <Row>
                    <Col sm={8}>
                        <Row>
                            {
                                items.length > 0
                                    ?
                                    <CartList />
                                    :
                                    <>
                                        <Alert className='mt-2' variant='secondary'>Tu carrito de compra está vacio
                                            <Link to={'/productlist'}>
                                                <Button className='ml-3'>
                                                    Ir al catálogo
                                                </Button>
                                            </Link>
                                        </Alert>
                                    </>
                            }
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <ListGroup className="list-group-flush">
                            </ListGroup>
                            <Card.Body>
                                <Card.Title>Total</Card.Title>
                                {
                                    items.length > 0
                                        ?
                                        <>
                                            <h2>$ {totalitemsPrice(items)}</h2>
                                            <Link to="/checkout">
                                                <Button>Checkout</Button>
                                            </Link>
                                        </>
                                        :
                                        <>
                                            <Link to="/checkout" addOrEdit={addOrEdit}>
                                                <Button disabled>Checkout</Button>
                                            </Link>
                                        </>
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Cart;