import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
//import { Link } from "react-router-dom";




export default class header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href='/' className='float-right'>
              <img
                src="/ssn-logo.ico"
                width="25"
                height="25"
                className="d-inline-block align-top"
              />&nbsp;
              Shree Sanskruti Multipurpose Society
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto float-left">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href="/Events">Events</Nav.Link>
                <Nav.Link href="/WellWishers">Well Wishers</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Docs">Docs</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

