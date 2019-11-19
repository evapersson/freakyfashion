import React from 'react'
import {Jumbotron, Image, Card} from 'react-bootstrap'
import hero from '../images/hero.jpg';

function Hero (){
  return (
    <Jumbotron fluid style={{ backgroundColor: '#9C7586' }}>
      <Image src={hero} alt="news"></Image>
    </Jumbotron>
  );
}
export default Hero