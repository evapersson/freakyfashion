import React from 'react'
import { Container, Row, Card } from 'react-bootstrap';

const ProductRecommended = () => {

  return(
  <Container className="mt-3">
    <Row>
      <h5>Rekommenderat för dig</h5>
    </Row>

    <Row className="mt-2 mb-2">
      <Card className="m-2">
        <Card.Img variant="top" src="https://via.placeholder.com/250x350" />
      </Card>

      <Card className="m-2">
        <Card.Img variant="top" src="https://via.placeholder.com/250x350" />
      </Card>

      <Card className="m-2">
        <Card.Img variant="top" src="https://via.placeholder.com/250x350" />
      </Card>

      <Card className="m-2">
        <Card.Img variant="top" src="https://via.placeholder.com/250x350" />
      </Card>
        </Row>

  </Container>);
}
export default ProductRecommended