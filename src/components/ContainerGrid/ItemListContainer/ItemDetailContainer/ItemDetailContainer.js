import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Counter from '../Counter/Counter';

function ItemDetailContainer ({ users }) {

    return (
        <div>
            {users.map((user) => {

                return (
                    <Card style={{ width: '16rem' }} key={user.id}>
                        <Card.Img variant="top" src={user.avatar_url} />
                        <Card.Body>
                            <Card.Title>{user.login}</Card.Title>
                            <Button className="primary button" href={user.html_url}>Ver perfil</Button>
                            <Card.Text>
                                {user.node_id}
                            </Card.Text>
                            <Card.Text>
                                $ {user.type}
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
                );
            })}
        </div>
    );
}

export default ItemDetailContainer;
