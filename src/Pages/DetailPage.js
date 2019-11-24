import React from 'react'
import { Container, Col, Row, Image, Card} from 'react-bootstrap';
import ProductDetail from '../Components/ProductDetailSection/ProductDetail'


const DetailPage = () =>{
  return(
    <Container>
     <ProductDetail/>
      <Row>
        <h4>Rekommenderat för dig</h4>
      </Row>
      <Row className="mb-2">
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
    </Container>
  );
}
export default DetailPage