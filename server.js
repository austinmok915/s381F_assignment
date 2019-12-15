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
	req.body.image = req.body.image.replace(/^data:image\/jpeg+;base64,/, "");
	req.body.image = req.body.image.replace(/ /g, '+');
	photo.picture = req.body.image;
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
