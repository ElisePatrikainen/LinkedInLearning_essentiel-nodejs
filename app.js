const url = require('url');
const express = require('express');
const app = express();
require('./router').initRouter(app);

app.listen(8000);