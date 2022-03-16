const express = require('express');
const app = express();


app.get('/', function(req, res) {
    res.send("Nothing to see here");
})


app.get('/frontpage', function(req, res) {
    res.sendFile(__dirname + "/frontpage.html");
})

app.get('*', function(req, res) {
    res.send("Hello world!")

})

app.listen(8081, function() {
    console.log("Site on 8081");
})