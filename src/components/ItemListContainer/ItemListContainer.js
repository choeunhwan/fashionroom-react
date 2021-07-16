import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemList from './ItemList/ItemList.js';
// import { ItemsContext } from '../../context/ItemsContext';
import firebase from 'firebase';
import { firebaseConfig } from './database/firebase';

const db = firebase.initializeApp(firebaseConfig);

const ItemListContainer = () => {

    state = {
        items: []
    }

    componentDiMount() { this.getItems () }

    // const [items] = useContext(ItemsContext);

    async getItems(){
        let item = [];
        const response = await db.firebase().collection('item').get();
        response.forEach( document => {
            let id = document.id;
            let title = document.data().title;
            let description = document.data().description;
            let imageid = document.data().imageid;
            let price = document.data().price;
            let stock = document.data().stock;
            list.push(obj);
        })
        this.state ({ items:item })
    }

    return (
        <div>
            <Container className="mt-4">
                <h1>ItemListContainer</h1>
                <Row md={4}>
                    {items.map((document) => {
                        return (
                            <ItemList itemList={document} />
                        )
                    })};
                </Row>
            </Container>
        </div>
    );
}

export default ItemListContainer;