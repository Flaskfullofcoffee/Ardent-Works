import React, { Component } from 'react'
import './App.css'

class Bar extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     active: true
  //   }
  // }

  render() {
    const content = (index) => this.props.activeIndex === index ? 'reveal' : 'hide';
    return (
      <div>
        <p className={content(0)}>Button 1 has been clicked</p>
        <p className={content(1)}>Button 2 has been clicked</p>
      </div>
      // <div id="gallery" className="col-md-7">
      //   <div className="img-scroll wedding-gallery">
      //     <div className="img set1">
      //
      //     </div>
      //     <div className="img set2">
      //
      //     </div>
      //     <div className="img set3">
      //
      //     </div>
      //   </div>
      //   <div className="img-scroll portraits-gallery hide">
      //     <div className="img set1">
      //
      //     </div>
      //     <div className="img set2">
      //
      //     </div>
      //     <div className="img set3">
      //
      //     </div>
      //   </div>
      //   <div className="img-scroll sessions-gallery hide">
      //     <div className="img set1">
      //
      //     </div>
      //     <div className="img set2">
      //
      //     </div>
      //     <div className="img set3">
      //
      //     </div>
      //   </div>
      //   <div className="img-scroll auto-gallery hide">
      //     <div className="img set1">
      //
      //     </div>
      //     <div className="img set2">
      //
      //     </div>
      //     <div className="img set3">
      //
      //     </div>
      //   </div>
      // </div>
    )
  }
}
export default Bar;
