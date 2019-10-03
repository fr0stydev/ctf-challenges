const express = require('express');
const axios = require('axios');
const app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var mysql = require('mysql')

var path = require('path');
var viewPath = path.join(__dirname, 'views');
var publicPath = path.join(__dirname, 'public')

//Setting up Express
app.set('views', viewPath);
app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Set up MySQL Connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'sqlinject'
  });


app.get('/', (req, res) => {
    res.render('index');
})

app.post('/login', (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    let query = "SELECT * FROM credentials where username = '" + username + "' and password = '" + password + "'";
    console.log("username: " + username);
    console.log("password: " + password);
    console.log('query: ' + query);
    connection.query(query, function (error, results){
        console.log(results)
        console.log(error)
        if (results.length){
            res.send('FLAG_7483254367')
        }else{
        res.send('Wrong Credentials')
        }
    })
    

})

app.listen(3030, ()=>{
    console.log('App listening on port 3030');
})
