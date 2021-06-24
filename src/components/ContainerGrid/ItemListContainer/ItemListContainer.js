import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard/ItemCard';

import { Link } from 'react-router-dom';

function ItemListContainer() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://api.github.com/users').then((res) => setUsers(res.data));
    }, []);

    return (
        <div>

            <div key={users.id}>
                <Link to={`/details/${users.id}`}></Link>
                <ItemCard data={users} />
            </div>

        </div>
    );
}

export default ItemListContainer;