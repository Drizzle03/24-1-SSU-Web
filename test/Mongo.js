const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://tori1652:1652@soongsil.ovyisa7.mongodb.net/?retryWrites=true&w=majority&appName=soongsil';
mongoclient.connect(url).then(client=>{
    console.log('몽고 DB 접속 성공');
})

var mysql = require('mysql2');
var conn = mysql.createConnection({
    host : "localhost",
    user : "tori1652",
    password: "1652",
    database: "myboard"
});
conn.connect();
