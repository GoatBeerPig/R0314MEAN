var http = require("http");
http.createServer(function(request, response) {

    if (request.url === "/helloworld") {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write("<h1>Hello world!</h1>");
    }
    else if (request.url === "/homepage") {
        response.writeHead(200, {'Content-type': 'text/plain'});
        response.write("HOMEPAGE\n");
    }


    //Send the response body hello world, kirjoittaa hello world
    response.end("Hello world, again!");
}).listen(8081); //listenaa portin 8081

//printataan consoliin yhteyden muodostuoessa,testihoh
console.log('Server running at http://127.0.0.1:8081/');
