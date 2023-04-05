import React from 'react';
import '../styles/ResortCard.css';

function ResortCard(props) {
  const { resort } = props;
  console.log(props);
  return (
    // resort properties will have to be updated to reflect their organization in the card
    // create multiple divs to hold property data in sanctioned areas of the card
    <div className='resort-conditions'>
      <p>{resort.location}</p>
      <p>{resort.weatherData.properties.periods[0].detailedForecast}</p>
      <h4>Current Conditions</h4>
    </div>
  );
} 


export default ResortCard;

/*
      <p>{resort.temperature}</p>
      <p>{resort.probabilityOfPrecipitation}</p>
      <p>{resort.windSpeed}</p>
      <p>{resort.icon}</p>
      <p>{resort.shortForecast}</p>
      <p>{resort.detailedForecast}</p>
*/