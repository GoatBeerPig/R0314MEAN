const fs = require('fs');
const path = require('path');
  
fs.mkdir(path.join(__dirname, 'newdata'),
//recursive, että se toimi myös uudelleenajettaessa
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });


  var data = fs.readFileSync('teht1.txt').toString();
  var data2 = fs.readFileSync("toinen_teksti.txt").toString();

  fs.writeFile("./newdata/newdata.txt", data+"\n"+data2, function(err) {
    if (err) throw err;
    console.log('written in data!');

});

