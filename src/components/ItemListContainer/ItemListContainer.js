import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList';
import { ItemData } from "./ItemList/ItemData";

class ItemListContainer extends Component {

    constructor() {
        console.log('constructor');
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                console.log ('componentDidMount');
                resolve ("¡Éxito!");
                this.setState({ items: ItemData });
            }, 2000);
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
                <Container className="mt-4">
                    <h1>ItemListContainer</h1>
                    {this.state.items.map((itemList) => {
                        return (
                            <ItemList item={itemList} />
                        )
                    })}
                </Container>
            </div>
        )
    }
}

export default ItemListContainer;