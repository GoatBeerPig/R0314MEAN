const { write } = require("fs");
var http = require("http");
http.createServer(function(request, response) {
    //Send the http header. Http status 200 tarkoittaa että status OK
    //kirjotusasu
    response.writeHead(200, {'Content-type': 'text/html'});

    response.write("<a href='https://www.google.com/maps/search/timontie+1/@60.3973296,24.2764157,10z/data=!3m1!4b1'>Link</a>\n");

    var data = "<table border='1'><tr><td>Matti</td><td>Timotie</td></tr><tr><td>Maija</td><td>Asematie</td></tr>";
    response.write(data);

    //Send the response body hello world, kirjoittaa hello worldl
    response.end("Hello world!");
}).listen(8081); //listenaa portin 8081

//printataan consoliin yhteyden muodostuoessa
console.log('Server running at http://127.0.0.1:8081/');


