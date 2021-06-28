import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

function ProductDetail({ match }) {
    let userID = match.params.id;
    const [user, setUsers] = useState([]);
    useEffect(() => {
        axios(`https://api.github.com/users/${userID}`).then((res) =>
            setUsers(res.data)
        );
    }, [userID]);
    console.log(match)

    return (
        <div>
            <ItemDetailContainer users={user} />
        </div>
    );
}

export default ProductDetail;