const express = require('express');
const bodyParser = require('body-parser');
const db = require('quick.db')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();  

var urlRouter  = require('./routes/url.js')
var createRouter  = require('./routes/createurl.js')

router.get('/', function(req, res) {
  res.sendFile("/home/runner/Hyped-Url-Shortener/index.html");
});

app.use('/r/', urlRouter)
app.use('/createurl', createRouter)
app.use('/', router)


let port = 1337

app.listen(port);
console.log('Magic happens on port ' + port);