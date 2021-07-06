import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Cart from '../../../views/Cart/Cart';
// import Agregar from '../Agregar/Agregar';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ userDetail }) => {

    const [cart, setCart] = useState ([]);

    const addToCart = (product) => {
        console.log('Agregando')
        setCart([...cart, product]);
    }

    return (
        <Card style={{ width: '20rem' }} key={userDetail.id}>
            <Card.Img variant="top" src={userDetail.avatar_url} />
            <Card.Body>
                <Card.Title>{userDetail.login}</Card.Title>
                <Card.Text>
                    {userDetail.node_id}
                </Card.Text>
                <Card.Text>
                    $ {userDetail.type}
                </Card.Text>
                <Row>
                    <Col>
                        <ItemCount />
                    </Col>
                    <Col>
                        <Button onClick={() => addToCart()}>
                            Agregar a carrito
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;