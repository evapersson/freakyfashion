import React from 'react'
import {CardDeck, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function MainContentSmall ({mainContentList}) {

  return(
    <CardDeck className="mt-3">{mainContentList.map(item => {
      return (<Card key={item.id} className="col-4">
        <Link to="/detailPage">  <Card.Img variant="top" src={item.image} alt={item.name} style={{ maxWidth: "100%" }}/>
        
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
              {item.shortDescription}
          </Card.Text>
          <h3>{item.price} kr</h3>
        </Card.Body>
      </Link></Card>);
    })}
    </CardDeck>
  );
}
export default MainContentSmall
