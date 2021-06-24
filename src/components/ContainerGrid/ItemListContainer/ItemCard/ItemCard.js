import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Counter from '../Counter/Counter';

const ItemCard = ({ data }) => {

    return (
        <Card style={{ width: '16rem' }} key={data.id}>
            <Card.Img variant="top" src={data.avatar_url} />
            <Card.Body>
                <Card.Title>{data.login}</Card.Title>
                <Card.Text>
                    {data.node_id}
                </Card.Text>
                <Card.Text>
                    $ {data.type}
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
    );
}

export default ItemCard;
