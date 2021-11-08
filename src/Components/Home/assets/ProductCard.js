import React, { Component } from 'react'
import { Card, CardColumns, Container } from 'react-bootstrap'

export class ProductCard extends Component {
  render() {
    return (
      <>
        <Container>
          <CardColumns>
            <Card className="shadow-box-example hoverable">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/6062177/pexels-photo-6062177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <Card.Body>
                <Card.Title>Black Jacket</Card.Title>
                <Card.Text>2699 ₽</Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-box-example hoverable">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/4061512/pexels-photo-4061512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <Card.Body>
                <Card.Title>T-shirt</Card.Title>
                <Card.Text>1299 ₽</Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-box-example hoverable">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/2364593/pexels-photo-2364593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <Card.Body>
                <Card.Title>Long sleeve sweater</Card.Title>
                <Card.Text>2099 ₽</Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-box-example hoverable">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/5432147/pexels-photo-5432147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <Card.Body>
                <Card.Title>Black Coat</Card.Title>
                <Card.Text>5499 ₽</Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-box-example hoverable">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/2537658/pexels-photo-2537658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <Card.Body>
                <Card.Title>Sun Hat</Card.Title>
                <Card.Text>799 ₽</Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-box-example hoverable">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/2530554/pexels-photo-2530554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
              <Card.Body>
                <Card.Title>Black Jeans</Card.Title>
                <Card.Text>2299 ₽</Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Container>
      </>
    )
  }
}
