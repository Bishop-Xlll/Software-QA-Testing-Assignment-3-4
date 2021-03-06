const express = require('express');
const path = require('path');

const app = express();
app.use('/static',express.static('public'))
app.get('/', function (req, res){
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/Retire', function (req, res){
	res.sendFile(path.join(__dirname, '/Retire.html'));
});

app.get('/BMI', function (req, res){
	res.sendFile(path.join(__dirname, '/BMI.html'));
});

app.listen(8080);