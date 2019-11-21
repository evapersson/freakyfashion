import React from 'react'
import {Container, Row, Dropdown} from 'react-bootstrap'

function CountrySelector (){
  return (
<Container>
     <Row>
        <h6>Välj land och språk</h6>
     </Row>
  <Row>
       <p>Land</p>
   </Row>
   <Row>    
      <Dropdown>

        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Sverige
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">England</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Row>
    <Row> 
      <p>Språk</p>
    </Row>
    <Row>  
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Svenska
        </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">English</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row> 
</Container>
  );

}
export default CountrySelector