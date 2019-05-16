import React, { Component } from 'react';
import './App.css';


class Gallery extends Component {



  render() {
    return (
      <div id="gallery" className="col-md-7">
        <div id="collapseWedding" className="img-scroll wedding-gallery collapse">
          <div className="img set1">

          </div>
          <div className="img set2">

          </div>
          <div className="img set1">

          </div>
        </div>
        <div id="collapsePortraits" className="img-scroll portraits-gallery collapse">
          <div className="img set2">

          </div>
          <div className="img set1">

          </div>
          <div className="img set2">

          </div>
        </div>
        <div className="img-scroll sessions-gallery hide">
          <div className="img set1">

          </div>
          <div className="img set2">

          </div>
          <div className="img set1">

          </div>
        </div>
        <div className="img-scroll auto-gallery hide">
          <div className="img set2">

          </div>
          <div className="img set1">

          </div>
          <div className="img set2">

          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
