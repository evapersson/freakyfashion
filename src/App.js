import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import Hero from './components/Hero.js'

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
    </div>
  );
}

export default App;
