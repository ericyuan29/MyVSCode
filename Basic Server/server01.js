/*
var http = require('http');
var fs = require('fs');

//Always build a 404 page
function send404Resonse(response) {
  response.writeHead(404, {"Context-Type": "text/plain"});
  response.write("Error 404");
  response.end();
}

//Handle a request

function onRequest(request, response) {
  if (request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {"Context-Type": "text/html"});
    fs.createReadStream("C:/Users/BB/Documents/workspace/MyVSCode/Basic Server/index.html").pipe(response);

  } else {
    send404Resonse(response);
  }
};

http.createServer(onRequest).listen(8881);
console.log("Server Running...");
*/

var connect = require('connect');
var http = require('http');

var app = connect();

/*
function doFirst(request, response, next) {
  console.log("Apple");
  next();
}

function doSecond(request, response, next) {
  console.log("Sky");
}

app.use(doFirst);
app.use(doSecond);
*/
function profile(request, response) {
  console.log("User request Profile")
}

function about(request, response) {
  console.log("User Request the About");
}
app.use('/profile', profile);
app.use('/About', about);

http.createServer(app).listen(8887);
console.log("server is running...");

