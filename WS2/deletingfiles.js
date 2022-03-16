const fs = require("fs");

fs.unlink("appendingfiles.txt", function(err) {
    if (err) throw err;
    console.log("File deleted!");
});