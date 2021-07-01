import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Item from '../../Item/Item';

function ItemList(items) {

    return (
        <Container>
            <Row md={4} key={items.id}>
                {this.state.map((items) => {
                    console.log('id', items.id);
                    return (
                        <div key={items.id}>
                            <Item items={items} />
                        </div>
                    );
                })}
            </Row>
        </Container>
    );
}

export default ItemList;