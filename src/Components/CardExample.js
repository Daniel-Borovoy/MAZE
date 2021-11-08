import React, { Component } from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdbreact'

export class CardExample extends Component {
  render() {
    return (
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard style={{ width: '22rem' }}>
            <MDBCardImage
              className="img-fluid"
              src="https://images.pexels.com/photos/4061512/pexels-photo-4061512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              className="img-fluid"
              src="https://images.pexels.com/photos/6062177/pexels-photo-6062177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              className="img-fluid"
              src="https://images.pexels.com/photos/2364593/pexels-photo-2364593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardImage
              className="img-fluid"
              src="https://images.pexels.com/photos/5432147/pexels-photo-5432147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    )
  }
}
