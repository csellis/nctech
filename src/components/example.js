import React from 'react'
import Particles from 'react-particles-js'

import './devices.min.css'
import './base.css'

const particlesOptions = {
  particles: {
    number: {
      value: 50,
    },
    color: {
      // value: '#fbd38d',
      value: '#F6AD55',
      // value: '#333',
    },
    size: {
      value: 3,
    },
    line_linked: {
      enable: true,
      color: '#F6AD55',
      width: '1',
      opacity: '1',
    },
  },
}

const example = ({ latest }) => (
  <div className="flex-1 example">
    <div className="example__deviceContainer">
      <Particles className="particles" params={particlesOptions} />
      <div className="marvel-device iphone8 silver">
        <div className="notch">
          <div className="camera"></div>
          <div className="speaker"></div>
        </div>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="bottom-bar"></div>
        <div className="volume"></div>
        <div className="overflow">
          <div className="shadow shadow--tr"></div>
          <div className="shadow shadow--tl"></div>
          <div className="shadow shadow--br"></div>
          <div className="shadow shadow--bl"></div>
        </div>
        <div className="inner-shadow"></div>
        <div className="screen">
          <iframe
            style={{ height: '667px', width: '375px' }}
            title="Iphone Preview"
            src={latest.html}
          ></iframe>
        </div>
      </div>
    </div>
  </div>
)

export default example
