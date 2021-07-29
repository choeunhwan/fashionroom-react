import React, { useState } from 'react';
import { Card, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import useCartContext from '../../../context/CartContext';

const ItemDetail = ({ item }) => {

    return (
        <Row>
            <Col>
                <Card.Img src={item.imageid} />
            </Col>
            <Col>
                <Card className="p-4">
                    <h1>{item.title}</h1>
                    <h2>{item.price}</h2>
                    <p>{item.description}</p>
                    <Row>
                        <Col>
                            <ItemCount />
                        </Col>
                        <Col>
                            <Button>
                                Agregar
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>

    )
}

export default ItemDetail;