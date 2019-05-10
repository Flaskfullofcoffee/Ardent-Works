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
     activeIdx: -1
   };
   this.handleClick = this.handleClick.bind(this)
 }

 handleClick(idx) {
   return () => this.setState({ activeIdx: idx });
 }

 render() {
     const getStatus = (idx) => this.state.activeIdx === idx ? 'active' : 'inActive';

     return (
         <div>
           {
             Array.from(Array(20)).map((v, i) => {
               return (
                 <h1 onClick={this.handleClick(i)} className={getStatus(i)}>{getStatus(i)}</h1>
               )
             })
           }
           // <h1 onClick={this.handleClick(0)} className={getStatus(0)}>{getStatus(0)}</h1>
           // <h1 onClick={this.handleClick(1)} className={getStatus(1)}>{getStatus(1)}</h1>
           // <h1 onClick={this.handleClick(2)} className={getStatus(2)}>{getStatus(2)}</h1>
           // <h1 onClick={this.handleClick(3)} className={getStatus(3)}>{getStatus(3)}</h1>
         </div>
     )
 }
}














//   constructor() {
//       super()
//         this.state = {
//             active: true,
//             inActive: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }
//
//   render() {
//     return (
//       <section id="portfolio" className="row">
//           <div id="portfolio-info" className="col-md-5 d-flex flex-column">
//             <ul className="text-center d-flex flex-column justify-content-center tabList">
//               <div id="weddings" className="tab active flex-fill" onClick={this.handleClick}>
//                 <li className="tab-summary">Weddings</li>
//                 <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//               </div>
//               <div id="portraits" className="tab in-active flex-fill" onClick={this.handleClick}>
//                 <li className="tab-summary">Portraits</li>
//                 <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//               </div>
//               <div id="sessions" className="tab in-active flex-fill" onClick={this.handleClick}>
//                 <li className="tab-summary">Mini-Sessions</li>
//                 <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//               </div>
//               <div id="auto" className="tab in-active flex-fill" onClick={this.handleClick}>
//                 <li className="tab-summary">Automotive</li>
//                 <p className="tab-summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//               </div>
//             </ul>
//           </div>
//           <div id="portfolio-min" className="row">
//             <div id="active" className="col-12 d-flex flex-column">
//                 <button className="btn gallery-link">weddings</button>
//             </div>
//             <div className="col-12 d-flex flex-column">
//                 <button className="btn gallery-link">portraits</button>
//             </div>
//             <div className="col-12 d-flex flex-column">
//                 <button className="btn gallery-link">mini-sessions</button>
//             </div>
//             <div className="col-12 d-flex flex-column">
//                 <button className="btn gallery-link">mini-sessions</button>
//             </div>
//           </div>
//           <Bar />
//         </section>
//     )
//   }
// }
export default Foo;
