const express = require('express');
const Browser = require('zombie');
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
    host     : 'database',
    user     : 'root',
    password : 'hackerman06',
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
        connection.query(sql, [comment], (err, results)=>{
            console.log(results);
        })
        res.send('Comment Sent Successfully')
    })


app.get('/retrievecomments', (req, res) => {
    const obj = []
    const sql = "SELECT comment FROM comments"
    connection.query(sql, (err, result, fields)=>{
        if (err) throw err;
        for (var i = 0; i < result.length; i++){
            obj.push({comment: result[i].comment})
        }
        const data = []
        for (var j = 0; j < obj.length; j++){
            console.log(obj[j].comment)
            data.push(obj[j].comment)
        }
        res.render('admin', {comment:data});
    })
})

app.listen(3030, ()=>{
    console.log("Listening on Port 3030")
    setInterval(()=>{
        const browser = new Browser()
        browser.setCookie({name: 'session', domain: 'localhost', value:'flag{stol3ncooki3s}'})
        browser.visit('http://localhost:3030/retrievecomments', ()=>{
            const value = browser.getCookie('session')
    })

    }, 5000)
})
