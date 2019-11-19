import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Content from './components/Content'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
