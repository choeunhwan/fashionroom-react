import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Counter from '../Counter/Counter';

const ItemDetail = ({ userDetail }) => {
    return (
        <Card key={userDetail.id}>
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
                        <Counter />
                    </Col>
                    <Col>
                        <Button variant="primary">Comprar</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>       
    )
}

export default ItemDetail;