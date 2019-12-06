import React from 'react'
import MainContentSmall from './MainContentSmall'
import MainContentLarge from './MainContentLarge'
import Hero from './Hero'
import { Container } from 'react-bootstrap';
// import eggdress from '../../Images/eggdress.jpg'
// import featherdress from '../../Images/featherdress.jpg'
// import freakydress from '../../Images/freakydress-small.jpg'
// import leodress from '../../Images/leodress-small.jpg'
// import metallicdress from '../../Images/metallicdress-small.jpg'
import nakd1 from '../../Images/nakd1.jpg'
import nakd2 from '../../Images/nakd2.jpg'
import nakd3 from '../../Images/nakd3.jpg'
import nakd4 from '../../Images/nakd4.jpg';
import nakd5 from '../../Images/nakd5.jpg';

function ContentContainer (){

  const mainContentList = [
    { id: 1, name: "Freaky dress", image: nakd1, price: 499, shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },


    { id: 2, name: "Leo dress", image: nakd2, price: 699, shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },

    { id: 3, name: "Metallic dress", image: nakd3, price: 1099, shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];

  const mainContentLargeList = [
    { id: 4, name: "Feather Dress", image: nakd4, price: 1799 },
    { id: 5, name: "Egg Dress", image: nakd5, price: 1699, }
  ];


  return(
    <Container>
      <Hero/>
        <MainContentSmall mainContentList={mainContentList} />
      <MainContentLarge mainContentLargeList={mainContentLargeList } />
    </Container>
  );
}
export default ContentContainer