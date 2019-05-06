import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
  constructor(...args) {
    super(...args)
    this.navRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    let element = this.navRef.current;
    let test = document.getElementById('test');
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // test.classList.add('foobar')
    }
  }



  render() {
    return (
      <div className="nav-wrapper">
        <nav id='test' className="navbar navbar-fixed-top" ref={this.navRef}>
          <a className="flex-fill text-center nav-link" href="#!">About</a>
          <a className="flex-fill text-center nav-link" href="#!">Portfolio</a>
          <a className="flex-fill text-center nav-link" href="#!"><span className="logo">A\W</span></a>
          <a className="flex-fill text-center nav-link" href="#!">Blog</a>
          <a className="flex-fill text-center nav-link" href="#!">Contacts</a>
        </nav>
      </div>
    )
  }
}
export default Navigation;
