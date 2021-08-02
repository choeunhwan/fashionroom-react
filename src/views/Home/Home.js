import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import image1 from '../Home/zara_slide3.jpg';
import image2 from '../Home/zara_slide4.jpg';
import image3 from '../Home/zara_slide5.jpg';

function Home() {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ItemListContainer />
        </Container>
    );
}

export default Home;
