var mysql = require('mysql');  
var connection = mysql.createPool({  
host: 'magnesium',  
user: 'a16vhuovinen',  
password: 'huovinen',  
database: 'ska16vhuovinen'  
});  
module.exports = connection;