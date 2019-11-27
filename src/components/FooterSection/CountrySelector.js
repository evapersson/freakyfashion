import React from 'react'
import {Container, Row, Dropdown} from 'react-bootstrap'


function CountrySelector ({countryList}){

  return (
    <Container>
      <h6>Välj land och språk</h6>
      {countryList.map(item =>{
        return(
          <Row key={item.id}>
            <p className="text-left mr-2">{item.title}</p>
             <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            {item.value1}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{item.value2}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Row>
        )
      })}
    </Container>
  );

}
export default CountrySelector