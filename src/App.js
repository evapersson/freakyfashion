import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/HeaderSection/Header'
import DetailPage from './Pages/DetailPage'
import FooterContainer from './Components/FooterSection/FooterContainer'
import StartPage from './Pages/StartPage'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/detailPage" component={DetailPage} />
        </Switch>
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
