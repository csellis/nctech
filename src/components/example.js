import React from 'react'
import './devices.min.css'

const example = () => (
  <div className="flex-1 example">
    <div className="example__deviceContainer">
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
            src="https://mailchi.mp/5ab32117f683/nc-tech-awards-announced-lots-happening-next-week"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
)

export default example
