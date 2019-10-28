const express = require('express');
//const axios = require('axios');
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


//Connection to MySQL

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'xssinject'
  });


app.get('/', (req, res) => {
    res.render('index');
})

app.post('/sendcomments', (req, res) => {
    const comment = req.body.username
    console.log(comment)
    connection.connect(function(err){
        console.log('connected!')
        const sql = "INSERT INTO comments (comment) VALUES (" + comment + ")";
        connection.query(sql, (err, results)=>{
            console.log('comment inserted');
        })
    })
    
})

app.listen(3030, ()=>{
    console.log("Listening on Port 3030")
})