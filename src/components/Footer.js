import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright, faSmile} from '@fortawesome/free-regular-svg-icons'
import { faGlobeEurope, faFighterJet, faLock } from '@fortawesome/free-solid-svg-icons';



function Footer () {
  return (
    <Container fluid style={{ backgroundColor: '#9C7586' }}className="pb-3">
      <Row>
        <Col className="col-3">
          <FontAwesomeIcon icon={faGlobeEurope} className="mr-2" />
          <small>Gratis frakt och returer</small>
        </Col>
        <Col className="col-3">
          <FontAwesomeIcon icon={faFighterJet} className="mr-2" />
          <small>Expressfrakt</small>
        </Col>
        <Col className="col-3">
          <FontAwesomeIcon icon={faLock} className="mr-2" />{' '}
          <small>Säkra betalningar</small>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faSmile} className="mr-2" />
          <small>Nyheter varje dag</small>
        </Col>
      </Row>
      <Row className="pt-1 pb-1">
        <Col></Col>
        <Col>
          <FontAwesomeIcon icon={faCopyright} className="mr-2" />
          <small>Copyright Freaky Fashion 2019</small>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default Footer