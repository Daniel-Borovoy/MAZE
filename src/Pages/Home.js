import { Carousel } from 'bootstrap'
import React, { Component } from 'react'
import { Container, Row, Jumbotron } from 'react-bootstrap'
import FooterPage from '../assets/FooterPage'
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
            <Jumbotron fluid>
                <Container>
                    <h1>MAZE</h1>
                    <p>
                    Лишь предприниматели в сети интернет подвергнуты целой серии независимых исследований. Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь однозначно определяет каждого участника как способного принимать собственные решения касаемо системы массового участия. Равным образом, укрепление и развитие внутренней структуры не даёт нам иного выбора, кроме определения системы массового участия!
                    </p>
                </Container>
            </Jumbotron>
            <FooterPage/>
        </>
        )
    }
}
