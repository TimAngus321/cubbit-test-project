import React from 'react';
import cubbitLogo from "./assets/light.png"
import PolygonBlue from './assets/Polygon-blue.png';
import PolygonGrey from './assets/Polygon-grey.svg';

// interface HelloTest {
//   text: string
// };

const image = {
  width: '107.33px',
  height: '40px',
  marginTop: '34px',
}

const polygonBlue = {
  backgroundImage: `url(${PolygonBlue})`,
  backgroundRepeat: 'no-repeat',
}

const polygonGrey = {
  backgroundImage: `url(${PolygonGrey})`,
  backgroundRepeat: 'no-repeat',
}

export const Header: React.FC = () => {
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