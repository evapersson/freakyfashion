import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/HeaderSection/Header'
import DetailPage from './Pages/DetailPage'
import FooterContainer from './Components/FooterSection/FooterContainer'
import StartPage from './Pages/StartPage'
import Instagram from './Components/LinkSection/Instagram';
import Dresses from './Components/LinkSection/Dresses';
import News from './Components/LinkSection/News';
import Shoes from './Components/LinkSection/Shoes';
import Shopping from './Components/LinkSection/Shopping';
import Categories from './Components/LinkSection/Categories';
import Accessories from './Components/LinkSection/Accessories';
import Sales from './Components/LinkSection/Sales';
import Campaigns from './Components/LinkSection/Campaigns';
import CustomerService from './Components/LinkSection/FooterLinks/CustomerService'
import Brands from './Components/LinkSection/Brands';
import MyPage from './Components/LinkSection/FooterLinks/MyPage';
import Jackets from './Components/LinkSection/FooterLinks/Jackets';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/product/details" component={DetailPage} />
          <Route path="/instagram" component={Instagram}/>
          <Route path="/shopping" component={Shopping} />
          <Route path="/news" component={News} />
          <Route path="/shoes" component={Shoes} />
          <Route path="/dresses" component={Dresses} />
          <Route path="/categories" component={Categories}/>
          <Route path="/accessories" component={Accessories} />
          <Route path="/sales" component={Sales} />
          <Route path="/campaigns" component={Campaigns} />
          <Route path="/brands" component={Brands}/>
          <Route path="/customerservice" component={CustomerService} />
          <Route path="/mypages" component={MyPage} />
          <Route path="/jackets" component={Jackets} />
        </Switch>
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
