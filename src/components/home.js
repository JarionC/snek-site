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
        <div className="wrapper">
            <div className="container">
                <div className="intro">
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
                </div>
                
            </div>

            <div className="container-two">
                <div className="title-two">
                    Road Map
                </div>
                <div className="inner-two">
                    <div className="roadmap-section one">
                        <div className="roadmap-title">Phase 1</div>
                        <ul className="roadmap-list">
                            <li className="roadmap-list-item">Launch</li>
                            <li className="roadmap-list-item">CoinGeck/CoinMarketCap Listings</li>
                            <li className="roadmap-list-item">2,000+ Holders</li>
                            <li className="roadmap-list-item">Get $SNEK Trending on social media</li>
                        </ul>
                    </div>
                    <div className="roadmap-section two">
                    <div className="roadmap-title">Phase 2</div>
                        <ul className="roadmap-list">
                            <li className="roadmap-list-item">Launch snekNFT Marketplace</li>
                            <li className="roadmap-list-item">Start $SNEK Newsletter</li>
                            <li className="roadmap-list-item">CEX Listings</li>
                        </ul>
                    </div>
                    <div className="roadmap-section three">
                    <div className="roadmap-title">Phase 3</div>
                        <ul className="roadmap-list">
                            <li className="roadmap-list-item">Physical Merchandise</li>
                            <li className="roadmap-list-item">Governance over the development and direction of our ecosystem</li>                    
                            <li className="roadmap-list-item">Launch $SNEK Social Hub</li>
                            <li className="roadmap-list-item">100,000+ Holders</li>
                            <li className="roadmap-list-item">T1 Exchange Listing</li>
                        </ul>
                    </div>
            </div>
        </div>


        <div className="container-three">
                <div className="title-three">
                    Tokenomics
                </div>
                <div className="inner-three">
                    <div className="token-snek-one"></div>
                    <div className="roadmap-section token">
                        <ul className="roadmap-list">
                            <li className="roadmap-list-item">No Taxes - Need we say more?</li>
                            <li className="roadmap-list-item">92% of tokens will be sent to liquidity.</li>
                            <li className="roadmap-list-item">8% of tokens will be held in a multi-sig wallet to be used for future CEX exchange listings, bridges, and liquidity pools.</li>
                            <li className="roadmap-list-item">LP tokens will be burned.</li>
                            <li className="roadmap-list-item">Contract will be renounced.</li>
                        </ul>
                    </div>
                    <div className="token-snek-two"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
