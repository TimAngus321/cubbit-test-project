import { render } from '@testing-library/react';
import { setupMaster } from 'cluster';
import React, { useEffect } from 'react';
import { Component, useState } from 'react';
import cubbitLogo from "./Assets/light.png";
import PolygonBlue from './Assets/Polygon-blue.png';
import PolygonGrey from './Assets/Polygon-grey.svg';

const polygonBlue = {
  backgroundImage: `url(${PolygonBlue})`,
  backgroundRepeat: 'no-repeat',
}

const polygonGrey = {
  backgroundImage: `url(${PolygonGrey})`,
  backgroundRepeat: 'no-repeat',
}

const image = {
  width: '107.33px',
  height: '40px',
  marginTop: '34px',
}

const Header = () => {
  const getUrl = window.location.pathname;
  let [PolygonColor, setPolygonColor] = useState('');

  return (
    <div className="header-component">
      <div className="cubbit-logo">
        <img 
        src={cubbitLogo}
        alt="cubbit logo"
        style={image}
        />
        </div>
        <div 
        className="checkout-header"
        >
      <div className="checkout-items">
        <span 
        className="polygon-1"
        style={polygonBlue}
        >
        1
        </span>
        <span className="checkout">
         Checkout
        </span>
      </div>
      <div className="confirmation-items">
        <span
        className="polygon-2"
        style={polygonGrey}
        >
          2
        </span>
        <span className="confirmation">
         Confirmation
        </span>
      </div>  
     </div>
    </div>
  )
}

export default Header;
