var fs = require('fs');

fs.unlink('new2.txt', function (err) {
if (err) throw err;
console.log('Tiedosto poistettu!');
});