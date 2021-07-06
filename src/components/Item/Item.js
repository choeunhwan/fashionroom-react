import React, { Component } from 'react'
import { Col, Card, Button, Row } from 'react-bootstrap';
import Counter from '../Item/Counter/Counter';

const Item = ({ data }) => {

    return (
        <Card style={{ width: '16rem' }} key={data.id}>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {data.category}
                </Card.Text>
                <Card.Text>
                    $ {data.price}
                </Card.Text>
                <Row>
                    <Col>
                        <Counter />
                    </Col>
                    <Col>
                        <Button variant="primary">Agregar</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}


export default Item;