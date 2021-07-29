import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemList from './ItemList/ItemList.js';
import { db } from '../../firebase';

const ItemListContainer = () => {

    const [product, setProduct] = useState([])

    const getItems = () => {
        db.collection('items').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setProduct(docs);
        });
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <div>
            <Container className="mt-4">
                <h1>Listado de productos</h1>
                <div className="mt-4">
                    <Row md={4}>
                        {product.map((document) => {
                            return (
                                <ItemList itemList={document} />
                            )
                        })}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ItemListContainer;