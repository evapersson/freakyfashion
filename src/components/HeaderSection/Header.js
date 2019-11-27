import React from 'react';
import {Image, Form, FormControl, Navbar, Nav, NavDropdown, Dropdown, Container, Row, Col} from 'react-bootstrap'
import freakylogo from '../../Images/freakylogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart} from '@fortawesome/free-regular-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar'


function Header ({siteLink}) {

  return (
    <Container
      fluid
      bg="light"
      style={{ backgroundColor: '#F8F9FA' }}
      className="mb-2"
    >
      <Row>
        <Col xs={12} md={3}>
          <Image
            className="mt-3"
            src={freakylogo}
            alt="freaky-logo"
            href="#home"
          ></Image>
        </Col>
          <Col xs={12} md={3}>
          <Form className="mt-4">
            <FormControl type="text" placeholder="Search"/>
          </Form>
      </Col>
      <Col xs={12} md={3}>
          <FontAwesomeIcon
            icon={faEye}
            className="ml-5 mt-5"
            style={{ fontSize: '150%' }}
          />
          <FontAwesomeIcon
            icon={faHeart}
            className="ml-5 mt-5"
            style={{ fontSize: '150%' }}
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="ml-5 mt-5"
            style={{ fontSize: '150%'}}
          />
        </Col>
          <Col xs={12} md={3}>
          <Dropdown className="ml-5 mt-4">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Svenska
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Engelska</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    <NavBar siteLink={siteLink}/>  
    </Container>
  );
}
export default Header;