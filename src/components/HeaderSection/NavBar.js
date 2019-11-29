import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {

  const siteLink = [
    { id: 1, title: "Nyheter", link: "#" },
    { id: 2, title: "Kategorier", link: "#" },
    { id: 3, title: "Klänningar", link: "#" },
    { id: 4, title: "Skor", link: "#" },
    { id: 5, title: "Accesoarer", link: "#" },
    { id: 6, title: "Rea", link: "#" },
    { id: 7, title: "Kampanjer", link: "#" },
    { id: 8, title: "Varumärken", link: "#" },
    { id: 9, title: "Shop", link: "#" },
    { id: 10, title: "Instagram", link: "#" },
  ];
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