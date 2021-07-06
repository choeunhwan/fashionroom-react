import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Agregar from '../Agregar/Agregar';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ userDetail }) => {

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
                        <Agregar />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;