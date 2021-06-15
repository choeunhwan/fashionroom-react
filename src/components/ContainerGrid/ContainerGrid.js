import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import ItemListContainer from './ItemListContainer/ItemListContainer';

class ContainerGrid extends Component {
    render() {
        return (
            <div>
                <Container className="mt-4">
                    <Row md={4}>
                        <Col>
                            <ItemListContainer
                                title={'Trainers with trims'}
                                description={'Trainers in several colours, with multi-piece details and a perforated toecap. Lace-up fastening.'}
                                img src={require('../HeaderNavbar/example.jpg')} alt=''
                            />
                        </Col>
                        <Col>
                            <ItemListContainer
                                title={'Trainers with trims'}
                                description={'Trainers in several colours, with multi-piece details and a perforated toecap. Lace-up fastening.'}
                                img src={require('../HeaderNavbar/example.jpg')} alt=''
                            />
                        </Col>
                        <Col>
                            <ItemListContainer
                                title={'Trainers with trims'}
                                description={'Trainers in several colours, with multi-piece details and a perforated toecap. Lace-up fastening.'}
                                img src={require('../HeaderNavbar/example.jpg')} alt=''
                            />
                        </Col>
                        <Col>
                            <ItemListContainer
                                title={'Trainers with trims'}
                                description={'Trainers in several colours, with multi-piece details and a perforated toecap. Lace-up fastening.'}
                                img src={require('../HeaderNavbar/example.jpg')} alt=''
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ContainerGrid;