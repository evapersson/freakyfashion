import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright} from '@fortawesome/free-regular-svg-icons'
import CountrySelector from '../FooterSection/CountrySelector'

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
  ];

  const countryList = [
    { id: 1, title: 'Land', value1: 'Sverige', value2: 'England' },
    { id: 2, title: 'Språk', value1: 'Svenska', value2: 'English' },
  ];


  return (
    <Container
      fluid
      // style={{ backgroundColor: '#9C7586' }}
      style={{borderTopColor: 'black'}}
      className="pb-3 pt-3"
    >
      <Row>
        <Col xs={12} md={6}>
          <Row>
            <Col xs={12} md={4}>
              <h6 className="text-left">Shopping</h6>
              <p className="text-left">
                <a
                  href="#"
                  style={{ color: 'black' }}
                  className="text-decoration-none"
                >
                  Vinterjackor
                </a>
              </p>
              <p className="text-left">
                <a
                  href="#"
                  style={{ color: 'black' }}
                  className="text-decoration-none"
                >
                  Pufferjackor
                </a>
              </p>
              <p className="text-left">
                <a
                  href="#"
                  style={{ color: 'black' }}
                  className="text-decoration-none"
                >
                  Kappa
                </a>
              </p>
              <p className="text-left">
                <a
                  href="#"
                  style={{ color: 'black' }}
                  className="text-decoration-none"
                >
                  Trenchcoats
                </a>
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h6 className="text-left">Mina Sidor</h6>
              <p className="text-left">
                <a
                  href="#"
                  style={{ color: 'black' }}
                  className="text-decoration-none"
                >
                  Mina ordrar
                </a>
              </p>
              <p className="text-left">
                <a
                  href="#"
                  style={{ color: 'black' }}
                  className="text-decoration-none"
                >
                  Mitt konto
                </a>
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h6 className="text-left">Kundtjänst</h6>
              <p className="text-left">
                <a
                  href="#"
                  style={{ color: 'black' }}
                  className="text-decoration-none"
                >
                  Returpolicy
                </a>
              </p>
              <p className="text-left">
                <a
                  href="#"
                  style={{ color: 'black' }}
                  className="text-decoration-none"
                >
                  Integritetspolicy
                </a>
              </p>
            </Col>
          </Row>
        </Col>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={3}>
          <CountrySelector countryList={countryList}/>
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