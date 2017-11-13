var express = require('express');

// Create our app.
var app = express();

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    next();

  // if (req.headers['x-forwarded-proto'] === 'https') {
  //   res.redirect('http://' + req.hostname + req.url);
  // } else {
  //next();
  // }
});

app.use(express.static('public'));

app.listen(PORT, function() {  
  console.log('Express server is up on port ' + PORT);
});
