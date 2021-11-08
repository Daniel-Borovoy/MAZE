import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import cityImg from '../img/1.jpg'
import cityImg2 from '../img/2.jpg'
import cityImg3 from '../img/3.jpg'

export class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel className="">
          <Carousel.Item>
            <img className="d-block w-100" src={cityImg} alt="city" />
            <Carousel.Caption>
              <h3>City image</h3>
              <p>Text</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cityImg2} alt="city" />
            <Carousel.Caption>
              <h3>City image</h3>
              <p>Text</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cityImg3} alt="city" />
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
