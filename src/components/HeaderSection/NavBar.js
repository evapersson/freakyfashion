import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {

  const siteLink = [
    { id: 1, title: "Nyheter", link: "news" },
    { id: 2, title: "Kategorier", link: "categories" },
    { id: 3, title: "Klänningar", link: "dresses" },
    { id: 4, title: "Skor", link: "shoes" },
    { id: 5, title: "Accesoarer", link: "accessories" },
    { id: 6, title: "Rea", link: "/sales" },
    { id: 7, title: "Kampanjer", link: "/campaigns" },
    { id: 8, title: "Varumärken", link: "/brands" },
    { id: 9, title: "Shop", link: "/shopping" },
    { id: 10, title: "Instagram", link: "/instagram" },
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