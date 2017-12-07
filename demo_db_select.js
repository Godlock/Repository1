var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "a16vhuovinen",
password: "huovinen",
database: "ska16vhuovinen"
});

con.connect(function(err) {
if (err) throw err;
con.query("SELECT * FROM asiakkaat", function (err, result, fields) {
if (err) throw err;
console.log(result);
});
});