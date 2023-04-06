const express = require('express');
const path = require('path');
const weatherController = require('./controllers/weatherController.js');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3000;

app.use(cors());
app.use(express.json());

const URI = 'mongodb+srv://cartlong:E4UwlcV8xMOnmle2@slopeside.ael6zmo.mongodb.net/?retryWrites=true&w=majority';
// connection to MongoDB with error handling
async function connectToDb() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'weather'
    });
    console.log('Connection to DB has been established.');
  } catch (error) {
    console.log(`Error: ${error}, failed to connect to DB...`);
  }
}

// Call the connectToDb function to connect to MongoDB
connectToDb();

// ADD ROUTES HERE (1 GET, 1 POST, 1 UPDATE, 1 DELETE)
// Route to weatherController middleware to establish connection to mongoDB and serve weather data 

// router testing
app.get('/api/weather',
  weatherController.getWeather,
  (req, res) => {
    res.status(200).send(res.locals.resort);
  });



// route handler for unknown routes
app.use((req, res) => res.status(404).send('Error: request to unknown route'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


//starting server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;