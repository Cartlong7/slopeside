const mongoose = require('mongoose');

// connection to MongoDB with error handling
main().catch(error => console.log(`Error: ${error}, failed to connect to DB...`));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/weather', {
    dbName: 'weather'
  });
  console.log('Connection to DB has been established.');
}
  


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