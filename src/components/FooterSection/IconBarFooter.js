import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function IconBarFooter ({iconList}) {
  return (
    <Container fluid>
      <Row className="pb-3 pt-3">
        {iconList.map(item => { 
          return (<Col key={item.id} xs={12} md={3}>
            <FontAwesomeIcon icon={item.icon} className="mr-2" />
            <small>{item.text}</small>
          </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default IconBarFooter