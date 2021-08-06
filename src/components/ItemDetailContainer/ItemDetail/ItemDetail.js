import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {

    return (
        <Row>
            <Col>
                <Card.Img src={item.imageid} />
            </Col>
            <Col>
                <Card className="p-4">
                    <h1>{item.title}</h1>
                    <h2>$ {item.price}</h2>
                    <p>{item.description}</p>
                    <Row>
                        <Col>
                            <ItemCount
                            stock={item.stock}
                            item={item}
                            />
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>

    )
}

export default ItemDetail;