import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ itemDetail }) => {
    return (
        <Card style={{ width: '16rem' }} key={itemDetail.id}>
            <Card.Img variant="top" src={itemDetail.avatar_url} />
            <Card.Body>
                <Card.Title>{itemDetail.login}</Card.Title>
                <Card.Text>
                    {itemDetail.node_id}
                </Card.Text>
                <Card.Text>
                    $ {itemDetail.type}
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