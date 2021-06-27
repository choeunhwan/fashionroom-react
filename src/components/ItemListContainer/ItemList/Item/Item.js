import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

function Item ({ users }) {

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
                                <Button href={user.html_url}>Ver producto</Button>
                            </Col>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}

export default Item;