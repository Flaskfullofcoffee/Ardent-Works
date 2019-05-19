import React, { Component } from 'react';
import Navigation from './navigation.js';
import Hero from './hero.js';
import Intro from './intro.js';
import Portfolio from './portfolio.js';
import Pricing from './pricing.js';
import Contact from './contact.js';
import Foo from './foo.js'
import './App.css';


class App extends Component {



  render() {
    return (
      <div className="content-wrapper container-fluid">
        <Navigation />
        <Hero />
        <Intro />
        <Portfolio />
        <Pricing />
        <Contact />
      </div>
    );
  }
}

export default App;
