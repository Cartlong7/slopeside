const express = require('express');
const path = require('path');
const weatherController = require('./controllers.weatherController')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3000;

app.use(cors());