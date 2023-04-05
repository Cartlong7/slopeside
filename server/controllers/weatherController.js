const weatherController = {};

/*
Understanding the flow of data:

React Client -> Express Server -> weather.gov API -> Express Server -> MongoDB Database -> Express Server -> React Client

*/

// Controller will be the middleware that will provide the frontend weather data through an api call

weatherController.getWeather = (req, res, next) => {
  console.log('hello');

  /* functionality here:
      fetch weather data from api based on the key used on the front end
      save the data to res.locals
      - this can be sent as an object that contains all of the elements that were outlined in the schema
      - want to send temp, wind, precip, etc...
      - this has to be accomplished through an api call to our server based on the React Router that is used... ????
      - the data provided by res.locals can then be rendered in React
      - where the logic goes is the challenge
  */

  try {

    res.locals.hi = 'hello there.';
    return next();
  }
  catch (err) {
    return next(err);
  }
};

module.exports = weatherController;