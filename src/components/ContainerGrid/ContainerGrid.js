import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import ItemListContainer from './ItemListContainer/ItemListContainer';

// import Data de productos

import { itemsList } from './ItemList';

class ContainerGrid extends Component {

    constructor() {
        console.log("Constructor");
        super();

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        setTimeout(() => {
            console.log("ComponentDidMount");
            this.setState({ items: itemsList });
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
                                        // img={ } alt=''
                                        price={item.price}
                                    />
                                </Col>
                                <Col>
                                    <ItemListContainer
                                        title={item.name}
                                        description={item.category}
                                        // img={ } alt=''
                                        price={item.price}
                                    />
                                </Col>
                                <Col>
                                    <ItemListContainer
                                        title={item.name}
                                        description={item.category}
                                        // img={ } alt=''
                                        price={item.price}
                                    />
                                </Col>
                                <Col>
                                    <ItemListContainer
                                        title={item.name}
                                        description={item.category}
                                        // img={ } alt=''
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

export default ContainerGrid;