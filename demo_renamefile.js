var fs = require('fs');

fs.rename('new2.txt', 'new3.txt', function (err) {
if (err) throw err;
console.log('Tiedosto on nimetty uudestaan!');
});