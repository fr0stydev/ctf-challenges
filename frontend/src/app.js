const express = require('express');
const axios = require('axios');
const app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

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


app.get('/', (req, res) => {
    res.render('index');
})

app.post('/login', (req, res)=>{
    const body = req.body
    console.log(body)
})

app.listen(3030, ()=>{
    console.log('App listening on port 3030');
})
