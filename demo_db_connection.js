var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "a16vhuovinen",
password: "huovinen"
});

con.connect(function(err) {
if (err) throw err;
console.log("Yhdistetty!");
});