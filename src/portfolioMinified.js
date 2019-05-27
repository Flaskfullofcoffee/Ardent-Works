import React, { Component } from 'react'
import GalleryMinified from './galleryMinified.js'
import './App.css'


class PortfolioMinified extends Component {
  constructor() {
    super()
    this.state = {
      activeIdx: -1
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(idx) {
    return () => this.setState({ activeIdx: idx });
  }

  render() {
    return (
      <section id='portfolio-min'>
        <div id="portfolio-info-min" className="row">
          <div id='weddings-min' className={`btnWrapper`} onClick={this.handleClick(0)}>
            <h2 className='tab-title text-center'>Weddings</h2>
          </div>
          <div id='portraits-min' className={`btnWrapper`} onClick={this.handleClick(1)}>
            <h2 className='tab-title text-center'>Portraits</h2>
          </div>
          <div id='sessions-min' className={`btnWrapper`} onClick={this.handleClick(2)}>
            <h2 className='tab-title text-center'>Sessions</h2>
          </div>
          <div id='auto-min' className={`btnWrapper`} onClick={this.handleClick(3)}>
            <h2 className='tab-title text-center'>Auto</h2>
          </div>
        </div>
        <GalleryMinified activeIdx={this.state.activeIdx} />
      </section>
    )
  }
}

export default PortfolioMinified;
