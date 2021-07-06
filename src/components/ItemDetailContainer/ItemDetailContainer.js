import React from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail/ItemDetail.js';

const ItemDetailContainer = ({ userData }) => {

    return (
        <div>
            <Container>
                <h1>Detalle de Producto</h1>
                <ItemDetail userDetail={userData} />
            </Container>
        </div>
    )
}

export default ItemDetailContainer;