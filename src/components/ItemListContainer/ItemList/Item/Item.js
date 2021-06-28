import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ users }) => {
    return (
        <Card style={{ width: '16rem' }} key={users.id}>
            <Card.Img variant="top" src={users.avatar_url} />
            <Card.Body>
                <Card.Title>{users.login}</Card.Title>
                <Card.Text>
                    {users.node_id}
                </Card.Text>
                <Card.Text>
                    $ {users.type}
                </Card.Text>
                <Col>
                    <div>
                        <Link className='btn btn-primary' to={`/productdetail/${users.id}`}>Ver producto</Link>
                    </div>
                </Col>
            </Card.Body>
        </Card>
    );
};

export default Item;