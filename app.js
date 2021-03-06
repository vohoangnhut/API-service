const express = require('express')
const path =  require('path')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())

app.use(express.static(path.join(__dirname,'public'),{maxAge: 0}))//315360000 }))


app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({limit: '50mb', extended: true})) // parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'})) // parse application/json
app.use(cookieParser());

//Set router
require('./routes/router')(app)

console.log(`Port of service : ${process.env.PORT}`)
app.set('port', process.env.PORT || 8080)

const db = require('./models/index')

//db.db_sequelize.sync({force: true})
db.db_sequelize.sync()
    .then(()=>{
        app.listen(app.get('port'), function(){console.log(`app is running on port ${app.get('port')}`)})
})