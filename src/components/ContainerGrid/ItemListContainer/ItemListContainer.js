import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Counter from './Counter/Counter';

const ItemListContainer = ({ title, description, img }) => {

    return (
        <div>

            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" /> {img}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
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

        </div>
    )
}

export default ItemListContainer;