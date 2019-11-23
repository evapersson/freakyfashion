import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
// import Hero from './Components/Hero.js'
// import Content from './Components/Content'
// import IconBarFooter from './Components/IconBarFooter'
import DetailPage from './Pages/DetailPage'
import Footer from './Components/Footer'
import StartPage from './Pages/StartPage'

function App() {
  const siteLink = [
    { id: 1, title: "Nyheter", link: "#" },
    { id: 2, title: "Kategorier", link: "#" },
    { id: 3, title: "Klänningar", link: "#" },
    { id: 4, title: "Skor", link: "#" },
    { id: 5, title: "Accesoarer", link: "#" },
    { id: 6, title: "Rea", link: "#" },
    { id: 7, title: "Kampanjer", link: "#" },
    { id: 8, title: "Varumärken", link: "#" },
    { id: 9, title: "Shop", link: "#" },
    { id: 10, title: "Instagram", link: "#" },
  ];



  return (
    <div className="App">
      <BrowserRouter>
        <Header siteLink={siteLink} />
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/detailPage" component={DetailPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
