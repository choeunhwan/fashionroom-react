import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { db } from '../../firebase';

const Formulario = () => {

    const addOrderData = async (order) => {
        console.log(order);
        await db.collection('order').doc().set(order);
        console.log('Nuevo Order Agregado!');
        const newOrder = { date: db().firestore.Timestamp.fromDate(new Date())};
        console.log(newOrder);
    }

    const initialState = {
        nombre: ' ',
        apellido: ' ',
        telefono: ' ',
        email: ' ',
    };

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setValues({ ...values, [name]: value })
    };

    const handleOnSubmit = (e) => {
        console.log(values);
        e.preventDefault();
        addOrderData(values);
    };

    return (
        <Container className='mt-4'>
            <Form onSubmit={handleOnSubmit}>
                <h1>Finalizar compra</h1>
                <Row className='mt-4'>
                    <Col>Nombre
                        <Form.Control
                            onChange={handleOnChange}
                            type='text'
                            name='nombre'
                            placeholder="Nombre"
                            value={values.nombre}
                        />
                    </Col>
                    <Col>Apellido
                        <Form.Control
                            onChange={handleOnChange}
                            type='text'
                            name='apellido'
                            placeholder="Apellido"
                            value={values.apellido}
                        />
                    </Col>
                </Row>
                <Form.Control
                    className='my-4'
                    onChange={handleOnChange}
                    type='number'
                    name='telefono'
                    placeholder="Telefono"
                    value={values.telefono}
                />
                <Form.Control
                    className='my-4'
                    onChange={handleOnChange}
                    type='email' name='email'
                    placeholder="Escriba el email"
                    value={values.email}
                />
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