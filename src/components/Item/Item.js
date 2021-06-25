import React, { Component } from 'react'
import { Col } from 'react-bootstrap';

//detalle de Producto
class Item extends Component {
    render() {
        return (
            <div>
                {this.state.items.map((item) => {
                    <Card style={{ width: '16rem' }}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.category}
                            </Card.Text>
                            <Card.Text>
                                $ {item.price}
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