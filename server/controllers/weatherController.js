const axios = require('axios');
const Weather = require('../models/weatherModel');
const resorts = require('../resorts');

const weatherController = {};

/*
Understanding the flow of data:

React Client -> Express Server -> weather.gov API -> Express Server -> MongoDB Database -> Express Server -> React Client

*/

// Controller will be the middleware that will provide the frontend weather data through an api call

// weatherController.getWeather = (req, res, next) => {

//   const { latitude, longitude } = req.query;

//   try {
//     // const response = axios.get(`https://api.weather.gov/points/${latitude},${longitude}/forecast`);
//     // const response = axios.get(`https://api.weather.gov/points/${resorts.name.latitude},${resorts.name.longitude}/forecast`);
//     console.log(req.query);
//     const response = axios.get('https://api.weather.gov/gridpoints/BOU/22,54/forecast');
//     const resort = Weather.findOneandUpdate({ latitude, longitude }, { weatherData: response.data }, { upsert: true, new: true });
//     res.locals.resort = resort;
//     return next();
//   }
//   catch (err) {
//     return next(err);
//   }
// };

// module.exports = weatherController;

  
/* functionality here:
  fetch weather data from api based on the key used on the front end
  save the data to res.locals
  - this can be sent as an object that contains all of the elements that were outlined in the schema
  - want to send temp, wind, precip, etc...
  - this has to be accomplished through an api call to our server based on the React Router that is used... ????
  - the data provided by res.locals can then be rendered in React
  - where the logic goes is the challenge
  */
 
 
// api call to weather api using latitude and longitude

weatherController.getWeather = async (req, res, next) => {
  const { latitude, longitude } = req.query;

  try {
    const resort = resorts.find(
      (r) => r.latitude === latitude && r.longitude === longitude
    );
    if (!resort) {
      throw new Error('Resort not found');
    }

    const url = `https://api.weather.gov/gridpoints/${resort.gridOffice}/${resort.gridX},${resort.gridY}/forecast`;
    
    const response = await axios.get(url);

    const weatherData = {
      temperature: response.data.properties.periods[0].temperature,
      probabilityOfPrecipitation:
        response.data.properties.periods[0].probabilityOfPrecipitation,
      windSpeed: response.data.properties.periods[0].windSpeed,
      icon: response.data.properties.periods[0].icon,
      shortForecast: response.data.properties.periods[0].shortForecast,
      detailedForecast: response.data.properties.periods[0].detailedForecast,
    };

    const updatedWeather = await Weather.findOneAndUpdate(
      { latitude, longitude },
      { weatherData },
      { upsert: true, new: true }
    );

    res.locals.resort = updatedWeather;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = weatherController;