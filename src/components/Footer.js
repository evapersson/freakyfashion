import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright} from '@fortawesome/free-regular-svg-icons'
import CountrySelector from './CountrySelector'

function Footer () {

  const footerInfo = [
    {
      id: 1, category: "Shopping", items: [{ name: "Vinterjackor"}, { name: "Pufferjackor"}, { name: "Kappa"}, {name: "Trenchcoat"}]
    }, {
      id: 2, category: "Mina sidor", items: [{ name: "Mina ordrar"}, { name: "Mitt konto"}]   
    },
    {
      id: 3, category: "Kundtjänst", items: [{ name: "Returpolicy" }, { name: "Integritetspolicy" }]
    }
  ]


  return (
    <Container fluid style={{ backgroundColor: '#9C7586' }} className="pb-3 pt-2">
      <Row>
        <Col className="col-6">
          <Row>
            <Col className="col 4 text-left"><h6>Shopping</h6></Col>
            <Col className="col 4 text-left"><h6>Mina Sidor</h6></Col>
            <Col className="col 4 text-left"><h6>Kundtjänst</h6></Col>
          </Row>
          <Row>
            <Col className="col 4">
              <p className="text-left"><a href="#" style={{ color: "black" }} className="text-decoration-none">Vinterjackor</a></p>
              <p className="text-left"> <a href="#" style={{ color: "black" }} className="text-decoration-none">Pufferjackor</a></p>
              <p className="text-left"><a href="#" style={{ color: "black" }} className="text-decoration-none">Kappa</a> </p>
              <p className="text-left"><a href="#" style={{ color: "black" }} className="text-decoration-none">Trenchcoats</a></p>
            </Col>
            <Col className="col 4">
              <p className="text-left"><a href="#" style={{ color: "black" }} className="text-decoration-none">Mina ordrar</a></p>
              <p className="text-left"><a href="#" style={{ color: "black" }} className="text-decoration-none">Mitt konto</a></p>

            </Col>
            <Col className="col 4">
              <p className="text-left"><a href="#" style={{ color: "black" }} className="text-decoration-none">Returpolicy</a></p>
              <p className="text-left"><a href="#" style={{ color: "black" }} className="text-decoration-none">Integritetspolicy</a></p>
            </Col>
          </Row>
           
        </Col>
        <Col className="col-3"></Col>
        <Col className="col-3">
          <CountrySelector/>
        </Col>
      </Row>
      <Row>
      <Col className="col-12">
        <FontAwesomeIcon icon={faCopyright} className="mr-2" />
        <small>Copyright Freaky Fashion 2019</small>
      </Col>
      </Row>
    </Container>
  );
}
export default Footer