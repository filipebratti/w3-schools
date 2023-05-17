var fs = require('fs');

// create a file namde munewfile3.txt:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!')
})