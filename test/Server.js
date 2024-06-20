
//mysql 모듈 불러옴
/*var mysql = require('mysql');

//mysql 접속 생성
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1652',
    database: 'myboard',
});

//mysql 접속
conn.connect();

//express 모듈 불러옴
const express = require('express');
const app = express(); // express 객체 생성

// 폼 데이터 파싱을 위해 추가
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); 
//app.use : 미들웨어를 등록하는 메소드 통신할 때 bodyParser를 사용하겠다고 선언
//bodyParser.urlencoded : 폼 데이터를 파싱할 때 사용하는 미들웨어
//extended : 중첩된 객체표현을 허용할지 말지를 정하는 옵션, true면 qs, false면 querystring 모듈 사용

//Port 설정
const PORT = 8080;

//서버 실행
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/list', function(req, res) {
    //쿼리 실행
    //function(err, rows, fields) : 쿼리 실행 후 결과를 받아올 콜백함수
    conn.query("select * from post", function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
    });
});

app.get('/enter', function(req, res) {
    res.sendFile(__dirname + '/enter.html');
});

app.post('/save', function(req, res) {
    console.log('저장완료!');
    console.log(req.body); // 폼 데이터 확인
    console.log(req.body.title);
    console.log(req.body.content);
    let sql = "insert into post (title, content, created) values (?, ?, now())";
    let params = [req.body.title, req.body.content]; //저장할 데이터를 의미?
    conn.query(sql, params, function(err, result) {
        if (err) throw err;
        console.log('저장완료!');
    });
    res.send('데이터 추가 성공');
});
*/

const PORT = 8080;

const mongoclient = require('mongodb').MongoClient;
const ObjId = require('mongodb').ObjectId;
const url = 'mongodb+srv://tori1652:1234@soongsil.ovyisa7.mongodb.net/?retryWrites=true&w=majority&appName=soongsil';
let mydb;

mongoclient
.connect(url)
.then(client=>{
    mydb = client.db('myboard');

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });    
})
.catch(error => {
    console.error(error);
});


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs'); // ejs를 사용하기 위해 설정


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/enter', function(req, res) {
    res.render('enter.ejs');
});

app.post('/save', function(req, res) {
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.someDate);
    mydb.collection('post').insertOne(
        {title : req.body.title, content : req.body.content, date : req.body.someDate}).then(result => {
            console.log(result);
            console.log('저장완료!');
        });
});

app.get("/list", function (req, res) {
    //   conn.query("select * from post", function (err, rows, fields) {
    //     if (err) throw err;
    //     console.log(rows);
    //   });
        mydb.collection('post').find().toArray().then(result => {
          console.log(result);
          res.render('list.ejs', { data : result });
        })
    });


app.post("/delete", function (req, res) {
    console.log(req.body._id);
    req.body._id = new ObjId(req.body._id);
    mydb.collection('post').deleteOne(req.body)
    .then(result=>{
        console.log('삭제완료');
    })
});

//759