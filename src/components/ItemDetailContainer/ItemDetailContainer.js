import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail/ItemDetail';


function ItemListContainer() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://api.github.com/users').then((res) => setUsers(res.data));
    }, [])

    return (
        <div>
            <Container className="mt-4">
                <h1>Detalle de Item</h1>
                <ItemDetail users={users} />
            </Container>
        </div>
    );
}

export default ItemListContainer;
