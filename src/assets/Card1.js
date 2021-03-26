import React, { Component } from 'react'
import { Card, CardColumns, Container } from 'react-bootstrap'

export default class Card1 extends Component {
    render() {
        return (
            <>
            <Container>
                <CardColumns>
                    <Card className="shadow-box-example hoverable">
                        <Card.Img variant="top" src="https://images.pexels.com/photos/6062177/pexels-photo-6062177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shadow-box-example hoverable">
                        <Card.Img variant="top" src="https://images.pexels.com/photos/4061512/pexels-photo-4061512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                        <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shadow-box-example hoverable">
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2364593/pexels-photo-2364593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                        <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shadow-box-example hoverable">
                        <Card.Img variant="top" src="https://images.pexels.com/photos/5432147/pexels-photo-5432147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                        <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shadow-box-example hoverable">
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2537658/pexels-photo-2537658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                        <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shadow-box-example hoverable">
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2530554/pexels-photo-2530554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                        <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
                </Container>
            </>
        )
    }
}
