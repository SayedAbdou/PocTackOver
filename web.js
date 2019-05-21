var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Subdomain TakeOver PoC by Aramx4');
});

app.listen(process.env.PORT || 3000);
