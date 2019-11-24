import React from 'react';
import {Image, Form, FormControl, Navbar, Nav, NavDropdown, Dropdown, Container, Row, Col} from 'react-bootstrap'
import freakylogo from '../../Images/freakylogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart} from '@fortawesome/free-regular-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


function Header ({siteLink}) {

  return (
    <Container fluid bg="light" style={{ backgroundColor: "#F8F9FA"}}>
      <Row>
        <Image className="mt-3" src={freakylogo} alt="freaky-logo" href="#home"></Image>
          <Form inline className="ml-4">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        <FontAwesomeIcon icon={faEye} className="ml-5 mt-5" style={{fontSize:"150%"}} />
        <FontAwesomeIcon icon={faHeart} className="ml-5 mt-5" style={{ fontSize: "150%" }} />
        <FontAwesomeIcon icon={faShoppingCart} className="ml-5 mt-5 mr-5" style={{fontSize: "150%"}} />

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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {siteLink.map(item => {
            return (<Nav.Link key={item.id} href={item.link}><small>{item.title}</small></Nav.Link>);
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}
export default Header;