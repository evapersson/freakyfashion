import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import SizePicker from '../ProductDetailSection/SizePicker'
import ColorPicker from '../ProductDetailSection/ColorPicker'

const ProductDetail = () => {

  return (
    <Row className="left-align">
      <Col xs={12} md={6}>
        <Image
          src="https://via.placeholder.com/450x600"
          alt="image on a product"
        ></Image>
      </Col>
      <Col xs={12} md={6}>
        <h3>Produktnamn</h3>
        <p>Artikelnummer</p>
        <article>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. "
          <h5>Pris:</h5>
        </article>

        <ColorPicker />
        <SizePicker />
      </Col>
    </Row>
  );
}

export default ProductDetail