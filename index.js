//imports
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;
//creating app
const app = express();
//bodyParser configuration
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());

//routes
app.get('/', (req, res) => res.json({}));
app.use('/api/', apiRouter);
//launch
var port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening...'));
console.log(port);
