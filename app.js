const express = require('express');

const app = express();

app.use('/api/v1/cars', carRouter);

module.exports = app;