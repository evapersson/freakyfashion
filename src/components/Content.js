import React from 'react'
import MainContentSmall from './MainContentSmall'
import MainContentLarge from './MainContentLarge'
import { Container } from 'react-bootstrap';
import eggdress from '../images/eggdress.jpg'
import featherdress from '../images/featherdress.jpg'
import freakydress from '../images/freakydress-small.jpg'
import leodress from '../images/leodress-small.jpg'
import metallicdress from '../images/metallicdress-small.jpg'

function Content (){

  const mainContentList = [
    { id: 1, name: "Freaky dress", image: freakydress, price: 499, shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },


    { id: 2, name: "Leo dress", image: leodress, price: 699, shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },

    { id: 3, name: "Metallic dress", image: metallicdress, price: 1099, shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " }
  ];

  const mainContentLargeList = [
    { id: 5, name: "Feather Dress", image: featherdress, price: 1799 },
    { id: 6, name: "Egg Dress", image: eggdress, price: 1699, }
  ];


  return(
    <Container>
        <MainContentSmall mainContentList={mainContentList} />
      <MainContentLarge mainContentLargeList={mainContentLargeList } />
    </Container>
  );
}
export default Content