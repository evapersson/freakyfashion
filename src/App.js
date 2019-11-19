import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <MainContent/>
    </div>
  );
}

export default App;
