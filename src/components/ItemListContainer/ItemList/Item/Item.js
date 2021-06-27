import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ users }) {

    return (
        <div>
            {users.map((user) => {

                return (
                    <Card style={{ width: '16rem' }} key={user.id}>
                        <Card.Img variant="top" src={user.avatar_url} />
                        <Card.Body>
                            <Card.Title>{user.login}</Card.Title>
                            <Card.Text>
                                {user.node_id}
                            </Card.Text>
                            <Card.Text>
                                $ {user.type}
                            </Card.Text>
                            <Col>
                                <div>
                                    <Link className='btn btn-primary' to={`/productdetail/${user.id}`}>Ver producto</Link>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}

export default Item;