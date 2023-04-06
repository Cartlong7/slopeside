import React from 'react';
import copperMountain from '../../public/copperMountain.png';

function Copper () {
  return (
    <div className='resort-conditions'>
      <div className='remove-resort'>
        <button>Remove resort</button>
      </div>
      <div className='mountain-name'>
        <img src={copperMountain} style={{width: '10rem', height: '8rem'}} />
        <div className='location'>
          <h3>Copper Mountain</h3>
          <p>Frisco, CO, USA</p>
        </div>
      </div>
      <h4>Current Conditions</h4>
      <div className='weather-props'>
        <p>Temperature</p>
        <p>Wind Speed</p>
        <p>Precipitation Potential</p>
        <p>Detailed Forecast</p>
      </div>
    </div>
  );
}

export default Copper;