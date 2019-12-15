const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
const app = express();

app.set('view engine','ejs');

const photo = new Array(
	{title: '', description: '', picture :''}
);

app.set('view engine','ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
	res.redirect('/upload');
});

app.get('/upload', (req,res) => {
	res.status(200).render('upload');
});

app.post('/upload', (req,res) => {
	photo.title = req.body.title;
	photo.description = req.body.description;
	photo.picture = new Buffer(fs.readFileSync(req.body.filetoupload)).toString("base64")
	res.redirect('/display');
});

app.get('/display', (req,res) => {
	res.status(200).render('display');
});

app.post('/display', (req,res) => {
	res.status(200).render('display');
});

app.listen(process.env.PORT || 8099);
