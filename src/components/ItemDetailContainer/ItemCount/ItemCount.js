import React from 'react';
import { Container, Col, Row, Form } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = () => {

    const [count, setCount] = React.useState(1);
    const [message, setMessage] = React.useState("");

    const handleCounterUp = () => {
        if (count < 10) {
          setCount(count + 1);
          setMessage(null);
        } else {
          setMessage("Limite de stock 10");
        }
      }
    
      const handleCounterDown = () => {
        if (count > 1) {
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
                            <button className='buttonStyle-plus' primary onClick={handleCounterUp}>
                                +
                            </button>
                        </Col>

                        <Col md="0">
                            <div className='inputStyle'>
                                <span>{count}</span>
                            </div>
                        </Col>

                        <Col md="0">
                            <button className='buttonStyle-minus' secondary onClick={handleCounterDown}>
                                -
                            </button>
                        </Col>
                    </Row>
                </Container>
                <Form.Text className='text-danger'>{message}</Form.Text>
            </div>
        )
}

export default ItemCount;