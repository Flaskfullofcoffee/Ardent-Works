import React, { Component } from 'react'
import GalleryMinified from './gallery.js'
import './App.css'


class PortfolioMinified extends Component {
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
    const changeStatus = (idx) => this.state.activeIdx === idx ? 'select' : null;

    return (
      <div id="portfolio-min" className="row">
        <div id='weddings-min' className={`btnWrapper`}>
          <h2 className='tab-title text-center'>Weddings</h2>
        </div>
        <div id='portraits-min' className={`btnWrapper`}>
          <h2 className='tab-title text-center'>Portraits</h2>
        </div>
        <div id='sessions-min' className={`btnWrapper`}>
          <h2 className='tab-title text-center'>Sessions</h2>
        </div>
        <div id='auto-min' className={`btnWrapper`}>
          <h2 className='tab-title text-center'>Auto</h2>
        </div>
        <GalleryMinified />
      </div>
    );
  }
}

export default PortfolioMinified;
