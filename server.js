const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const itemController = require('./server-side/itemController');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/public')));

app.post('/', itemController.createItem)

app.listen(3000)