var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  db: {
    connectionString: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/hackhappiness'
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});