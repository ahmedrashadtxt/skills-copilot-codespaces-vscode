// Create web server
// Run: node comments.js
// Output: http://localhost:8080
// Open in browser to see the comments

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type': 'text/html'});

    // Read the file
    fs.readFile('comments.html', function(err, data) {
        if (err) {
            response.writeHead(404);
            response.write('Not Found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}).listen(8080); // server listens on port 8080

// Console will print the message
console.log('Server running at http://