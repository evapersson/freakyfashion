import React from 'react'
import hero from '../Images/hero.jpg';
import {Container, Row, Col, Image, Button, Card} from 'react-bootstrap'

function Hero (){
  return (
    <Container className="mt-3 d-xs-none" style={{ backgroundColor: '#E193A5' }}>
        <Row>
          <Col className="col-4 mt-sm-5">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <Button variant="light">CTA</Button>
          </Col>
        <Col className="col-8">
          <Image src={hero} alt="news" fluid className="mt-2 mb-2" >
          </Image>
        </Col>
        </Row>
    </Container>
  );
}
export default Hero

//'#9C7586' gammal bakgrundsfärg