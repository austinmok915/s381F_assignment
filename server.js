const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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
	res.redirect('/display');
});

app.get('/display', (req,res) => {
	res.status(200).render('display', {t: req.body.title, d:req.body.description});
});


app.listen(process.env.PORT || 8099);
