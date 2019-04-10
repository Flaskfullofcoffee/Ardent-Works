import React, { Component } from 'react';


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
