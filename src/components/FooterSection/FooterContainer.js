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

  const footerShopping = [
    { id: 1, product: 'Vinterjackor', href: '/jackets' },
    { id: 2, product: 'Pufferjackor', href: '/jackets'},
    {id: 3, product: 'Kappor', href: '/jackets'},
    {id: 4, product: 'Trenchcoats', href: '/jackets' }
  ];

  const footerMyPages = [
    { id: 1, text: 'Mina ordrar', href: 'mypages' },
    { id: 2, text: 'Mitt konto', href: 'mypages' }
  ];

  const footerCustomerService = [
    { id: 1, info: 'Returpolicy', href: '/customerservice' },
    { id: 2, info: 'Integritetspolicy', href: '/customerservice' }
  ];

    const footerCountryList = [
      { id: 1, title: 'Land', value1: 'Sverige', value2: 'England' },
      { id: 2, title: 'Språk', value1: 'Svenska', value2: 'English' }
    ];

  return(
    <Container fluid>
      <IconBarFooter iconList={iconList}/>
      <Footer shoppingInfo={footerShopping} myPages={footerMyPages}
       customerService={footerCustomerService} countryInfo={footerCountryList}/>
    </Container>
  );
}
export default FooterSection