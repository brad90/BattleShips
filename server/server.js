const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));
app.listen(port);
