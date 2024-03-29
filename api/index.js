var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type', 'application/json');
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.send('Hello World!');
});

require('./routes/routes.js')(app);
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});