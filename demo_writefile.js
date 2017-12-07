var fs = require('fs');

fs.writeFile('new2.txt', 'MUDAMUDAMUDAMUDAMUDAMUDAMUDA!', function (err) {
if (err) throw err;
console.log('Korvattu!');
});