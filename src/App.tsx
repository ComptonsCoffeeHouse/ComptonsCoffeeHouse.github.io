import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Hours from './components/Hours'
import Address from './components/Address'
import About from './components/About'
import Hero from './components/Hero'
import { useMediaQuery } from 'react-responsive';

function App() {
  let mobile = useMediaQuery({maxWidth: 700});
  return (
    <div className="App">
      {!mobile && <Navigation mobile={mobile} /> }
      <div className="Elements">
        <Hero/>
        <Hours/>
        <Address/>
        <About/>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
