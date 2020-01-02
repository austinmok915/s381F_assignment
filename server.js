const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var title = null;
var description = null;

app.get('/', (req,res) => {
	res.redirect('/upload');
});

app.get('/upload', (req,res) => {
	res.status(200).render('upload');
});

app.post('/upload', (req,res) => {
	res.redirect('/display');
	title = req.body.title;
	description = req.body.description
});

app.get('/display', (req,res) => {
	console.log(title);
	console.log(description)
	res.status(200).render('display', {t: title, d: description});
});


app.listen(process.env.PORT || 8099);
