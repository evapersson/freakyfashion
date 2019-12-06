import React from 'react'
import {CardDeck, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const MainContentSmall = ({mainContentList}) => {

  return(
    <CardDeck className="mt-3">{mainContentList.map(item => {
      return (
        <Card key={item.id}>
          <Link
            to="/product/details"
            style={{ textDecorationLine: 'none', color: 'black' }}
          >
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.name}
              style={{ maxWidth: '75%' }}
            />

            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.shortDescription}</Card.Text>
              <h3>{item.price} kr</h3>
            </Card.Body>
          </Link>
        </Card>
      );
    })}
    </CardDeck>
  );
}
export default MainContentSmall
