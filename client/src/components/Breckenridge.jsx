import React, { useState, useEffect } from 'react';
import breck from '../../public/breck-logo.png';

function Breckenridge() {

  const [conditions, setConditions] = useState(null);

  useEffect(() => {
    fetch('/api/weather?name=Breckenridge')
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
        <img src={breck} style={{width: '11rem', height: '5rem'}} />
        <div className='location'>
          <h3>Breckenridge</h3>
          <p>Breckenridge, CO, USA</p>
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

export default Breckenridge;


