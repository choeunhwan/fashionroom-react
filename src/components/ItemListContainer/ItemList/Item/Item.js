import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ itemDetail }) => {
    return (
        <Card style={{ width: '16rem' }} key={itemDetail.id}>
            <Card.Img variant="top" src={itemDetail.imageid} />
            <Card.Body>
                <Card.Title>{itemDetail.title}</Card.Title>
                <Card.Text>
                    {itemDetail.description}
                </Card.Text>
                <Card.Text>
                    $ {itemDetail.price}
                </Card.Text>
                <Col>
                    <div>
                        <Link className='btn btn-primary' to={`/productdetail/${itemDetail.id}`}>Ver producto</Link>
                    </div>
                </Col>
            </Card.Body>
        </Card>
    );
};

export default Item;