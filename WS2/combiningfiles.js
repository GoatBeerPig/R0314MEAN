const fs = require("fs");


var data = fs.readFileSync('teht1.txt').toString();
var data2 = fs.readFileSync("toinen_teksti.txt").toString();


fs.writeFile("combiningfiles.txt", data+"\n"+data2, function(err) {
    if (err) throw err;
    console.log('Combined!');

});

var data3 = fs.readFileSync("combiningfiles.txt").toString();
var string ="I wrote this!";

fs.appendFile('appendingfiles.txt', string+" "+data3+" "+string, function (err) {
    if (err) throw err;
    console.log('Appended!');
  });





