//imports
const express = require('express');

const app = express();

//routes
app.get('/', (req, res) => res.json({}));

//launch
var port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening...'));
console.log(port);
