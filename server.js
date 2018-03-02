// DEPENDENCIES AND SETUP
// ===============================================

var express = require('express'),
  app = express(),
  path = require('path'),
  port = Number(process.env.PORT ||8080);

// ROUTES
// ===============================================

// Define the home page route.
  app.use(express.static(path.join(__dirname, 'public')));
// START THE SERVER
// ===============================================

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
