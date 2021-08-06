import React from 'react';
import { Container } from 'react-bootstrap';
import Item from './Item/Item';


const ItemList = ({ itemList }) => {

    return (
        <Container>
            <div className="my-2">
                <Item itemDetail={itemList} />
            </div>
        </Container>
    )
}

export default ItemList;