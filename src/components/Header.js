import React from 'react';
import {Image, Form, FormControl, Navbar, Nav, NavDropdown, Dropdown, Container, Row, Col} from 'react-bootstrap'
import freakylogo from '../images/freakylogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart} from '@fortawesome/free-regular-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


function Header () {
  return (
    <Container fluid bg="light" style={{ backgroundColor: "#F8F9FA"}}>
      <Row>
        <Image className="mt-3" src={freakylogo} alt="freaky-logo" href="#home"></Image>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        <FontAwesomeIcon icon={faEye} className="ml-5 mt-5" />
        <FontAwesomeIcon icon={faHeart} className="ml-5 mt-5" />
        <FontAwesomeIcon icon={faShoppingCart} className="ml-5 mt-5 mr-5" />

        <Dropdown className="ml-5 mt-4">
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Svenska
        </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Engelska</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
    <Navbar bg="light" expand="lg" sticky="top">
      {/* <Image src={freakylogo} alt="freaky-logo" href="#home"></Image>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form> */}
      {/* <Dropdown className="ml-5">
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Svenska
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Engelska</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}


      {/* <FontAwesomeIcon icon={faEye} className="ml-5" />
      <FontAwesomeIcon icon={faHeart} className="ml-5" />
      <FontAwesomeIcon icon={faShoppingCart} className="ml-5 mr-5" /> */}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Nyheter</Nav.Link>
          <NavDropdown title="Kategorier" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Klänningar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Skor</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accesoarer</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Rea</Nav.Link>
          <Nav.Link href="#link">Kampanjer</Nav.Link>
          <Nav.Link href="#link">Varumärken</Nav.Link>
          <Nav.Link href="#link">Shop</Nav.Link>
          <Nav.Link href="#link">Instagram</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}
export default Header;