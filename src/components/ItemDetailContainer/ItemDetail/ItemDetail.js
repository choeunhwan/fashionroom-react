import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Agregar from '../Agregar/Agregar';
import Counter from '../Counter/Counter';

const ItemDetail = ({ users }) => {

    return (
        <Card key={users.id}>
            <Card.Img variant="top" src={users.avatar_url} />
            <Card.Body>
                <Card.Title>{users.login}</Card.Title>
                <Card.Text>
                    {users.node_id}
                </Card.Text>
                <Card.Text>
                    $ {users.type}
                </Card.Text>
                <Row>
                    <Col>
                        <Counter />
                    </Col>
                    <Col>
                        <Agregar />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;