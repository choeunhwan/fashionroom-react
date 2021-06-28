import React from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList.js';


function ItemListContainer() {

    return (
        <div>
            <Container className="mt-4">
                <h1>ItemListContainer</h1>
                <ItemList />
            </Container>
        </div>
    );
}

export default ItemListContainer;