import { Carousel } from 'bootstrap'
import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import CarouselBox from '../assets/CarouselBox'
import Img from '../assets/1.jpg'
export default class Home extends Component {
    render() {
        return (
        <>
            <Container>
                <Row>
                <img
                className="d-block col-6"
                src={Img}
                width= "30%"
                />
                <h1 className="col-6 m-auto">Just improve yourself</h1>    
                </Row>
            </Container>  
        </>
        )
    }
}
