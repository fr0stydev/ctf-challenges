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

app.get('/signup', (req, res) => {
    res.render('signup');
})


app.post('/authentication', (req, res)=> {
    
    const body = req.body
    console.log(body)
    axios.post('http://localhost:5000/authentication', body)
    .then(function(response){
        const data = response['body']
        if (data === 'Success'){
            const info = 'You have successfully registered an account! Log in to get your flag'
            res.send(info)
        }
        else if (data === 'Fail'){
            const info = 'This code has already been redeemed \n Error: status = True'
            res.send(id=text)
        }
        else{
            console.log(data)
            const info = 'Invalid format'
            res.send("Error")
        }
    })
})
app.listen(3030, ()=>{
    console.log('App listening on port 3030');
});





