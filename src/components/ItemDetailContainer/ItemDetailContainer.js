import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail/ItemDetail.js';

function ItemListContainer() {

    return (
        <div>
            <Container className="mt-4">
                <h1>Detalle de Item</h1>
                <ItemDetail />
            </Container>
        </div>
    );
}

export default ItemListContainer;

