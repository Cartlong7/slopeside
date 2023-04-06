const axios = require('axios');
const Weather = require('../models/weatherModel');
const resorts = require('../resorts');

const weatherController = {};


/*
Understanding the flow of data:

React Client -> Express Server -> weather.gov API -> Express Server -> MongoDB Database -> Express Server -> React Client

*/

// Controller will be the middleware that will provide the frontend weather data through an api call
  
/* functionality here:
  fetch weather data from api based on the key used on the front end
  save the data to res.locals
  - this can be sent as an object that contains all of the elements that were outlined in the schema
  - want to send temp, wind, precip, etc...
  - this has to be accomplished through an api call to our server based on the React Router that is used... ????
  - the data provided by res.locals can then be rendered in React
  - where the logic goes is the challenge
  */
 

weatherController.getWeather = async (req, res, next) => {
  // const { latitude, longitude } = req.query;
  const { name } = req.query;
  // console.log(req.query);
  try {
    const resort = resorts.find((r) => r.name === name);

    console.log(resort);

    if (!resort) {
      throw new Error('Resort not found');
    }

    const url = `https://api.weather.gov/gridpoints/${resort.gridOffice}/${resort.gridX},${resort.gridY}/forecast`;

    console.log(url);
    // console.log(resort.gridOffice);
    // console.log(resort.gridX);
    // console.log(resort.gridY);

    const response = await axios.get(url);

    const weatherData = {
      temperature: response.data.properties.periods[0].temperature,
      probabilityOfPrecipitation: response.data.properties.periods[0].probabilityOfPrecipitation.value,
      windSpeed: response.data.properties.periods[0].windSpeed,
      icon: response.data.properties.periods[0].icon,
      shortForecast: response.data.properties.periods[0].shortForecast,
      detailedForecast: response.data.properties.periods[0].detailedForecast,
    };

    // const temperature = response.data.properties.periods[0].temperature;


    // Somehow this query to my database is breaking the middleware functionality because it works when its commented out.

    // const updatedWeather = await Weather.create({temperature});
    
    // console.log(updatedWeather);

    res.locals.resort = weatherData;
    console.log(res.locals.resort);

    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred in weatherController.getWeather' }
    });
  }
};

module.exports = weatherController;