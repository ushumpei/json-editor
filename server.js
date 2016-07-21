var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/app/static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'app/static/index.html');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);
