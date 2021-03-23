import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cityImg from '../assets/1.jpg';
import cityImg2 from '../assets/2.jpg'
import cityImg3 from '../assets/3.jpg'
export default class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cityImg}
                            alt="city"
                        />
                        <Carousel.Caption>
                            <h3>City image</h3>
                            <p>Text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cityImg2}
                            alt="city"
                        />
                        <Carousel.Caption>
                            <h3>City image</h3>
                            <p>Text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cityImg3}
                            alt="city"
                        />
                        <Carousel.Caption>
                            <h3>City image</h3>
                            <p>Text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
