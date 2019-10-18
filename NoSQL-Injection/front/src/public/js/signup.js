function signup(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const token = document.getElementById('token').value;
    const query = '{'+"'value':" +  "'"+ token + "'" + '}'

    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function()
    {
        var READYSTATE_COMPLETED = 4;
        var HTTP_STATUS_OK = 200;

        if( this.readyState == READYSTATE_COMPLETED
            && this.status == HTTP_STATUS_OK )
        {
            document.getElementById("text").innerHTML = this.responseText;
        }
    }
    xmlHttpRequest.open('POST', 'http://localhost:3030/authentication')
    xmlHttpRequest.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    
    xmlHttpRequest.send('username='+ username + '&password=' + password + '&query=' + query)
}