import React, { useState, useContext, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { db } from '../../firebase';
import itemContext from '../../context/CartContext';
import '@firebase/firestore';

const Formulario = () => {

    //Items//
    const { items, totalitemsPrice } = useContext(itemContext);
    const [cartItems, setCartItems] = useState([]);

    const getItems = function (data) {
        setCartItems(data);
    }

    useEffect(() => {
        getItems(items);
    }, [items]);

    //Order in firebase//
    const addOrderData = async (buyer) => {

        console.log(buyer);
        await db.collection('order').doc().set(buyer);
        console.log('Nuevo Order Agregado!');
        // const newOrder = { date: db().firestore.Timestamp.fromDate(new Date())};
        // const newOrder = {
        //     buyer,
        //     products,
        //     total: totalitemsPrice()
        // }
        // console.log(newOrder, 'buyer&items');
    }

    const initialState = {
        nombre: ' ',
        apellido: ' ',
        telefono: ' ',
        email: ' ',
        products: [{ items }],
        total: totalitemsPrice(),
    };

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setValues({ ...values, [name]: value })
    };

    const handleOnSubmit = (e) => {
        console.log(values);
        e.preventDefault();
        addOrderData(values);
    };

    const disabled = !(
        values.email.length &&
        values.nombre.length &&
        values.apellido.length &&
        values.telefono.length > 0
    )

    return (
        <Container className='mt-4'>
            <Form>
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
                        <Link to={'/cart'}>
                            <Button disabled={disabled} onClick={handleOnSubmit} className="float-right" variant="primary" type="submit">
                                Finalizar compra
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </Container >
    )
}

export default Formulario;