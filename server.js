const bodyParser = require('body-parser')
var multer  = require('multer')
var upload = multer()
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.post('/filetoupload', upload.array(), (req,res) => {
        let formData = req.body;
	console.log(formData);
	res.redirect('/display');
});

app.get('/display', (req,res) => {
	res.status(200).render('display', {t: title, d: description});
});

app.listen(process.env.PORT || 8099);
