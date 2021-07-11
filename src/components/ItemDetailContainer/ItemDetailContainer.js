import React from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail/ItemDetail.js';

const ItemDetailContainer = ({ itemData }) => {

    return (
        <div>
            <Container className="mt-4">
                <h1>{itemData.node_id}</h1>
                <ItemDetail itemDataDetail={itemData}/>
            </Container>
        </div>
    );
}

export default ItemDetailContainer;