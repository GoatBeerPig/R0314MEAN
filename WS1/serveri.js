var http = require("http");
http.createServer(function(request, response) {
    //Send the http header. Http status 200 tarkoittaa että status OK
    //kirjotusasu
    response.writeHead(200, {'Content-type': 'text/html'});

    response.write("<h1>Tervetullooo!!!</h1>\n");

    

    //Send the response body hello world, kirjoittaa hello world
    response.end("Hello world!");
}).listen(8081); //listenaa portin 8081

//printataan consoliin yhteyden muodostuoessa
console.log('Server running at http://127.0.0.1:8081/');


