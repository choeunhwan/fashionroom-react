import React, { useContext, useState } from "react";
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './ItemCount.css';
import itemContext from "../../../context/CartContext"

const ItemCount = ({ item, stock }) => {
    const [counter, setCounter] = useState(0);
    const { addItem } = useContext(itemContext);
    const [add, setAdd] = useState(false)
    // console.log (addItem);

    const handleCounterUp = () => {
        counter < stock ? setCounter(counter + 1) : console.log("Stock máximo");
    };

    const handleCounterDown = () => {
        counter > 0 ? setCounter(counter - 1) : console.log("Stock mínimo");
    };

    const onAdd = (quantity) => {
        // console.log (quantity);
        addItem(item, quantity)
        setAdd(true)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md="0">
                        <button className='buttonStyle-plus' primary onClick={handleCounterUp}>+</button>
                    </Col>

                    <Col md="0">
                        <div className='inputStyle'>
                            <span>{counter}</span>
                        </div>
                    </Col>

                    <Col md="0">
                        <button className='buttonStyle-minus' secondary onClick={handleCounterDown}>-</button>
                    </Col>
                    <Col>
                        <Button onClick={() => onAdd(counter)}>
                            Agregar Item
                        </Button>
                    </Col>
                    <Col>
                        {add ? <Link to={'/cart'}><Button>Comprar Ahora</Button></Link> : null}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemCount;