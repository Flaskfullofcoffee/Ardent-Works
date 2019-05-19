import React, { Component } from 'react'
import PortfolioMinified from './portfolioMinified.js'
import Gallery from './gallery.js'
import './App.css'

class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      activeIdx: -1
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(idx, e) {
    return () => this.setState({ activeIdx: idx });
  }

  render() {
    const getStatus = (idx) => this.state.activeIdx === idx ? 'active' : 'inActive';

    return (
      <section id="portfolio" className="row">
        <div id="portfolio-info" className="col-md-5 d-flex flex-column">
          <ul className="text-center d-flex flex-column justify-content-center">
            <div id="weddings" className={`tab ${getStatus(0)} flex-fill`} onClick={this.handleClick(0)}>
              <li className="tab-summary">Weddings</li>
              <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="portraits" className={`tab ${getStatus(1)} flex-fill`} onClick={this.handleClick(1)}>
              <li className="tab-summary">Portraits</li>
              <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="sessions" className={`tab ${getStatus(2)} flex-fill`} onClick={this.handleClick(2)}>
              <li className="tab-summary">Mini-Sessions</li>
              <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="auto" className={`tab ${getStatus(3)} flex-fill`} onClick={this.handleClick(3)}>
              <li className="tab-summary">Automotive</li>
              <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </ul>
        </div>
        <PortfolioMinified />
        <Gallery activeIdx={this.state.activeIdx} />
      </section>
    );
  }
}

export default Portfolio;
