import React from 'react'
import Footer from '../FooterSection/Footer'
import IconBarFooter from '../FooterSection/IconBarFooter'
import { Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import {
  faGlobeEurope,
  faFighterJet,
  faLock
} from '@fortawesome/free-solid-svg-icons';

const FooterSection = () => {

  const iconList = [
    { id: 1, icon: faGlobeEurope, text: 'Gratis frakt och returer' },
    { id: 2, icon: faFighterJet, text: 'Expressfrakt' },
    { id: 3, icon: faLock, text: 'Säkra betalningar' },
    { id: 4, icon: faSmile, text: 'Nyheter varje dag' }
  ];

  return(
    <Container fluid>
      <IconBarFooter iconList={iconList}/>
      <Footer/>
    </Container>
  );
}
export default FooterSection