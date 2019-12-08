import React from 'react'
import {Row, Col, Image, Button} from 'react-bootstrap'


function Hero ({heroInfo}){
  return (
    <Row className="flex-column-reverse flex-lg-row">
      <Col xs={12} md={3}>
        <p className="pt-5">
         {heroInfo.heroText}
        </p>
        <Button variant="light">{heroInfo.btnText}</Button>
      </Col>
      <Col xs={12} md={9}>
        <Image src={heroInfo.image} alt="news" fluid className="mt-2 mb-2">
        </Image>
      </Col>
    </Row>
  );
}
export default Hero

//'#9C7586' gammal bakgrundsfärg
