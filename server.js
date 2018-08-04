var express = require('express'),
    app = express(),
    port = process.env.PORT || 3200,
    mongoose = require('mongoose'),
    Card = require('./api/models/cardModel'),
    Column = require('./api/models/columnModel'),
    Board = require('./api/models/boardModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TrelloDb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/trelloApiRoute');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);