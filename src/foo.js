import React, { Component } from 'react'
import Bar from './bar.js'
import './App.css'

// class Foo extends Component {
//   constructor() {
//     super()
//     this.state = {
//       active: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//
//   handleClick(e) {
//     if (e.target.className.includes('inActive')) {
//       e.target.classList.add('active')
//       e.target.classList.remove('in-active')
//     }
//     // this.state.tabList.push(e.target.className);
//     // console.log(this.state.tabList);
//     // e.target.classList.add('active')
//     // e.target.classList.remove('in-active')
//   }
//
//   render() {
//     let status = this.state.active ? "active" : "inActive";
//       return (
//           <div>
//             <h1 onClick={this.handleClick} className={status}>{status}</h1>
//             <h1 onClick={this.handleClick} className={status}>{status}</h1>
//             <h1 onClick={this.handleClick} className={status}>{status}</h1>
//             <h1 onClick={this.handleClick} className={status}>{status}</h1>
//           </div>
//       )
//   }
//   }

// if an element is clicked it should change it's className to 'active' &
// change any other elements classname to 'inActive'


class Foo extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: -1
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(index) {
    return () => this.setState({ activeIndex: index });
  }

 render() {
     const getStatus = (index) => this.state.activeIndex === index ? 'active' : 'inActive';
     const content = (index) => this.state.activeIndex === index ? 'reveal' : 'hide';


     return (
         <div>
           <h1 onClick={this.handleClick(0)} className={getStatus(0)}>Button is {getStatus(0)}</h1>
           <h1 onClick={this.handleClick(1)} className={getStatus(1)}>Button is {getStatus(1)}</h1>
           <Bar activeIndex={this.state.activeIndex} />
         </div>
     )
 }
}


// constructor() {
//   super()
//   this.state = {
//     activeIdx: -1
//   };
//   this.handleClick = this.handleClick.bind(this)
// }
//
// handleClick(idx) {
//   return () => this.setState({ activeIdx: idx });
// }




// {
//   Array.from(Array(20)).map((v, i) => {
//     return (
//       <h1 onClick={this.handleClick(i)} className={getStatus(i)}>{getStatus(i)}</h1>
//     )
//   })
// }






// class Foo extends Component {
//  constructor() {
//    super()
//    this.state = {
//      activeIdx: -1
//    };
//  }
//
//  handleClick(idx) {
//    this.setState({ activeIdx: idx });
//  }
//
//  render() {
//      function getStatus(idx) {
//          return this.state.activeIdx === idx ? 'active' : 'inActive';
//      }
//      return (
//          <div>
//            <h1 onClick={this.handleClick.bind(0, this)} className={getStatus(0)}>{getStatus(0)}</h1>
//            <h1 onClick={this.handleClick.bind(1, this)} className={getStatus(1)}>{getStatus(1)}</h1>
//            <h1 onClick={this.handleClick.bind(2, this)} className={getStatus(2)}>{getStatus(2)}</h1>
//            <h1 onClick={this.handleClick.bind(3, this)} className={getStatus(3)}>{getStatus(3)}</h1>
//          </div>
//      )
//  }
// }




export default Foo;
