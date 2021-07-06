import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Item from '../../Item/Item';

const ItemList = ({ item }) => {

    return (
        <Container>
            <Row md={4}>
                <div key={item.id}>
                    <Item data={item} />
                </div>
            </Row>
        </Container>
    );
}

export default ItemList;