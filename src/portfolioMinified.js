import React, { Component } from 'react';
import './App.css'


class PortfolioMinified extends Component {



  render() {
    return (
      <div id="portfolio-min" className="row">
        <div id="active" className="col-12 d-flex flex-column">
            <button className="btn gallery-link">weddings</button>
        </div>
        <div className="col-12 d-flex flex-column">
            <button className="btn gallery-link">portraits</button>
        </div>
        <div className="col-12 d-flex flex-column">
            <button className="btn gallery-link">mini-sessions</button>
        </div>
        <div className="col-12 d-flex flex-column">
            <button className="btn gallery-link">mini-sessions</button>
        </div>
      </div>
    );
  }
}

export default PortfolioMinified;
