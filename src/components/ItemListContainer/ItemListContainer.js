import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Counter from './Counter/Counter';

const ItemListContainer = ({ title, description, price }) => {

    return (
        <div>

            <Card style={{ width: '16rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                    <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ItemListContainer;