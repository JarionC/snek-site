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
                    <div className="main-btn">
                        <div className="pancake-img"></div>
                       <div className="btn-text">Buy on PancakeSwap Soon</div> 
                        </div>
                    <div className="second-btn">SnekNFT Marketplace In Progress</div>
                </div>
                <div className="text-container">
                    <div className="title">The Coin of Liberty and Prosperity</div>
                    <div className="body">
                    Welcome to the No Step On Snek ($SNEK) community! Our meme coin is built on the values of financial freedom, liberty, and the power of decentralized finance. Our mission is to empower individuals with a digital asset that represents the spirit of independence and resilience.
                    <br></br><br></br>
                    Just as the snake in the iconic "Don't Tread on Me" symbol represents a united stand against tyranny, the No Step On Snek ($SNEK) coin is designed to protect and grow your financial assets in a decentralized manner. We believe in the strength of the community and the potential for collective wealth creation.
                    <br></br><br></br>
                    Join us on this exciting journey towards financial independence and be a part of the $SNEK revolution! Together, we will make the No Step On Snek ($SNEK) coin and the SnekNFT Marketplace symbols of prosperity and freedom.

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
                        <a className ="bscscan-link" href="https://bscscan.com/" target="_blank">
                            <div className="bscscan-container">

                            </div>
                        </a>
                        <a className ="dextools-link" href="https://www.dextools.io/" target="_blank">
                            <div className="dextools-container">

                            </div>
                        </a>
                    </div>
                </div>
                </div>
                
            </div>

            <div className="container-two">
                <div className="title-two">
                    Road Map
                </div>
                <div className="subtitle">
                As part of our commitment to these values, we are creating the SnekNFT Marketplace, a platform for buying, selling, and trading exclusive, freedom-themed NFTs. This vibrant marketplace will give artists and collectors a space to express their passion for liberty and financial independence while contributing to the growth and success of the $SNEK community.
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

        <div className="container-four">
            <div className="title-four">
                How To Buy
            </div>
                <div className="subtitle">
                In our pursuit of fairness and equal opportunities for all, we are conducting a stealth launch of the $SNEK token. This approach ensures that everyone has a chance to be a part of the project from the very beginning, promoting inclusivity and transparency.
                </div>
            <div className="buy-steps-container">
                <div className="buy-step">
                    <div className="step-title">
                        1. Setup Your Wallet
                    </div>
                    <div className="step-body">
                    Start by downloading a crypto wallet. MetaMask or Trust Wallet are great choices and they work well with Binance Smart Chain. They're up for grabs on both App Store and Google Play. If you're on a desktop, the MetaMask Chrome extension from MetaMask.io is the way to go.
                    </div>
                </div>
                <div className="buy-step">
                    <div className="step-title">
                        2. Stock Up on BNB
                    </div>
                    <div className="step-body">
                    To get $SNEK, you'll need BNB in your wallet. You can pick up BNB directly in MetaMask, transfer from another wallet, or buy on an exchange and transfer it to your wallet. Don't forget, you need to be on the Binance Smart Chain network.
                    </div>
                </div>
                <div className="buy-step">
                    <div className="step-title">
                        3. Connect to PancakeSwap
                    </div>
                    <div className="step-body">
                    You can link up directly to PancakeSwap. If you're using a different browser, just make sure you're on the official PancakeSwap site, select the token, and paste in the official $SNEK token address: ___.
                    </div>
                </div>
                <div className="buy-step">
                    <div className="step-title">
                        4. Swap BNB for $SNEK
                    </div>
                    <div className="step-body">
                    Once you've got your BNB, you can swap it for $SNEK. Just remember to keep enough BNB for those gas fees. Check the transaction details, and when you're ready, hit confirm. And just like that, you're part of the $SNEK family! Welcome to the journey towards financial freedom.
                    </div>
                </div>
            </div>
        </div>


        


        <div className="container-three">
                <div className="title-three">
                    Tokenomics
                </div>
                <div className="subtitle">
                Get ready to strike at an opportunity that's shedding the usual constraints! $SNEK is slithering a unique path, embracing a tokenomics structure that champions fairness and future growth. With no taxes and a commitment to liquidity, we're setting the stage for an exciting journey into the wilderness of financial freedom. Read on, and find out why $SNEK is the choice for the daring and independent!
                </div>
                <div className="inner-three">
                    <div className="token-snek-one"></div>
                    <div className="roadmap-section token">
                        <ul className="roadmap-list tokenomics">
                            <li className="roadmap-list-item">No Taxes. Period.</li>
                            <li className="roadmap-list-item">92% of tokens sent to liquidity.</li>
                            <li className="roadmap-list-item">8% of tokens for CEX exchange listings, bridges.</li>
                            <li className="roadmap-list-item">LP tokens will be burned.</li>
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
