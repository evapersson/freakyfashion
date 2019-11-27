import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = ({siteLink}) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {siteLink.map(item => {
            return (
              <Nav.Link key={item.id} href={item.link}>
                <small>{item.title}</small>
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar