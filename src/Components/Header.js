import React, { Component } from 'react'
import {
  Container,
  FormControl,
  Navbar,
  Form,
  Button,
  Nav,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const styles = {
  textDecoration: 'none',
  color: '#000',
}

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
        >
          <Container>
            <Navbar.Brand>
              <NavLink style={styles} to="/">
                MAZE
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink style={styles} to="/">
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink style={styles} to="/about">
                    About us
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink style={styles} to="/contacts">
                    Contacts
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink style={styles} to="/blog">
                    Blog
                  </NavLink>
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="dark">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}
