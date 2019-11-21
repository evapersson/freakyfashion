import React from 'react'
import {CardDeck, Card} from 'react-bootstrap'
// import freakydress from '../images/freakydress-small.jpg'
// import leodress from '../images/leodress-small.jpg'
// import metallicdress from '../images/metallicdress-small.jpg'

function MainContentSmall (props) {

  // const mainContentList = [
  //   {id: 1, name: "Freaky dress", image: freakydress, price: 499, shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    

  //   {id: 2, name: "Leo dress", image: leodress, price: 699, shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "  },

  //   {id: 3, name: "Metallic dress", image: metallicdress, price: 1099, shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "  }
  // ];


  return(
    <CardDeck className="mt-3">{props.mainContentList.map(item => {
      return (<Card key={item.id} className="col-4">
        <Card.Img variant="top" src={item.image} alt={item.name} style={{ maxWidth: "100%" }}/>
        
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
export default MainContentSmall
