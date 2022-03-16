const fs = require ("fs");


console.log("Program started.");


fs.readFile('teht1.txt', reader);
fs.readFile('toinen_teksti.txt', reader);




function reader(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
}