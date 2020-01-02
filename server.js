const url = require('url');
const fs = require('fs');
const formidable = require('formidable');
const express = require('express');
const app = express();

app.set('view engine','ejs');

var title = null;
var description = null;
var mimetype = "images/jpeg";

app.get('/', (req,res) => {
	res.redirect('/filetoupload');
});

app.get('/filetoupload', (req,res) => {
	res.status(200).render('filetoupload');
});

app.post('/filetoupload', (req,res) => {
        title = req.title;
	console.log(req.title);
	title = req.description;
	console.log(description);


	res.redirect('/display');
});

app.get('/display', (req,res) => {
	res.status(200).render('display', {t: title, d: description});
});

app.listen(process.env.PORT || 8099);
