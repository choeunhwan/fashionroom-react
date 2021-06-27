import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Item from './Item/Item';

function ItemList({ users }) {

    return (
        <Container>
            <Row md={4}>
                {users.map(() => {
                    return (
                        <Item users={users} />
                    );
                })}
            </Row>
        </Container>
    );
}

export default ItemList;