import React from 'react';
import {Image, Nav, Navbar, Form, NavDropdown, FormControl, Button} from 'react-bootstrap'
import freakylogo from '../images/freakylogo.png'

function Header () {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Image src={freakylogo} alt="freaky-logo" href="#home"></Image>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Nyheter</Nav.Link>
          
          <NavDropdown title="Kategorier" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Rea</Nav.Link>
          <Nav.Link href="#link">Kampanjer</Nav.Link>
          <Nav.Link href="#link">Varumärken</Nav.Link>
          <Nav.Link href="#link">Shop</Nav.Link>
          <Nav.Link href="#link">Instagram</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;