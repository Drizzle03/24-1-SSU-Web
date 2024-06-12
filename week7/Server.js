var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1652',
    database: 'myboard',
});

conn.connect();

const express = require('express');
const app = express();