var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format if a GET request
    is sent to the '/listings' path. Otherwise, it should send a 404 error.

    HINT: explore the request object and its properties
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
   if(parsedUrl.pathname == '/listings' && request.method == 'GET'){
     response.writeHead(200, {'Content-Type': 'JSON'});
     response.end(listingData);
   }
   else {
     response.writeHead(404);
     response.end('Bad gateway error');
   }

};

// a server is created, but not started
server = http.createServer(requestHandler);
fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */
   listingData = data;

   // the server is now started, listening for requests on port 8080
   server.listen(port, function() {
     //once the server is listening, this callback function is executed
     console.log('Server listening on: http://127.0.0.1:' + port);
   });
});
