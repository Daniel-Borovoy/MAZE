import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Img from '../assets/1.jpg'
export default class Cardoh extends Component {
    render() {
        return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                </Card.Body>
            </Card>
        </>
        
        )
    }
}
