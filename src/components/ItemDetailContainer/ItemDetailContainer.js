import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail/ItemDetail.js';

function ItemDetailContainer() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://api.github.com/users').then((res) => {
            setUsers(res.data);
        });
    }, []);

    return (
        <div>
            {users.map((user) => {
                console.log('id', user.id);
                return (
                    <Container className="mt-4">
                        <h1>Detalle de Item</h1>
                        <div key={user.id}>
                            <ItemDetail users={user} />
                        </div>
                    </Container>
                );
            })}
        </div>
    );
}

export default ItemDetailContainer;