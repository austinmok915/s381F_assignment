const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine','ejs');

const photo = new Array(
	{title: '', description: '', picture :''}
);


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
	photo.picture = new Buffer(fs.readFileSync(req.body.filetoupload.path)).toString("base64");
	console.log(photo.picture);
	res.redirect('/display');
});

app.get('/display', (req,res) => {
	res.status(200).render('display');
});

app.post('/display', (req,res) => {
	res.status(200).render('display');
});

app.listen(process.env.PORT || 8099);
