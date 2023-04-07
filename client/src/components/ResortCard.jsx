import React from 'react';
import '../styles/ResortCard.css';
import vail from '../../public/vail.png';

function ResortCard(props) {
  const { conditions } = props;
  console.log(conditions);
  return (
    <div className='resort-conditions'>
      <div className='remove-resort'>
        <button>Remove resort</button>
      </div>
      <div className='mountain-name'>
        <img src={vail} style={{width: '100px', height: '5rem'}} />
        <div className='location'>
          <h3>Vail Resorts</h3>
          <p>Vail, CO, USA</p>
        </div>
      </div>
      <h4>Current Conditions</h4>
      <div className='weather-props'>
        <p>Temperature:</p>
        <h4>{conditions.temperature}&deg;F</h4>
        <p>Wind Speed</p>
        <h4>{conditions.windSpeed}</h4>
        <p>Detailed Forecast</p>
        <h5>{conditions.detailedForecast}</h5>
      </div>
    </div>
  );
} 

// function ResortCard(props) {
//   const { conditions } = props;
//   console.log(conditions);
//   return (
//     // resort properties will have to be updated to reflect their organization in the card
//     // create multiple divs to hold property data in sanctioned areas of the card
//     <div className='resort-conditions'>
//       <p>Anywhere, USA</p>
//       <p>{conditions.temperature}</p>
//       <h4>Current Conditions</h4>
//     </div>
//   );
// } 


export default ResortCard;