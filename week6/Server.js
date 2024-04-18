const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('Server is running on port 8080');
});

app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
});

/*
app.get('/', function(req, res){
    res.send(
        '<html>\
        <body>\
        <h1>홈입니다.</h1>\
        <marquee><h2>메롱메롱</h2></marquee>\
        </body>\
        </html>'
    );
})

*/

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});