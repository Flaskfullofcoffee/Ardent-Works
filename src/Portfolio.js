import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {
  handleClick(e) {
    // console.log(e.target.classList.contains('active'));
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
      e.target.classList.add('in-active');
    } else {
      e.target.classList.add('active');
      e.target.classList.remove('in-active');
    }
  }

  render() {
    return (
      <section id="portfolio" className="row">
          <div id="portfolio-info" className="col-md-5 d-flex flex-column">
            <ul className="text-center d-flex flex-column justify-content-center">
              <div className="tab active flex-fill" onClick={this.handleClick}>
                <li id="weddings" className="tab-summary">Weddings</li>
                <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="tab in-active flex-fill" onClick={this.handleClick}>
                <li id="portraits" className="tab-summary">Portraits</li>
                <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="tab in-active flex-fill" onClick={this.handleClick}>
                <li id="sessions" className="tab-summary">Mini-Sessions</li>
                <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="tab in-active flex-fill" onClick={this.handleClick}>
                <li id="auto" className="tab-summary">Automotive</li>
                <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </ul>
          </div>
          <div id="portfolio-min" className="row">
            <div id="img-tab active" className="col-12 d-flex flex-column">
                <button className="btn gallery-link">weddings</button>
            </div>
            <div id="img-tab" className="col-12 d-flex flex-column">
                <button className="btn gallery-link">portraits</button>
            </div>
            <div id="img-tab" className="col-12 d-flex flex-column">
                <button className="btn gallery-link">mini-sessions</button>
            </div>
            <div id="img-tab" className="col-12 d-flex flex-column">
                <button className="btn gallery-link">mini-sessions</button>
            </div>
          </div>
          <div id="gallery" className="col-md-7">
            <div className="img-scroll wedding-gallery">
              <div className="img set1">

              </div>
              <div className="img set2">

              </div>
              <div className="img set3">

              </div>
            </div>
            <div className="img-scroll portraits-gallery hide">
              <div className="img set1">

              </div>
              <div className="img set2">

              </div>
              <div className="img set3">

              </div>
            </div>
            <div className="img-scroll sessions-gallery hide">
              <div className="img set1">

              </div>
              <div className="img set2">

              </div>
              <div className="img set3">

              </div>
            </div>
            <div className="img-scroll auto-gallery hide">
              <div className="img set1">

              </div>
              <div className="img set2">

              </div>
              <div className="img set3">

              </div>
            </div>
          </div>
        </section>
    )
  }
}
export default Portfolio;
