import React from 'react'
import {Container, Row, Dropdown} from 'react-bootstrap'


function CountrySelector (){
  // {
  //   props.mainContentLargeList.map(item => {
  //     return (<Card key={item.id} className="col-6"><Card.Img variant="top" src={item.image} alt={item.name} style={{ maxWidth: "100%" }} />
  //       <Card.Body>
  //         {/* <Card.Title>{item.name}</Card.Title>
  //         <Card.Text>
  //           {item.shortDescription}
  //         </Card.Text>
  //         <h3>{item.price} kr</h3> */}
  //       </Card.Body>
  //     </Card>);
  //   })
  // }
const countryList = [
  {id: 1, title: "Land", value1: "Sverige", value2: "England"},
  {id: 2, title: "Språk", value1: "Svenska", value2: "English"}
]

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