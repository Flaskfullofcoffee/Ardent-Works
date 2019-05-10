import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {
  handleClick(e) {
    let tabs = document.querySelector('.tab').className;
    console.log(tabs);
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
      e.target.classList.add('in-active');
    } else if (condition) {

    }{
      e.target.classList.add('active');
      e.target.classList.remove('in-active');
    }
  }

  render() {
    return (
      <section id="portfolio" className="row">
          <div id="portfolio-info" className="col-md-5 d-flex flex-column">
            <ul className="text-center d-flex flex-column justify-content-center">
              <div id="weddings" className="tab active flex-fill" onClick={this.handleClick}>
                <li className="tab-summary">Weddings</li>
                <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div id="portraits" className="tab in-active flex-fill" onClick={this.handleClick}>
                <li className="tab-summary">Portraits</li>
                <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div id="sessions" className="tab in-active flex-fill" onClick={this.handleClick}>
                <li className="tab-summary">Mini-Sessions</li>
                <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div id="auto" className="tab in-active flex-fill" onClick={this.handleClick}>
                <li className="tab-summary">Automotive</li>
                <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </ul>
          </div>
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














import React from "react"



class App extends React.Component {
    handleClick(e) {
        e.target.classList.toggle('active') // change the class to active when element is selected
    }

    render() {

        return (
            <div>
                <h1 onClick={this.handleClick} className='in-active'>section 1: status</h1>
                <h1 onClick={this.handleClick} className='in-active'>section 2: status</h1>
                <h1 onClick={this.handleClick} className='in-active'>section 3: status</h1>
                <h1 onClick={this.handleClick} className='in-active'>section 4: status</h1>
            </div>
        )
    }
}

export default App



// STYLES


.active {
  color: green;
}
.in-active {
  color: red;
}
