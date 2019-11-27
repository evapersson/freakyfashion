import React from 'react'
import {CardDeck, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {CustomPlaceholder} from 'react-placeholder-image'


function MainContentSmall ({mainContentList}) {

  return(
    <CardDeck className="mt-3">{mainContentList.map(item => {
      return (
        <Card key={item.id}>
          <Link
            to="/detailPage"
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


       



            //             <CustomPlaceholder
            //   // width={250}
            //   // height={150}
            //   maxWidth= {'100%'}
            //   textColor="#ffffff"
            //   text="Picture"
            // />