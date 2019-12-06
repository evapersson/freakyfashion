import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright} from '@fortawesome/free-regular-svg-icons'
import CountrySelector from '../FooterSection/CountrySelector'

function Footer ({shoppingInfo, myPages, customerService, countryInfo}) {





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
              {shoppingInfo.map(item=> {
                return(
                      <p className="text-left">
                        <a
                          href={item.href}
                          style={{ color: 'black' }}
                          className="text-decoration-none"
                        >
                          {item.product}
                        </a>
                      </p>
                      );
              })}
            </Col>
            <Col xs={12} md={4}>
              <h6 className="text-left">Mina Sidor</h6>
              {myPages.map(item=> {
                return (
                  <p className="text-left">
                    <a
                      href={item.href}
                      style={{ color: 'black' }}
                      className="text-decoration-none"
                    >
                      {item.text}
                    </a>
                  </p>
                );
              })}
            </Col>
            <Col xs={12} md={4}>
              <h6 className="text-left">Kundtjänst</h6>
              {customerService.map(item => {
                return (
                  <p className="text-left">
                    <a
                      href={item.href}
                      style={{ color: 'black' }}
                      className="text-decoration-none"
                    >
                    {item.info}
                    </a>
                  </p>
                );
              })}
            </Col>
          </Row>
        </Col>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={3}>
          <CountrySelector country={countryInfo}/>
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