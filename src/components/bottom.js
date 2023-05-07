import React, { Component } from 'react';
import '../styles/bottom.css';

class BottomBar extends Component {

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
      <div className="bottom-container">
        <div className="bottom-text">
        © 2023 by No Step On Snek. All rights reserved!</div>
      </div>
    );
  }
}

export default BottomBar;
