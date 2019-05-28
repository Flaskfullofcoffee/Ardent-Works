import React, { Component } from 'react';
import './App.css';


class Construction extends Component {


  render() {
    return (
      <div className="container-fluid banner d-flex">
        <div className="row">
          <div className="brand col-10">
            <h1>Ardent/Works</h1>
            <p className="font-weight-light">Photography</p>
          </div>
          <div className="message text-center col-10">
            <h2>New Website</h2>
            <h3>Under Construction</h3>
            <p>Thank you for your patience</p>
          </div>
          <div className="ribbon text-center col-10">
            <h3>Contact the Studio</h3>
            <span className="contactMe">602.793.9903</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Construction;
