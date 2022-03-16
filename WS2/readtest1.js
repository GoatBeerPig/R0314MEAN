const fs = require("fs");

console.log("Program started.");

//fs lukee ja sitten tallentaa data muuttujaan
var data = fs.readFileSync('example.txt');
//data stringiksi
console.log(data.toString());



for (var i=0; i<15; i++) {
    console.log("Node just keeps on going while the files is being read...");
}


console.log("Program Ended.");