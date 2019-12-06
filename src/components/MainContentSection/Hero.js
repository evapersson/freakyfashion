import React from 'react'
import hero from '../../Images/hero.jpg';
import {Row, Col, Image, Button} from 'react-bootstrap'
// import {CustomPlaceholder} from 'react-placeholder-image'

function Hero (){
  return (
    <Row className="flex-column-reverse flex-lg-row">
      <Col xs={12} md={3}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
        <Button variant="light">CTA</Button>
      </Col>
      <Col xs={12} md={9}>
        <Image src={hero} alt="news" fluid className="mt-2 mb-2">

        </Image>
      </Col>
    </Row>
  );
}
export default Hero

//'#9C7586' gammal bakgrundsfärg
