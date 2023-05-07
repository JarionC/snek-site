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
        <div className="social-container">
            <a className="twitter-link" href="https://twitter.com/nosteponfinance" target="_blank">
                <div className="twitter-container">

                </div>
            </a>
            <a className ="telegram-link" href="https://t.me/nosteponsnekcoin" target="_blank">
                <div className="telegram-container">

                </div>
            </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
