import React from 'react';
import { Container } from 'react-bootstrap';
import Item from './Item/Item';


const ItemList = ({ itemList }) => {

    return (
        <Container>
            <Item itemDetail={itemList} />
        </Container>
    )
}

export default ItemList;