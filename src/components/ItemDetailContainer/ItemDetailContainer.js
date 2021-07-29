import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail';
import { db } from '../../firebase'
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    
    const {productId} = useParams();
    
    useEffect(() => {
        const getItem = db.collection("items").doc(productId)
        getItem.get().then((querySnapshot) => {
            setItem({id:querySnapshot.id, ...querySnapshot.data()})
            setLoading(false) 
        })
        .catch((e) => {console.log(e)})
    }, [productId])

    return (
        <Container>
            {loading ? "Cargando Información..." :
                <div className="mt-4">
                    <ItemDetail item={document} />
                </div>
            }
        </Container>
    )
}

export default ItemDetailContainer;