import React, { Component } from 'react';
import './App.css';


class GalleryMinified extends Component {



  render() {

    const changeStatus = (idx) => this.props.activeIndex === idx ? 'reveal' : 'hide';
    return (
      <div id="gallery-min">
      <span className='return text-center'>Return</span>
        <div className={`img-scroll wedding-gallery ${changeStatus(0)}`}>
          <li className="img set1"></li>
          <li className="img set2"></li>
          <li className="img set1"></li>
        </div>
        <div className={`img-scroll portraits-gallery ${changeStatus(1)}`}>
          <li className="img set1"></li>
          <li className="img set2"></li>
          <li className="img set1"></li>
        </div>
        <div className={`img-scroll sessions-gallery ${changeStatus(2)}`}>
          <li className="img set1"></li>
          <li className="img set2"></li>
          <li className="img set1"></li>
        </div>
        <div className={`img-scroll auto-gallery ${changeStatus(3)}`}>
          <li className="img set1"></li>
          <li className="img set2"></li>
          <li className="img set1"></li>
        </div>
      </div>
    );
  }
}

export default GalleryMinified;
