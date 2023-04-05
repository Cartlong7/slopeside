const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// set a schema for weather collection
// include current temperature, precip, windspeed, icon, short and detailed forecasts
const weatherSchema = new Schema({
  temperature : String,
  probabilityOfPrecipitation : Number,
  windSpeed : String,
  icon : String,
  shortForecast: String,
  detailedForecast : String
});

const Weather = mongoose.model('weather', weatherSchema);