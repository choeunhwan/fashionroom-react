import React, { useState } from "react";
import { Col, Container, Row, Form } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ stocks, initial}) => {

  const [count, setCount] = useState(initial);
  const [message, setMessage] = useState("");

  const handleCounterUp = () => {
    if (count < stocks) {
      setCount(count + 1);
      setMessage(null);
    } else {
      setMessage("Limite de stock 10");
    }
  }

  const handleCounterDown = () => {
    if (count > initial) {
      setCount(count - 1);
      setMessage(null);
    } else {
      setMessage("Minima compra 1");
    }
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="0">
            <button className='buttonStyle-plus' primary onClick={handleCounterUp} disabled={count === initial}>+</button>
          </Col>

          <Col md="0">
            <div className='inputStyle'>
              <span>{count}</span>
            </div>
          </Col>

          <Col md="0">
            <button className='buttonStyle-minus' secondary onClick={handleCounterDown} disabled={count === stocks}>-</button>
          </Col>
        </Row>
        <p>Unidades Disponibles: {stocks - count}</p>
        <Form.Text className='text-danger'>{message}</Form.Text>
      </Container>
    </div>
  )
}

export default ItemCount;