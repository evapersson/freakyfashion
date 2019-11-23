import React from 'react'
import { CardDeck, Card } from 'react-bootstrap';

function MainContentLarge ({mainContentLargeList}) {
 
  return(
    <CardDeck className="mt-3 mb-4">{mainContentLargeList.map(item => {
      return (<Card key={item.id} className="col-6"><Card.Img variant="top" src={item.image} alt={item.name} style={{ maxWidth: "100%"}}/>
        
      </Card>);
    })}
    </CardDeck>
  );
}
export default MainContentLarge



