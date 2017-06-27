const Sequelize = require('sequelize')
const path = require('path')
var JAWS_DATABASE_URL =  'mysql://gfarya5gse36uz1e:yaqc2rixws5xorzr@jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wkvrgvqvsd6157n2?reconnect=true'
var local_DB_URL = 'mysql://root:Teo54321@localhost:3306/db_node_api_service'
const db_sequelize = new Sequelize(JAWS_DATABASE_URL);

//CLEARDB_DATABASE_URL=mysql://bc49495ded2948:d61c3548@us-cdbr-iron-east-03.cleardb.net/heroku_635a910a6589203?reconnect=true
//DEV_DATABASE_URL=mysql://root:Teo54321@localhost:3306/db_node

const user = db_sequelize.import(path.join(__dirname,'user.js'))

const db = {}
db.user = user
db.db_sequelize = db_sequelize

module.exports = db