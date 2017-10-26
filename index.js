var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, data) {
	if (err) throw err;
    var files = data.join(', ');
    fs.writeFile('files.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano'.green);
    });
});