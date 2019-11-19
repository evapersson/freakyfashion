import React from 'react'
import {Container, Row} from 'react-bootstrap'
import MainContentSmall from './MainContentSmall'
import MainContentLarge from './MainContentLarge'

function Content (){
  return(
    <Container fluid>
        <MainContentSmall />
        <MainContentLarge />
    </Container>
  );
}
export default Content