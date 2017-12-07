var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "a16vhuovinen",
password: "huovinen",
database: "ska16vhuovinen"
});

con.connect(function(err) {
if (err) throw err;
console.log("Yhdistetty!");
var sql = "INSERT INTO asiakkaat (nimi, osoite) VALUES ('Pulju', 'Koskikatu 3')";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("1 tietue lisätty");
});
});