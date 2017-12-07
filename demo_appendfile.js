var fs = require('fs');

fs.appendFile('new.txt', 'ZA WARUDO!!', function (err) {
if (err) throw err;
console.log('Tallessa!');
});