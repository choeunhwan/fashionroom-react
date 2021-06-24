import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Counter from '../../components/ContainerGrid/ItemListContainer/Counter/Counter';

function ProductoDetail({ match }) {

    let userID = match.params.id;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios(`https://api.github.com/users/${userID}`).then((res) =>

            setProduct(res.data)
        );
    }, [userID]);

    return (
        <div style={{ padding: 40 }}>
            <h1>Product Detail</h1>
            {product.map((users) => {
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

export default ProductoDetail;