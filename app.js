const url = require('url');
const express = require('express');
const app = express();
const mongoClient = require('mongodb');

require('./router').initRouter(app);

mongoClient.connect(
    "mongodb://localhost/test", 
    {useUnifiedTopology: true}, 
    require('./handlers/mongoDb').connection
)

app.listen(8000);