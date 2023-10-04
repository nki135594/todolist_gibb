var express = require('express');
var app = express();

app.get('/fgf', function (req, res) {
  res.send('Hello!'); // This will serve your request to '/'.
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
 });
