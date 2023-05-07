import React, { Component } from 'react';
import '../styles/home.css';

class HomePage extends Component {

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
      <div className="container">
        <section className="intro">
          <div className="media-container">
            <div className="main-img"></div>
            <div className="main-btn">Buy on Polygon Soon!</div>
            <div className="second-btn">SnekNFT Marketplace In Progress!</div>
          </div>
          <div className="text-container">
            <div className="title">The Coin of Liberty and Prosperity</div>
            <div className="body">
            Welcome to the No Step On Snek ($SNEK) community! Our meme coin is built on the values of financial freedom, liberty, and the power of decentralized finance. Our mission is to empower individuals with a digital asset that represents the spirit of independence and resilience.
            <br></br><br></br>
Just as the snake in the iconic "Don't Tread on Me" symbol represents a united stand against tyranny, the No Step On Snek ($SNEK) coin is designed to protect and grow your financial assets in a decentralized manner. We believe in the strength of the community and the potential for collective wealth creation.
<br></br><br></br>
In our pursuit of fairness and equal opportunities for all, we are conducting a stealth launch of the $SNEK token. This approach ensures that everyone has a chance to be a part of the project from the very beginning, promoting inclusivity and transparency.
<br></br><br></br>
As part of our commitment to these values, we are creating the SnekNFT Marketplace, a platform for buying, selling, and trading exclusive, freedom-themed NFTs. This vibrant marketplace gives artists and collectors a space to express their passion for liberty and financial independence while contributing to the growth and success of the $SNEK community.
<br></br><br></br>
Join us on this exciting journey towards financial independence and be a part of the $SNEK revolution! Together, we will make the No Step On Snek ($SNEK) coin and the SnekNFT Marketplace symbols of prosperity and freedom.

</div>
          </div>
        </section>
        
      </div>
    );
  }
}

export default HomePage;
