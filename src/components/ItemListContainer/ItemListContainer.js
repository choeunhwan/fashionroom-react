import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList';
import { ItemData } from "./ItemList/ItemData";

class ItemListContainer extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ items: ItemData });
            }, 2000);
        });
    }

    render() {
        return (
            <div>
                {this.state.items.map((items) => {
                    <div>
                        <Container className="mt-4">
                            <h1>ItemListContainer</h1>
                            <ItemList
                                key={items.id}
                                title={items.name}
                                description={items.category}
                                price={items.price}
                            />
                        </Container>
                    </div>
                })};
            </div>
        )
    }
}

export default ItemListContainer;