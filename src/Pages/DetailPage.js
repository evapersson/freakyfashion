import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap';


const DetailPage = () =>{
  return(
    <Container fluid>
      <Row>
      <Col className= "col-6">
          <Image src="https://via.placeholder.com/350x450" alt="image on a product"></Image>
      </Col>
      <Col className="col-6">

      </Col>
      </Row>
      <Row>
        <h4>Rekomenderat för dig</h4>
      </Row>
    </Container>
  );
}
export default DetailPage