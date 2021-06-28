import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Container } from 'react-bootstrap';
import Item from './Item/Item';


function ItemList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://api.github.com/users').then((res) =>
            setUsers(res.data));
    }, [])

    return (
        <Container>
            <Row md={4}>
                {users.map((user) => {
                    console.log('id', user.id);
                    return (
                        <div key={user.id}>
                            <Item users={user} />
                        </div>
                    );
                })}
            </Row>
        </Container>
    );
}

export default ItemList;