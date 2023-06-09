import React, { useEffect, useState } from 'react';
import copperMountain from '../../public/copperMountain.png';

function Copper () {

  const [conditions, setConditions] = useState(null);

  useEffect(() => {
    fetch('/api/weather?name=Copper Mountain')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => setConditions(data))
      .catch(error => console.log(error));
  }, []);

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
        <h4>{conditions.temperature}&deg;F</h4>
        <p>Wind Speed</p>
        <h4>{conditions.windSpeed}</h4>
        <p>Detailed Forecast</p>
        <h5>{conditions.detailedForecast}</h5>
      </div>
    </div>
  );
}

export default Copper;