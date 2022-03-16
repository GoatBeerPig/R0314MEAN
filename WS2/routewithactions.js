const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, response) {
    if (req.url === "/frontpage") {
        fs.readFile(__dirname+"/frontpage.html", function (error, res) {
            if (error) {
                response.writeHead(404);
                response.write('Contents you are looking are Not Found');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(res);
            }
             
            response.end();
        });
    }else if (req.url === "/contact") {
        fs.readFile(__dirname+"/contact.html", function (error, res) {
            if (error) {
                response.writeHead(404);
                response.write('Contents you are looking are Not Found');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(res);
            }
             
            response.end();
        });
    }
    else if (req.url === "/plaintext") {
        fs.readFile(__dirname+"/combiningfiles.txt", function (error, res) {
            if (error) {
                response.writeHead(404);
                response.write('Contents you are looking are Not Found');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.write(res);
            }
             
            response.end();
        });
    }
    
    
    else {
        response.end("Nothing to see here.")
    }
});
server.listen(8081);
 
console.log('Server Started listening on 8081');