const weatherController = {};

// Controller will be the middleware that will provide the frontend weather data through an api call


weatherController.getWeather = (req, res, next) => {
    console.log('hello');
    try {
        return next();
    }
    catch (err) {
        return next(err);
    }
}

module.exports = weatherController;