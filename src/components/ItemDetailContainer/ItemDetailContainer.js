import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail';
import { db } from '../../firebase'
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    const { productId } = useParams();
    // console.log(productId, 'productID');

    useEffect(() => {
        db.collection('items').doc(productId).get()
            .then(res => {
                setItem({
                    id: res.id,
                    ...res.data()
                })
            })
    }, [productId])

    console.log(item, 'Detalle de producto');

    return (
        <Container>
                <div className="mt-4">
                    <ItemDetail item={item} />
                </div>
        </Container>
    )
}

export default ItemDetailContainer;