import React, { Component } from 'react';
import './App.css';


class Gallery extends Component {



  render() {
    const content = (index) => this.props.activeIdx === index ? 'reveal' : 'hide';
    return (
      <div id="gallery" className="col-md-7">
        <div className={`img-scroll wedding-gallery ${content(0)}`}>
          <div className="img set1">

          </div>
          <div className="img set2">

          </div>
          <div className="img set1">

          </div>
        </div>
        <div className={`img-scroll portraits-gallery ${content(1)}`}>
          <div className="img set2">

          </div>
          <div className="img set1">

          </div>
          <div className="img set2">

          </div>
        </div>
        <div className={`img-scroll sessions-gallery ${content(2)}`}>
          <div className="img set1">

          </div>
          <div className="img set2">

          </div>
          <div className="img set1">

          </div>
        </div>
        <div className={`img-scroll auto-gallery ${content(3)}`}>
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
