import React from 'react'
import { CardDeck, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function MainContentLarge ({mainContentLargeList}) {
 
  return(
    <CardDeck className="mt-3 mb-4">{mainContentLargeList.map(item => {
      return (
        <Card key={item.id}>
          <Link
            to="/detailPage"
            style={{ textDecorationLine: 'none', color: 'black' }}
          >
            <Card.Img variant="top" src={item.image} alt={item.name} style={{ maxWidth: "75%"}}/>   
          </Link>
        </Card>
      );
    })}
    </CardDeck>
  );
}
export default MainContentLarge



