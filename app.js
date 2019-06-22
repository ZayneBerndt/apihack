var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
mogoose = require('mongoose'), 
Task = require('./api/models/todoListModel'), //created model loading here
bodyParser = require('body-parser');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connection('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extend:true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
