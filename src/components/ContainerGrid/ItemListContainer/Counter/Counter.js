import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Counter.css';

class Counter extends Component {

    constructor() {
        super();

        this.state = {
            count: 1,
        };
    }

    handleCounterUp = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleCounterDown = () => {
        this.setState({ count: this.state.count - 1 });
    };


    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="0">
                            <button className='buttonStyle-plus' primary onClick={this.handleCounterUp}>
                                +
                            </button>
                        </Col>

                        <Col md="0">
                            <div className='inputStyle'>
                                <span>{this.state.count}</span>
                            </div>
                        </Col>

                        <Col md="0">
                            <button className='buttonStyle-minus' secondary onClick={this.handleCounterDown}>
                                -
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Counter;