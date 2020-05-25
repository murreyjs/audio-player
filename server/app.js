const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const tracksRoutes = require('./routes/tracks');

app.use('/tracks', tracksRoutes);

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log(mongoose.connection);
    }
);

app.listen(3000);
