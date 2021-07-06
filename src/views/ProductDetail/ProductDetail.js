import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

function ProductDetail({ match }) {
    let userID = match.params.id;
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios(`https://api.github.com/users/${userID}`).then((res) =>
            setUser(res.data)
        );
    }, [userID]);
    console.log(match)

    return (
        <div>
            <ItemDetailContainer userData={user} />
        </div>
    );
}

export default ProductDetail;