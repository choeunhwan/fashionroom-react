import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

function ProductDetail({ match }) {
    let itemID = match.params.id;
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios(`https://api.github.com/users/${itemID}`).then((res) =>
            setItems(res.data)
        );
    }, [itemID]);
    console.log(match)

    return (
        <div>
            <ItemDetailContainer itemData={items} />
        </div>
    );
}

export default ProductDetail;