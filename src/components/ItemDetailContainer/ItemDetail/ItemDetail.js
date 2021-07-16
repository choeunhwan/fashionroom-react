import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import useCartContext from '../../../context/CartContext';

const ItemDetail = ({ item }) => {

    // const stocks = item.stock
    // const initial = 1
    // const [add, setAdd] = useState(false)
    // const [quantity, setQuantity] = useState(1)
    // const { addItem } = useCartContext()

    // const itemQuantity = (count) => {
    //     setQuantity(count)
    // }

    // const addToCart = () => {
    //     addItem(item, quantity)
    //     setAdd(true)
    // }

    return (
        <Card style={{ width: '20rem' }} key={item.id}>
            <Card.Img variant="top" src={item.avatar_url} />
            <Card.Body>
                <Card.Title>{item.login}</Card.Title>
                <Card.Text>
                    {item.node_id}
                </Card.Text>
                <Card.Text>
                    $ {item.type}
                </Card.Text>
                <Row>
                    <Col>
                        {/* <ItemCount stocks={stocks}
                            initial={initial}
                            onAdd={itemQuantity} /> */}
                    </Col>
                    <Col>
                        {/* <Button onClick={addToCart}>
                            Agregar Carrito
                        </Button> */}
                        {/* {add ? <Link to= {'/cart'}><Button>Comprar</Button></Link> : null} */}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;