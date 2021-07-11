import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemList from './ItemList/ItemList.js';
import { ItemsContext } from '../../context/ItemsContext';


const ItemListContainer = () => {

    const [items] = useContext(ItemsContext);

    return (
        <div>
            <Container className="mt-4">
                <h1>ItemListContainer</h1>
                <Row md={4}>
                    {items.map((item) => {
                        return (
                            <ItemList itemList={item} />
                        )
                    })};
                </Row>
            </Container>
        </div>
    );
}

export default ItemListContainer;