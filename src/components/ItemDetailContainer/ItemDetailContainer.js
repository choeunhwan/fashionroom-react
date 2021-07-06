import React, { useState, useEffect }  from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail/ItemDetail.js';

const ItemDetailContainer = ({ userData }) => {

    return (
        <div>
            <Container className="mt-4">
                <h1>Detalle de Item</h1>
                <ItemDetail userDetail={userData}/>
            </Container>
        </div>
    );
}

export default ItemDetailContainer;