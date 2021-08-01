import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Formulario = () => {
    return (
        <Container className='mt-4'>
            <Form>
                <h1>Finalizar compra</h1>
                <Row className='mt-4'>
                    <Col>
                        <Form.Control type="name" placeholder="Nombre" required />
                    </Col>
                    <Col>
                        <Form.Control type="name" placeholder="Apellido" required />
                    </Col>
                </Row>
                <Form.Control className='my-4' type="phone" placeholder="Telefono" required />
                <Form.Control className='my-4' type="email" placeholder="Escriba el email" required />
                <Row>
                    <Col>
                        <Link to={'/cart'}>
                            <Button variant="outline-primary" type="submit">
                                Volver atrás
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Button className="float-right" variant="primary" type="submit">
                            Finalizar compra
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Formulario;