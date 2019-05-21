import React, { Component } from 'react';
import './App.css';


class GalleryMinified extends Component {



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

export default GalleryMinified;
