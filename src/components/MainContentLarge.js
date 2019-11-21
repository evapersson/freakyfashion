import React from 'react'
import { CardDeck, Card } from 'react-bootstrap';

function MainContentLarge (props) {

  // const mainContentLargeList = [
  //   {id: 5, name: "Feather Dress", image: featherdress, price: 1799},
  //   {id: 6,  name: "Egg Dress", image: eggdress , price: 1699,}
  // ];
 
  return(
    <CardDeck className="mt-3 mb-4">{props.mainContentLargeList.map(item => {
      return (<Card key={item.id} className="col-6"><Card.Img variant="top" src={item.image} alt={item.name} style={{ maxWidth: "100%"}}/>
        <Card.Body>
          {/* <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.shortDescription}
          </Card.Text>
          <h3>{item.price} kr</h3> */}
        </Card.Body>
      </Card>);
    })}
    </CardDeck>
  );
}
export default MainContentLarge



