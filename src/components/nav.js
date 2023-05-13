import React, { Component } from 'react';
import '../styles/nav.css';

class NavBar extends Component {

    constructor() {
        super();
        this.state = {
          showText: false,
        };
      }
    
      toggleText = () => {
        this.setState({ showText: !this.state.showText });
      };


  render() {
    return (
      <div className="nav-container">
        <div className="logo-container">
            <div className="logo-box"></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
