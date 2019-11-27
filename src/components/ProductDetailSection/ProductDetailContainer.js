import React from 'react'
import { Container } from 'react-bootstrap';
import ProductDetail from '../ProductDetailSection/ProductDetail'
import ProductRecommended from '../ProductDetailSection/ProductRecommended'

const ProductDetailContainer = () => {
  return (
    <Container>
        <ProductDetail/>
        <ProductRecommended/>
    </Container>
  );
}
export default ProductDetailContainer