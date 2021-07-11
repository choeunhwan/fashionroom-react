import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
// import Agregar from '../Agregar/Agregar';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ itemDataDetail }) => {
    return (
        <Card style={{ width: '20rem' }} key={itemDataDetail.id}>
            <Card.Img variant="top" src={itemDataDetail.avatar_url} />
            <Card.Body>
                <Card.Title>{itemDataDetail.login}</Card.Title>
                <Card.Text>
                    {itemDataDetail.node_id}
                </Card.Text>
                <Card.Text>
                    $ {itemDataDetail.type}
                </Card.Text>
                <Row>
                    <Col>
                        <ItemCount />
                    </Col>
                    <Col>
                        <Button>
                            Comprar
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;