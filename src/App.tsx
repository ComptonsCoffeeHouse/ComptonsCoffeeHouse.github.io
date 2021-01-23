import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Hours from './components/Hours'
import Address from './components/Address'
import About from './components/About'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Elements">
        <Hero/>
        <Hours/>
        <Address/>
        <About/>
      </div>
    </div>
  );
}

export default App;
