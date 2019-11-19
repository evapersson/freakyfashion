import React from 'react'
import { CardDeck, Card } from 'react-bootstrap';
import eggdress from '../images/eggdress.jpg'
import featherdress from '../images/featherdress.jpg'

function MainContentLarge () {

  const mainContentLargeList = [
    { name: "Feather Dress", image: { featherdress }, price: 1799},

    { name: "Egg Dress", image: { eggdress }, price: 1699,}
  ];

  return(
    <CardDeck className="mt-3">{mainContentLargeList.map(item => {
      return (<Card className="col-6"><Card.Img variant="top" src={item.image} alt={item.name} />
        ,
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.shortDescription}
          </Card.Text>
          <h3>{item.price} kr</h3>
        </Card.Body>
      </Card>);
    })}
    </CardDeck>
  );
}
export default MainContentLarge