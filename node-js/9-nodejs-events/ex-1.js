var fs = require('fs');

var readStream = fs.createReadStream('./demofile.txt');

// Write to the console when the file is opend:
readStream.on('open', function () {
    console.log('The file is open');
});