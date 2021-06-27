import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Item from './Item/Item';

function ItemList({ users }) {

    return (
        <Container>
            {users.map(() => {
                return (
                    <Row md={4}>
                        <Col>
                            <Item users={users} />
                        </Col>
                    </Row>
                );
            })}
        </Container>
    );
}

export default ItemList;