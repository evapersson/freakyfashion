import React from 'react'
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon} from 'react-fontawesome';


function Footer () {
  return (
    <Container fluid style={{ backgroundColor: '#9C7586' }}>
      {/* <FontAwesomeIcon icon={Copyright}/> */}
      <p>Copyright</p>
    </Container>
  );
}
export default Footer