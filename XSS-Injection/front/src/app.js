const express = require('express');
//const axios = require('axios');
const app = express();
const bodyParser = require('body-parser')
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
    const comment = req.body.comments
    console.log(comment)
        //const sql = "INSERT INTO comments(comment) VALUES (" + connection.escape(comment) + ")";
        const sql = "INSERT INTO comments(comment) VALUES (?)"
        connection.query(sql, [comments], (err, results)=>{
            console.log(results);
        })
        connection.end();
        res.send('Comment Sent Successfully')
    })


app.get('/retrievecomments', (req, res) => {
    const sql = "SELECT comment FROM comments"
    connection.query(sql, (err, result, fields)=>{
        if (err) throw err;
        for (i=0; i<result.length;i++){
            console.log(result[i])
        }
    })
})

app.listen(3030, ()=>{
    console.log("Listening on Port 3030")
})