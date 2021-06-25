import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import ItemListContainer from '../ItemListContainer';

// import Data de productos

import { ItemData } from './ItemData';

class ItemList extends Component {

    constructor() {
        super();

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ items: ItemData });
        }, 200);
    }

    render() {
        console.log(this.state.items);
        return (
            <div>
                <Container className="mt-4">
                    {this.state.items.map((item) => {
                        return (
                            <Row md={4} key={item.id}>
                                <Col>
                                    <ItemListContainer
                                        title={item.name}
                                        description={item.category}
                                        price={item.price}
                                    />
                                </Col>
                                <Col>
                                    <ItemListContainer
                                        title={item.name}
                                        description={item.category}
                                        price={item.price}
                                    />
                                </Col>
                                <Col>
                                    <ItemListContainer
                                        title={item.name}
                                        description={item.category}
                                        price={item.price}
                                    />
                                </Col>
                                <Col>
                                    <ItemListContainer
                                        title={item.name}
                                        description={item.category}
                                        price={item.price}
                                    />
                                </Col>

                            </Row>
                        );
                    })}
                </Container>
            </div>
        )
    }
}

export default ItemList;