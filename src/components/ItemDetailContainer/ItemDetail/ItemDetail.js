import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Counter from '../Counter/Counter';

function ItemDetail({ match }) {
	let userID = match.params.id;
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios(`https://api.github.com/users/${userID}`).then((res) =>
			setUsers(res.data)
		);
	}, [userID]);

    return (
        <div>
            {users.map((user) => {
                return (
                    <Card key={user.id}>
                        <Card.Img variant="top" src={user.avatar_url} />
                        <Card.Body>
                            <Card.Title>{user.login}</Card.Title>
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
                                    <Button variant="primary">Comprar</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default ItemDetail;