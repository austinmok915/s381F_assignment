const url = require('url');
const fs = require('fs');
const formidable = require('formidable');
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var title = null;
var description = null;
var mimetype = "images/jpeg";
var image = null;

app.get('/', (req,res) => {
	res.redirect('/upload');
});

app.get('/upload', (req,res) => {
	res.status(200).render('upload');
});

app.post('/upload', (req,res) => {
	const form = new formidable.IncomingForm();
    	form.parse(req, (err, fields, files) => {
      		const filename = files.filetoupload.path;
      		if (fields.title && fields.title.length > 0) {
        		title = fields.title;
      		}
		if (fields.description && fields.description.length > 0) {
        		description = fields.description;
      		}
      		if (files.filetoupload.type) {
        		mimetype = files.filetoupload.type;
      		}
		fs.readFile(files.filetoupload.path, (err,data) => {
			image = new Buffer.from(data).toString('base64');
		});
	});
	res.redirect('/display');
});

app.get('/display', (req,res) => {
	res.status(200).render('display', {t: title, d: description});
});

app.listen(process.env.PORT || 8099);
