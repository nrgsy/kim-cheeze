import React, { Component } from 'react';
import network from '../network.gif'
import './social.css'

class Social extends Component {

  render() {
    return (
      <div className="social-center">
          <img src={network} alt="social-influencer" />
      </div>
    );
  }
}

export default Social;