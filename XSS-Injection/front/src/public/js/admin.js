const fetch = require('node-fetch')


function getcomments(){
  fetch('http://localhost:3030/retrievecomments')
    .then(res => res.text())
    .then(body => console.log(body));
}


getcomments()