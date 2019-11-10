require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('./router').initRouter(app);

mongoose.connect(process.env.mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(8000);