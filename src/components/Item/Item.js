import React, { Component } from 'react'
import { Col, Card, Button, Row } from 'react-bootstrap';
import Counter from '../Item/Counter/Counter';

class Item extends Component {
    render() {
        return (
            <div>
                {this.state.items.map((items) => {
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Card.Title>{items.name}</Card.Title>
                            <Card.Text>
                                {items.category}
                            </Card.Text>
                            <Card.Text>
                                $ {items.price}
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
                })};
            </div>
        )
    }
}
export default Item;