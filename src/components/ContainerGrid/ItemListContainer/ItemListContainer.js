import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function ItemListContainer() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://api.github.com/users').then((res) => setUsers(res.data));}, [])

        return (
            <div>

                <div>
                    <h1>ItemListContainer</h1>
                    <ItemDetailContainer users={users} />
                </div>

            </div>
        );
    }

export default ItemListContainer;