import React, { Component } from 'react';
import Navigation from './navigation.js';
import Hero from './hero.js';
import Intro from './intro.js';
import Foo from './foo.js';
import Pricing from './pricing.js';
import Contact from './contact.js';
import './App.css';


class App extends Component {



  render() {
    return (
      <div className="content-wrapper container-fluid">
        <Navigation />
        <Hero />
        <Intro />
        <Foo />
        <Pricing />
        <Contact />
      </div>
    );
  }
}

export default App;
