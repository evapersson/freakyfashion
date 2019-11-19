import React from 'react'
import {Jumbotron, Image} from 'react-bootstrap'
import hero from '../images/hero.jpg';

function Hero (){
  return(
    <Jumbotron fluid>
      <Image src={hero} alt="news">

      </Image>

    </Jumbotron>

  );
}
export default Hero