import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import img from './example.jpg';

function ItemListContainer(props) {
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ItemListContainer;